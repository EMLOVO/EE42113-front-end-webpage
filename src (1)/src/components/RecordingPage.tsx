import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Mic, StopCircle, Loader2, PauseCircle, PlayCircle, Trash } from "lucide-react";
import type { Subject, Notecard } from "../App";
import { toast } from "sonner";
import { Progress } from "./ui/progress";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";

interface RecordingPageProps {
    subjects: Subject[];
    onImport: (subjectId: string, deckName: string, cards: Notecard[]) => string | void;
    onOpenDeckById?: (deckId: string) => void;
}

const generatedJapaneseCards: Notecard[] = [
    { id: 'jp1', front: 'Grammar: 〜ている usage', back: 'Describes an ongoing action or current state.' },
    { id: 'jp2', front: 'Vocab: 勉強 (benkyou)', back: 'Study; learning.' },
    { id: 'jp3', front: 'Grammar: 〜なければならない', back: 'Must; obligation form.' },
    { id: 'jp4', front: 'Vocab: 習慣 (shuukan)', back: 'Habit; custom.' }
];

export function RecordingPage({ subjects, onImport, onOpenDeckById }: RecordingPageProps) {
    const [recording, setRecording] = useState(false);
    const [paused, setPaused] = useState(false);
    const [showGenerated, setShowGenerated] = useState(false);
    const [targetSubject, setTargetSubject] = useState(subjects[0]?.id ?? "");
    const audioCtxRef = useRef(null as any);
    const analyserRef = useRef(null as any);
    const micStreamRef = useRef(null as any);
    const rafRef = useRef(null as any);
    const [voiceLevel, setVoiceLevel] = useState(0);
    const buttonsRef = useRef(null as any);
    const [buttonsWidth, setButtonsWidth] = useState(0);
    const { transcript, resetTranscript, browserSupportsSpeechRecognition, listening } = useSpeechRecognition();
    const [elapsed, setElapsed] = useState(0);
    const timerRef = useRef<number | null>(null);
    const [hasAudio, setHasAudio] = useState(false);
    const [hasText, setHasText] = useState(false);

    useEffect(() => {
        if (!recording) return;

        // Reset transcript and generated state on start
        resetTranscript();
        setShowGenerated(false);
        setPaused(false);
        setHasAudio(false);
        setHasText(false);
        setElapsed(0);
        if (timerRef.current) window.clearInterval(timerRef.current);
    timerRef.current = window.setInterval(() => setElapsed((s: number) => s + 1), 1000) as any;

        // Start listening via react-speech-recognition
        try {
            // Ensure any previous transcript is cleared on (re)start
            SpeechRecognition.startListening({ continuous: true, language: 'en-US', clearTranscriptOnListen: true } as any);
        } catch {}

        return () => {
            // Stop listening if effect cleans up (e.g., recording toggled off)
            try { SpeechRecognition.stopListening(); } catch {}
            if (timerRef.current) { window.clearInterval(timerRef.current); timerRef.current = null; }
        };
    }, [recording, resetTranscript]);

    // Start mic level meter via Web Audio API when recording
    useEffect(() => {
        if (!recording) return;
        (async () => {
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                const ctx = new (window as any).AudioContext();
                const source = ctx.createMediaStreamSource(stream);
                const analyser = ctx.createAnalyser();
                analyser.fftSize = 2048;
                source.connect(analyser);
                audioCtxRef.current = ctx;
                analyserRef.current = analyser;
                micStreamRef.current = stream;

                const data = new Uint8Array(analyser.frequencyBinCount);
                const tick = () => {
                    analyser.getByteTimeDomainData(data);
                    // Compute rough RMS to represent voice strength 0-100
                    let sum = 0;
                    for (let i = 0; i < data.length; i++) {
                        const v = (data[i] - 128) / 128; // -1..1
                        sum += v * v;
                    }
                    const rms = Math.sqrt(sum / data.length); // 0..~1
                    const level = Math.max(0, Math.min(100, Math.round(rms * 140))); // scale
                    setVoiceLevel(level);
                    rafRef.current = requestAnimationFrame(tick);
                };
                tick();
            } catch (err) {
                // Permission denied or unavailable; keep level at 0
                setVoiceLevel(0);
            }
        })();

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            if (audioCtxRef.current) try { audioCtxRef.current.close(); } catch {}
            if (micStreamRef.current) {
                try { micStreamRef.current.getTracks().forEach((t: any) => t.stop()); } catch {}
            }
        };
    }, [recording]);

    // Measure the Start/Stop buttons group width to size the mic level bar
    useEffect(() => {
        const measure = () => {
            if (buttonsRef.current) {
                try {
                    const rect = buttonsRef.current.getBoundingClientRect();
                    setButtonsWidth(Math.round(rect.width));
                } catch {}
            }
        };
        measure();
        window.addEventListener('resize', measure);
        return () => window.removeEventListener('resize', measure);
    }, [recording]);

    // Stop: finalize session, clear transcript, then show generated artifacts and mark audio/text as ready
    const stopRecording = () => {
        setRecording(false);
        try { SpeechRecognition.stopListening(); } catch {}
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        if (audioCtxRef.current) { try { audioCtxRef.current.close(); } catch {} }
        if (micStreamRef.current) { try { micStreamRef.current.getTracks().forEach((t: any) => t.stop()); } catch {} }
        if (timerRef.current) { window.clearInterval(timerRef.current); timerRef.current = null; }
        // On final stop we clear transcript (fresh for next session) and produce indicators
        resetTranscript();
        setHasAudio(true);
        setHasText(true);
        setPaused(false);
        setTimeout(() => setShowGenerated(true), 600);
    };

    // Break: pause timer & listening but KEEP transcript (no indicators yet)
    const breakRecording = () => {
        if (!recording || paused) return;
        setPaused(true);
        try { SpeechRecognition.stopListening(); } catch {}
        if (timerRef.current) { window.clearInterval(timerRef.current); timerRef.current = null; }
    };

    // Continue: resume listening & timer without clearing transcript
    const continueRecording = () => {
        if (!paused) return;
        setPaused(false);
        try { SpeechRecognition.startListening({ continuous: true, language: 'en-US', clearTranscriptOnListen: false } as any); } catch {}
        if (timerRef.current) { window.clearInterval(timerRef.current); }
        timerRef.current = window.setInterval(() => setElapsed((s: number) => s + 1), 1000) as any;
    };

    const importDeck = () => {
        if (!targetSubject) return;
        const deckId = onImport(targetSubject, 'Japanese Lecture Summary', generatedJapaneseCards);
        if (deckId) {
            toast.success("Deck imported", { description: 'Japanese Lecture Summary', action: {
                label: 'Go to deck',
                onClick: () => onOpenDeckById && onOpenDeckById(deckId as string)
            }});
        } else {
            toast.success("Deck imported", { description: 'Japanese Lecture Summary' });
        }
    };

    return (
        <div className="p-6 space-y-6">
            <Card className="relative">
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="flex items-center gap-2">
                        <Mic className="text-primary" size={20} /> Lecture Recording
                    </CardTitle>
                    <Badge variant="secondary">Timestamped summarization (demo)</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="border rounded-lg p-4 min-h-[160px] relative">
                        <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">Live Speech-to-Text</span>
                            <div className="flex flex-col items-end gap-1">
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-2" ref={buttonsRef}>
                                        <Button size="sm" onClick={() => setRecording(true)} disabled={recording || paused}>
                                            <Mic size={14} className="mr-1" /> Start
                                        </Button>
                                        <Button size="sm" variant="destructive" onClick={stopRecording} disabled={!recording}>
                                            <StopCircle size={14} className="mr-1" /> Stop
                                        </Button>
                                        <Button size="sm" variant="outline" onClick={breakRecording} disabled={!recording}>
                                            <PauseCircle size={14} className="mr-1" /> Break
                                        </Button>
                                        {paused && (
                                            <Button size="sm" variant="secondary" onClick={continueRecording}>
                                                <PlayCircle size={14} className="mr-1" /> Continue
                                            </Button>
                                        )}
                                    </div>
                                    {recording && (
                                        <div className="flex items-center gap-1">
                                            <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />
                                            <span className="text-xs text-muted-foreground">Recording… {Math.floor(elapsed/60).toString().padStart(2,'0')}:{(elapsed%60).toString().padStart(2,'0')}</span>
                                        </div>
                                    )}
                                </div>
                                {/* Mic level meter directly under buttons */}
                                <div className="w-full" style={{ width: buttonsWidth || undefined }}>
                                    <Progress value={voiceLevel} className="h-2" />
                                </div>
                            </div>
                        </div>
                        <div className="text-xs whitespace-pre-wrap leading-relaxed pr-1 h-[110px] overflow-y-auto">
                            {!browserSupportsSpeechRecognition
                                ? "Browser doesn't support speech recognition."
                                : (transcript || 'Audio will appear here...')}
                        </div>
                                                {(paused || (!recording && (hasAudio || hasText))) && (
                          <div className="mt-3 flex items-center gap-2 flex-wrap">
                            {hasAudio && (
                              <span className="inline-flex items-center gap-2 px-2 py-1 rounded border bg-card text-foreground text-xs">
                                Audio file ready
                                <button className="text-muted-foreground hover:text-foreground" onClick={() => setHasAudio(false)}>
                                  <Trash size={12} /> Drop
                                </button>
                              </span>
                            )}
                            {hasText && (
                              <span className="inline-flex items-center gap-2 px-2 py-1 rounded border bg-card text-foreground text-xs">
                                Text file ready
                                <button className="text-muted-foreground hover:text-foreground" onClick={() => setHasText(false)}>
                                  <Trash size={12} /> Drop
                                </button>
                              </span>
                            )}
                          </div>
                        )}
                    </div>
                    {showGenerated && (
                        <div className="space-y-4">
                            <h3 className="font-semibold flex items-center gap-2">
                                Generated Notecards <Loader2 className="animate-spin text-primary" size={16} />
                            </h3>
                            <div className="grid grid-cols-2 gap-3">
                                {generatedJapaneseCards.map(card => (
                                    <Card key={card.id} className="border-dashed">
                                        <CardContent className="p-3">
                                            <p className="text-sm font-medium">{card.front}</p>
                                            <p className="text-xs text-muted-foreground mt-1">{card.back}</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                            <div className="flex items-end gap-4 ">
                                <div className="w-64 border p-4 rounded-md">
                                    <Select value={targetSubject} onValueChange={setTargetSubject}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select subject" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            {subjects.map(s => (
                                                <SelectItem key={s.id} value={s.id}>{s.name}</SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                                <Button onClick={importDeck}>Import Deck</Button>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
