import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Badge } from "./ui/badge";
import { Sparkles, Upload, ArrowLeft, Check } from "lucide-react";
import type { Subject, Notecard } from "../App";
import { toast } from "sonner";
import { Progress } from "./ui/progress";
import { Textarea } from "./ui/textarea";

interface GeneratorPageProps {
  subjects: Subject[];
  onImport: (subjectId: string, deckName: string, cards: Notecard[], origin?: string) => string | void;
  onCreateSubject: (name: string) => void;
  onOpenDeckById?: (deckId: string) => void;
}

export function GeneratorPage({ subjects, onImport, onCreateSubject, onOpenDeckById }: GeneratorPageProps) {
  const [fileName, setFileName] = useState("");
  const [files, setFiles] = useState<File[]>([]);
  const [processing, setProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [targetSubject, setTargetSubject] = useState(subjects[0]?.id ?? "");
  const [newSubjectName, setNewSubjectName] = useState("");

  const generatedDeckName = "DSA 101 - Core Concepts";
  const [notecardType, setNotecardType] = useState<'normal' | 'mcq'>('normal');
  const [cards, setCards] = useState<Notecard[]>([]);

  const buildGenerated = (): Notecard[] => {
    if (notecardType === 'mcq') {
      return [
        { id: 'g1', front: 'Time complexity of binary search', back: 'Correct answer: O(log n)', type: 'mcq', choices: ['O(1)', 'O(n)', 'O(log n)', 'O(n log n)'], correctIndex: 2 },
        { id: 'g2', front: 'Collision handling method in hash tables using linked lists is called…', back: 'Correct answer: Chaining', type: 'mcq', choices: ['Probing', 'Chaining', 'Rehashing', 'Masking'], correctIndex: 1 },
        { id: 'g3', front: 'Data structure with FIFO ordering?', back: 'Correct answer: Queue', type: 'mcq', choices: ['Stack', 'Tree', 'Queue', 'Graph'], correctIndex: 2 },
        { id: 'g4', front: 'Which sorting algorithm is stable?', back: 'Correct answer: Merge sort', type: 'mcq', choices: ['Quick sort', 'Heap sort', 'Merge sort', 'Selection sort'], correctIndex: 2 },
      ];
    }
    return [
      { id: 'g1', front: 'Big-O of Binary Search', back: 'O(log n) time complexity.', type: 'normal' },
      { id: 'g2', front: 'Hash Table Collision', back: 'Handled via chaining or open addressing.', type: 'normal' },
      { id: 'g3', front: 'Stack vs Queue', back: 'Stack=LIFO; Queue=FIFO.', type: 'normal' },
      { id: 'g4', front: 'Stable Sort Examples', back: 'Merge sort, insertion sort are stable.', type: 'normal' },
    ];
  };

  const handleProcess = () => {
    setProcessing(true);
    setProgress(0);
    setShowResult(false);
    // Simulate generation
    const interval = setInterval(() => {
      setProgress((p: any) => {
        const next = Math.min(100, p + 10);
        if (next === 100) {
          clearInterval(interval);
          setProcessing(false);
          setCards(buildGenerated());
          setShowResult(true);
        }
        return next;
      });
    }, 120);
  };

  const onFilePicked = (inputFiles: File[] | FileList) => {
    const list = Array.from(inputFiles);
    setFiles((prev: File[]) => {
      const names = new Set(prev.map((f: File) => f.name + f.size));
      const merged = [...prev, ...list.filter(f => !names.has(f.name + f.size))];
      return merged;
    });
    if (list.length) setFileName(list[0].name);
    toast.info("Files added", { description: `${list.length} file(s)` });
  };

  const removeFileAt = (idx: number) => {
    setFiles((prev: File[]) => prev.filter((_: File, i: number) => i !== idx));
  };

  const handleCreateSubject = () => {
    if (!newSubjectName.trim()) return;
    onCreateSubject(newSubjectName.trim());
    setTargetSubject(newSubjectName.trim().toLowerCase().replace(/\s+/g, "-"));
    setNewSubjectName("");
    toast.success("Subject created", { description: `Added ${newSubjectName}` });
  };

  const handleImport = () => {
    if (!targetSubject) return;
    const deckId = onImport(targetSubject, generatedDeckName, cards, "generator");
    if (deckId) {
      toast.success("Deck imported", { description: `${generatedDeckName}`, action: {
        label: 'Go to deck',
        onClick: () => onOpenDeckById && onOpenDeckById(deckId as string)
      }});
    } else {
      toast.success("Deck imported", { description: `${generatedDeckName}` });
    }
  };

  return (
    <div className="p-6 space-y-6">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            {showResult ? (
              <>
                <Sparkles className="text-primary" size={20} />
                Processed Notecards
              </>
            ) : (
              <>
                <Upload className="text-primary" size={20} />
                AI Notecard Generator
              </>
            )}
          </CardTitle> 
          {showResult && (
            <Button variant="ghost" size="sm" className="gap-2" onClick={() => setShowResult(false)}>
              <ArrowLeft size={16} /> Back
            </Button>
          )}
        </CardHeader>
        <CardContent className="space-y-4">
          {!showResult ? (
          <div className="grid grid-cols-4 gap-4 items-end">
            <div className="col-span-2 space-y-2">
              <Label htmlFor="fn">Enter a file/topic name</Label>
              <Input id="fn" placeholder="e.g., Data Structure and Algo 101" value={fileName} onChange={(e: any) => setFileName(e.target.value)} />
              {/* Drag & drop / file picker */}
              <div
                className="mt-3 border border-dashed rounded-md p-4 text-sm text-muted-foreground bg-muted/30 hover:bg-muted cursor-pointer"
                onDragOver={(e: any) => { e.preventDefault(); }}
                onDrop={(e: any) => { e.preventDefault(); const fl = e.dataTransfer.files; if (fl && fl.length) onFilePicked(fl); }}
                onClick={() => (document.getElementById('file-input') as HTMLInputElement)?.click()}
              >
                {files.length ? (
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-foreground">{files.length} file(s) selected</span>
                      <Badge variant="outline">Ready</Badge>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {files.map((f: File, i: number) => (
                        <span key={f.name + i} className="inline-flex items-center gap-2 px-2 py-1 rounded border bg-card text-foreground text-xs">
                          {f.name}
                          <button className="text-muted-foreground hover:text-foreground" onClick={(e) => { e.stopPropagation(); removeFileAt(i); }}>×</button>
                        </span>
                      ))}
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-between">
                    <span>Drag a file here or click to upload</span>
                    <Upload size={16} />
                  </div>
                )}
                <input id="file-input" type="file" multiple className="hidden" onChange={(e: any) => { if (e.target.files && e.target.files.length) onFilePicked(e.target.files); }} />
              </div>
            </div>
            <Button className="h-10" disabled={!fileName.trim() || processing} onClick={handleProcess}>
              <Sparkles size={16} className="mr-2" />
              {processing ? "Processing…" : "Process"}
            </Button>
            <div className="space-y-2">
              <Label>Notecard Type</Label>
              <Select value={notecardType} onValueChange={(v: any) => setNotecardType(v)}>
                <SelectTrigger className="border border-border rounded-md bg-card">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="normal">Normal</SelectItem>
                  <SelectItem value="mcq">Multiple Choice</SelectItem>
                </SelectContent>
              </Select>
            </div>
            {/* Progress bar under Process */}
            <div className="col-span-4">
              {processing && (
                <div className="mt-2">
                  <Progress value={progress} className="h-2" />
                </div>
              )}
            </div>
          </div>
          ) : (
            <div className="space-y-4">
              {/* Editable cards */}
              <div className="grid grid-cols-2 gap-4">
                {cards.map((card: Notecard, ci: number) => (
                  <Card key={card.id}>
                    <CardContent className="p-4 space-y-3">
                      <div className="space-y-1">
                        <Label>Question</Label>
                        <Input value={card.front} onChange={(e: any) => {
                          const v = e.target.value;
                          setCards((prev: Notecard[]) => prev.map((c: Notecard, i: number) => i===ci ? { ...c, front: v } : c));
                        }} />
                      </div>
                      {card.type === 'mcq' ? (
                        <div className="space-y-2">
                          <Label>Choices</Label>
                          {card.choices?.map((choice: string, i: number) => (
                            <div key={i} className="flex items-center gap-2">
                              <Button
                                type="button"
                                size="icon"
                                variant={card.correctIndex === i ? 'default' : 'outline'}
                                onClick={() => setCards((prev: Notecard[]) => prev.map((c: Notecard, idx: number) => idx===ci ? { ...c, correctIndex: i } : c))}
                                className="w-8 h-8"
                                title="Mark correct"
                              >
                                <Check size={16} />
                              </Button>
                              <Input
                                className="flex-1"
                                value={choice}
                                onChange={(e: any) => {
                                  const v = e.target.value;
                                  setCards((prev: Notecard[]) => prev.map((c: Notecard, idx: number) => {
                                    if (idx !== ci) return c;
                                    const ch = [...(c.choices||[])];
                                    ch[i] = v;
                                    return { ...c, choices: ch } as Notecard;
                                  }));
                                }}
                              />
                              <Button
                                type="button"
                                variant="ghost"
                                onClick={() => setCards((prev: Notecard[]) => prev.map((c: Notecard, idx: number) => {
                                  if (idx !== ci) return c;
                                  const ch = [...(c.choices||[])];
                                  if (ch.length < 3) return c; // keep at least two after deletion
                                  ch.splice(i,1);
                                  let newCorrect = c.correctIndex ?? 0;
                                  if (i === c.correctIndex) newCorrect = 0;
                                  else if ((c.correctIndex ?? 0) > i) newCorrect = (c.correctIndex ?? 0) - 1;
                                  return { ...c, choices: ch, correctIndex: newCorrect } as Notecard;
                                }))}
                              >
                                ×
                              </Button>
                            </div>
                          ))}
                          <div>
                            <Button type="button" size="sm" variant="secondary" onClick={() => setCards((prev: Notecard[]) => prev.map((c: Notecard, idx: number) => {
                              if (idx !== ci) return c;
                              const ch = [...(c.choices||[]), `Option ${((c.choices||[]).length+1)}`];
                              return { ...c, choices: ch } as Notecard;
                            }))}>Add choice</Button>
                          </div>
                          <div className="space-y-1">
                            <Label>Answer explanation (optional)</Label>
                            <Textarea value={card.back} onChange={(e: any) => setCards((prev: Notecard[]) => prev.map((c: Notecard,i: number) => i===ci ? { ...c, back: e.target.value } : c))} />
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-1">
                          <Label>Answer</Label>
                          <Textarea value={card.back} onChange={(e: any) => setCards((prev: Notecard[]) => prev.map((c: Notecard,i: number) => i===ci ? { ...c, back: e.target.value } : c))} />
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Import controls in same view */}
              <div className="grid grid-cols-4 gap-6 items-end">
                <div className="space-y-2 col-span-2">
                  <Label>Import into subject</Label>
                  <div className="flex gap-2 items-center">
                    <div className="flex-1 border rounded-md p-2 bg-card">
                      <Select value={targetSubject} onValueChange={setTargetSubject}>
                        <SelectTrigger className="bg-card">
                          <div className="pr-6 w-full text-left"><SelectValue placeholder="Select subject" /></div>
                        </SelectTrigger>
                        <SelectContent>
                          {subjects.map(s => (
                            <SelectItem key={s.id} value={s.id} className="pr-8">
                              <span className="block truncate">{s.name}</span>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <Button variant="default" onClick={handleImport} disabled={!targetSubject}>Add</Button>
                  </div>
                </div>
                <div className="space-y-2 ml-4">
                  <Label>Create new subject</Label>
                  <div className="flex gap-2">
                    <Input placeholder="e.g., Chemistry" value={newSubjectName} onChange={(e: any) => setNewSubjectName(e.target.value)} />
                    <Button variant="outline" onClick={handleCreateSubject}>Create</Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
