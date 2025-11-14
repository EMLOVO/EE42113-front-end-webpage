import { useCallback, useMemo, useState } from "react";
import { Navigation } from "./components/Navigation";
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { GeneratorPage } from "./components/GeneratorPage";
import { SubjectsPage } from "./components/SubjectsPage";
import { RecordingPage } from "./components/RecordingPage";
import { DeckReview } from "./components/DeckReview";
import { Toaster } from "./components/ui/sonner";
import { Leaderboard } from "./components/Leaderboard";
import { SettingsPage } from "./components/SettingsPage";

// Data models
export interface Notecard {
    id: string;
    front: string;
    back: string; // For MCQ can hold explanation or the correct answer text
    type?: 'normal' | 'mcq';
    choices?: string[]; // Present only for MCQ cards
    correctIndex?: number; // Index into choices for the correct answer
}
export interface Deck { id: string; name: string; subjectId: string; notecards: Notecard[]; origin?: string; }
export interface Subject { id: string; name: string; decks: Deck[]; }

export default function App() {
    const [activeScreen, setActiveScreen] = useState('dashboard');
    const [timePeriod, setTimePeriod] = useState('week');
    const [subjects, setSubjects] = useState(() => initializeSubjects());
    const [reviewDeck, setReviewDeck] = useState(null as any);
    const [lastQuickReviewId, setLastQuickReviewId] = useState(null as any);

    // ---------- Initialization ----------
    function initializeSubjects(): Subject[] {
        const sample: Subject[] = [
            {
                id: 'biology',
                name: 'Biology',
                decks: [
                    {
                        id: 'bio-cell-basics',
                        name: 'Cell Basics',
                        subjectId: 'biology',
                        origin: 'sample',
                        notecards: [
                            { id: 'nc1', front: 'Organelle: Mitochondria', back: 'Powerhouse; ATP via oxidative phosphorylation.' },
                            { id: 'nc2', front: 'Golgi Apparatus function', back: 'Protein modification & packaging.' },
                            { id: 'nc3', front: 'Ribosome role', back: 'Protein synthesis (translation).' },
                        ]
                    },
                    {
                        id: 'bio-genetics',
                        name: 'Genetics Intro',
                        subjectId: 'biology',
                        origin: 'sample',
                        notecards: [
                            { id: 'nc4', front: 'Mendel’s Law of Segregation', back: 'Alleles separate during gamete formation.' },
                            { id: 'nc5', front: 'Phenotype vs Genotype', back: 'Phenotype = expressed traits; genotype = genetic makeup.' },
                        ]
                    }
                ]
            },
            {
                id: 'physics',
                name: 'Physics',
                decks: [
                    {
                        id: 'phy-mechanics',
                        name: 'Mechanics Basics',
                        subjectId: 'physics',
                        origin: 'sample',
                        notecards: [
                            { id: 'nc6', front: 'Newton’s 2nd Law', back: 'F = m * a (vector relationship).' },
                            { id: 'nc7', front: 'Kinetic Energy formula', back: 'KE = 1/2 m v^2' },
                            { id: 'nc8', front: 'Momentum conservation', back: 'Total momentum conserved in isolated system.' }
                        ]
                    }
                ]
            },
            {
                id: 'china-history',
                name: 'China History',
                decks: [
                    {
                        id: 'hist-dynasties',
                        name: 'Major Dynasties',
                        subjectId: 'china-history',
                        origin: 'sample',
                        notecards: [
                            { id: 'nc9', front: 'Qin Dynasty', back: 'First unified imperial dynasty (221–206 BCE).' },
                            { id: 'nc10', front: 'Han Dynasty hallmark', back: 'Long stability; Silk Road expansion.' }
                        ]
                    }
                ]
            }
        ];
        return sample;
    }

    // ---------- Subject / Deck mutation helpers ----------
    const addSubject = useCallback((name: string) => {
        setSubjects((prev: any) => {
            if (prev.some((s: any) => s.name.toLowerCase() === name.toLowerCase())) return prev; // prevent duplicates
            const id = name.toLowerCase().replace(/\s+/g, '-');
            return [...prev, { id, name, decks: [] }];
        });
    }, []);

    const addDeckToSubject = useCallback((subjectId: string, deckName: string, notecards: Notecard[], origin?: string): string => {
        const id = `${subjectId}-${deckName.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`;
        const newDeck: Deck = { id, name: deckName, subjectId, origin, notecards };
        setSubjects((prev: any) => prev.map((sub: any) => {
            if (sub.id !== subjectId) return sub;
            return { ...sub, decks: [...sub.decks, newDeck] };
        }));
        return id;
    }, []);

    const openDeckById = useCallback((deckId: string) => {
        const allDecks = subjects.flatMap((s: Subject) => s.decks);
        const deck = allDecks.find((d: Deck) => d.id === deckId);
        if (deck) {
            setReviewDeck(deck);
            setActiveScreen('review');
        }
    }, [subjects]);

    // ---------- Review logic ----------
    const startDeckReview = (deck: Deck) => {
        setReviewDeck(deck);
        setActiveScreen('review');
    };

    const performQuickReview = () => {
        const allDecks = subjects.flatMap((s: any) => s.decks);
        if (!allDecks.length) return;
        const deckPool = allDecks.filter((d: any) => d.id !== lastQuickReviewId);
        const chosen = deckPool[Math.floor(Math.random() * deckPool.length)];
        setLastQuickReviewId(chosen.id);
        startDeckReview(chosen);
    };

    // Memo for passing to dashboard (could extend analytics per subject later)
    const dashboardProps = useMemo(() => ({
        onNavigateToChallenge: () => { }, // legacy prop ignored
        timePeriod
    }), [timePeriod]);

    // ---------- Screen rendering ----------
    const renderScreen = () => {
        switch (activeScreen) {
            case 'dashboard':
                return <Dashboard {...dashboardProps} onQuickReview={performQuickReview} />;
            case 'generator':
                return (
                    <GeneratorPage
                        subjects={subjects}
                        onImport={(subjectId, deckName, cards, origin) => addDeckToSubject(subjectId, deckName, cards, origin)}
                        onOpenDeckById={openDeckById}
                        onCreateSubject={addSubject}
                    />
                );
            case 'subjects':
                return (
                    <SubjectsPage
                        subjects={subjects}
                        onAddSubject={addSubject}
                        onStartReview={startDeckReview}
                    />
                );
            case 'recording':
                return <RecordingPage subjects={subjects} onImport={(sid: string, name: string, cards: any[]) => addDeckToSubject(sid, name, cards, 'recording')} onOpenDeckById={openDeckById} />;
            case 'review':
                return reviewDeck ? <DeckReview deck={reviewDeck} onExit={() => setActiveScreen('subjects')} /> : null;
            case 'leaderboard':
                return <Leaderboard />;
            case 'settings':
                return <SettingsPage onNavigateTo={(screen: string) => setActiveScreen(screen as any)} />;
            default:
                return <Dashboard {...dashboardProps} />;
        }
    };

    return (

        <> 
            <div className="min-h-screen min-w-[1200px] bg-background flex">
                <Navigation
                    activeScreen={activeScreen}
                    onScreenChange={(screen) => setActiveScreen(screen as any)}
                />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <Header
                        groupName="Study App Prototype"
                        timePeriod={timePeriod}
                        onTimePeriodChange={(p) => setTimePeriod(p as any)}
                        onNavigateTo={(screen) => setActiveScreen(screen as any)}
                        showPeriodToggle={activeScreen === 'dashboard'}
                        onQuickReview={performQuickReview}
                    />
                    <div className="flex-1 overflow-y-auto">
                        {renderScreen()}
                    </div>
                </div>
                <Toaster />
            </div>
        </>
    );
}