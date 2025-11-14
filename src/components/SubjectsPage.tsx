import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { BookOpen, Play } from "lucide-react";
import type { Subject, Deck } from "../App";
import { toast } from "sonner";

interface SubjectsPageProps {
  subjects: Subject[];
  onAddSubject: (name: string) => void;
  onStartReview: (deck: Deck) => void;
}

export function SubjectsPage({ subjects, onAddSubject, onStartReview }: SubjectsPageProps) {
  const [selectedSubjectId, setSelectedSubjectId] = useState(subjects[0]?.id ?? "");
  const [newSubject, setNewSubject] = useState("");

  const selectedSubject = subjects.find(s => s.id === selectedSubjectId) ?? subjects[0];

  const handleAddSubject = () => {
    if (!newSubject.trim()) return;
    onAddSubject(newSubject.trim());
    setSelectedSubjectId(newSubject.trim().toLowerCase().replace(/\s+/g,'-'));
    setNewSubject("");
    toast.success("Subject created", { description: newSubject });
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BookOpen className="text-primary" size={20} />
          <h2 className="text-xl font-semibold">Subjects</h2>
          <Badge variant="secondary">Demo data</Badge>
        </div>
        <div className="flex gap-2">
          {subjects.map(s => (
            <Button key={s.id} variant={selectedSubjectId === s.id ? 'default' : 'outline'} onClick={() => setSelectedSubjectId(s.id)}>
              {s.name}
            </Button>
          ))}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>{selectedSubject?.name} — Decks</span>
            <div className="flex gap-2 items-center">
              <Input placeholder="Add new subject" value={newSubject} onChange={e => setNewSubject(e.target.value)} className="w-56" />
              <Button variant="outline" onClick={handleAddSubject}>Add</Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {(selectedSubject?.decks ?? []).length === 0 && (
            <p className="text-sm text-muted-foreground">No decks yet. Use the Generator or Recording to add one.</p>
          )}
          {(selectedSubject?.decks ?? []).map(deck => (
            <div key={deck.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{deck.name}</h3>
                  <p className="text-xs text-muted-foreground">Cards: {deck.notecards.length} {deck.origin ? `• From ${deck.origin}` : ''}</p>
                </div>
                <Button onClick={() => onStartReview(deck)}>
                  <Play size={16} className="mr-2" />
                  Review
                </Button>
              </div>
              <Separator className="my-3" />
              <div className="grid grid-cols-2 gap-2">
                {deck.notecards.slice(0, 6).map(c => (
                  <Card key={c.id} className="border-dashed">
                    <CardContent className="p-3">
                      <p className="text-sm font-medium">{c.front}</p>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{c.back}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
