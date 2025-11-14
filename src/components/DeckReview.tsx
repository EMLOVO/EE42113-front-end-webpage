import { useState } from "react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Progress } from "./ui/progress";
import type { Deck } from "../App";
import { RotateCcw, ChevronRight, EyeOff, Eye } from "lucide-react";

interface DeckReviewProps {
  deck: Deck;
  onExit: () => void;
}

export function DeckReview({ deck, onExit }: DeckReviewProps) {
  const [index, setIndex] = useState(0);
  const [showBack, setShowBack] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const total = deck.notecards.length;
  const card = deck.notecards[index];
  const progress = Math.round(((index) / total) * 100);
  const isMCQ = card?.type === 'mcq' && Array.isArray(card?.choices) && typeof card?.correctIndex === 'number';

  const next = () => {
    if (index < total - 1) {
      setIndex((i: number) => i + 1);
      setShowBack(false);
      setSelectedChoice(null);
    } else {
      onExit();
    }
  };

  const [feedback, setFeedback] = useState<string | null>(null);
  const feedbackOptions: { key: string; label: string }[] = [
    { key: 'easy', label: 'Easy' },
    { key: 'good', label: 'Good' },
    { key: 'bad', label: 'Bad' },
    { key: 'hard', label: 'Hard' },
  ];

  return (
    <div className="p-6 space-y-6 max-w-3xl mx-auto">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold">Reviewing: {deck.name}</h2>
        <Button variant="outline" onClick={onExit}>
          Exit
        </Button>
      </div>
      <Progress value={progress} className="h-2" />
      <Card className="min-h-[300px] flex flex-col justify-between">
        <CardContent className="p-6 text-center">
          <p className="text-lg font-medium mb-4">{showBack ? card.back : card.front}</p>

          {/* MCQ block */}
          {isMCQ && (
            <div className="mx-auto max-w-xl grid gap-2 text-left mb-4">
              {card.choices!.map((choice: string, i: number) => {
                const isCorrect = i === card.correctIndex;
                const isSelected = selectedChoice === i;
                const showCorrect = showBack && isCorrect;
                const showWrong = showBack && isSelected && !isCorrect;
                const base = 'w-full justify-start';
                const stateClass = showCorrect
                  ? 'bg-emerald-100 text-emerald-900 border-emerald-300'
                  : showWrong
                    ? 'bg-red-100 text-red-900 border-red-300'
                    : isSelected && !showBack
                      ? 'bg-secondary'
                      : '';
                return (
                  <Button
                    key={i}
                    variant="outline"
                    className={`${base} ${stateClass}`}
                    onClick={() => !showBack && setSelectedChoice(i)}
                    disabled={!!showBack}
                  >
                    <span className="mr-2 inline-flex w-5 h-5 items-center justify-center rounded-full border">
                      {String.fromCharCode(65 + i)}
                    </span>
                    {choice}
                  </Button>
                );
              })}
              {showBack && selectedChoice != null && (
                <p className={`text-sm mt-1 ${selectedChoice === card.correctIndex ? 'text-emerald-700' : 'text-red-700'}`}>
                  {selectedChoice === card.correctIndex ? 'Correct!' : 'Not quite — check the highlighted answer.'}
                </p>
              )}
            </div>
          )}
          <div className="flex justify-center gap-3">
            <Button variant="secondary" onClick={() => setShowBack((b: boolean) => !b)}>
              {showBack ? <EyeOff size={16} className="mr-1" /> : <Eye size={16} className="mr-1" />}
              {showBack ? 'Hide Answer' : 'Show Answer'}
            </Button>
            <Button onClick={next}>
              {index < total - 1 ? (<><ChevronRight size={16} className="mr-1" /> Next</>) : (<><RotateCcw size={16} className="mr-1" /> Finish</>)}
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-4">Card {index + 1} / {total}</p>
          <div className="mt-4 flex flex-col items-center gap-2">
            <p className="text-xs text-muted-foreground">How did this feel?</p>
            <div className="flex flex-wrap justify-center gap-2">
              {feedbackOptions.map(opt => (
                <Button
                  key={opt.key}
                  size="sm"
                  variant={feedback === opt.key ? 'default' : 'outline'}
                  onClick={() => setFeedback(opt.key)}
                  className="text-xs"
                >
                  {opt.label}
                </Button>
              ))}
            </div>
            {feedback && <p className="text-[11px] text-primary">Marked as: {feedback}</p>}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
