import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { ChevronRight, ChevronLeft, RotateCcw, Target, Users, User, Clock } from "lucide-react";

interface GroupChallengeProps {
  selectedConcept?: string;
}

const questions = [
  {
    id: 1,
    type: 'mcq',
    question: 'Which load balancing algorithm distributes requests in a round-robin fashion?',
    options: ['Weighted Round Robin', 'Least Connections', 'Random', 'Round Robin'],
    correct: 3
  },
  {
    id: 2,
    type: 'boolean',
    question: 'A binary search tree guarantees O(log n) search time complexity.',
    correct: false
  },
  {
    id: 3,
    type: 'short',
    question: 'What is the time complexity of inserting an element at the beginning of a linked list?',
    correct: 'O(1)'
  }
];

export function GroupChallenge({ selectedConcept }: GroupChallengeProps) {
  const [mode, setMode] = useState<'synchronous' | 'solo'>('solo');
  const [sessionState, setSessionState] = useState<'waiting' | 'in-progress' | 'completed'>('waiting');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: any }>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');
  const [participants] = useState(5);

  const handleModeChange = (newMode: string) => {
    if (sessionState === 'waiting') {
      setMode(newMode as 'synchronous' | 'solo');
    }
  };

  const handleStartSession = () => {
    setSessionState('in-progress');
  };

  const handleAnswerChange = (value: string) => {
    setSelectedAnswer(value);
  };



  const handleNext = () => {
    if (selectedAnswer) {
      setAnswers(prev => ({
        ...prev,
        [questions[currentQuestion].id]: selectedAnswer
      }));
      setSelectedAnswer('');
      
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
      } else {
        setShowResults(true);
      }
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedAnswer('');
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setSelectedAnswer('');
    setSessionState('waiting');
  };

  const isAnswerValid = () => {
    if (questions[currentQuestion].type === 'short') {
      return selectedAnswer.trim().length > 0;
    }
    return selectedAnswer !== '';
  };

  if (showResults) {
    return (
      <div className="p-6">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <Target className="text-primary" size={24} />
            <h1>Group Challenge Results</h1>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Great work! Here's how you performed:</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-2xl font-semibold text-primary">75%</p>
                  <p className="text-sm text-muted-foreground">Your Score</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold text-secondary">82%</p>
                  <p className="text-sm text-muted-foreground">Group Average</p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="font-medium">Focus Concepts</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Load Balancing</Badge>
                  <Badge variant="outline">Binary Trees</Badge>
                </div>
              </div>

              <div className="flex gap-3">
                <Button onClick={resetQuiz} variant="outline">
                  <RotateCcw size={16} className="mr-2" />
                  Try Again
                </Button>
                <Button onClick={resetQuiz} className="bg-primary text-primary-foreground">
                  Practice Similar Items
                </Button>
                {/* View Progress button removed */}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Target className="text-primary" size={24} />
            <h1>Group Challenge</h1>
            {selectedConcept && (
              <Badge className="bg-primary/10 text-primary border-primary/20">
                {selectedConcept}
              </Badge>
            )}
          </div>
          <Badge variant="secondary">
            {currentQuestion + 1} of {questions.length}
          </Badge>
        </div>

        {/* Mode Selector */}
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <Tabs value={mode} onValueChange={handleModeChange}>
                <TabsList className="grid grid-cols-2 w-64">
                  <TabsTrigger 
                    value="synchronous" 
                    disabled={sessionState === 'in-progress'}
                    className="flex items-center gap-2"
                  >
                    <Users size={16} />
                    Synchronous
                  </TabsTrigger>
                  <TabsTrigger 
                    value="solo"
                    disabled={sessionState === 'in-progress'}
                    className="flex items-center gap-2"
                  >
                    <User size={16} />
                    Solo
                  </TabsTrigger>
                </TabsList>
              </Tabs>

              {mode === 'synchronous' && (
                <div className="flex items-center gap-4">
                  {sessionState === 'waiting' && (
                    <>
                      <span className="text-sm text-muted-foreground">
                        Participants joined: {participants}
                      </span>
                      <Button onClick={handleStartSession} className="bg-primary text-primary-foreground">
                        Start Session
                      </Button>
                    </>
                  )}
                  {sessionState === 'in-progress' && (
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      <span className="text-sm font-medium text-primary">Session in progress</span>
                    </div>
                  )}
                </div>
              )}

              {mode === 'synchronous' && sessionState === 'waiting' && (
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock size={16} />
                  <span className="text-sm">Waiting for host to start...</span>
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Progress value={((currentQuestion + 1) / questions.length) * 100} className="h-2" />

        {/* Question Card */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{question.question}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {question.type === 'mcq' && (
              <div className="space-y-3">
                {question.options?.map((option, index) => (
                  <Button
                    key={index}
                    variant={selectedAnswer === index.toString() ? "default" : "outline"}
                    className={`w-full justify-start text-left h-auto p-4 ${
                      selectedAnswer === index.toString() 
                        ? 'bg-primary text-primary-foreground' 
                        : 'hover:bg-muted'
                    }`}
                    onClick={() => handleAnswerChange(index.toString())}
                  >
                    <span className="font-medium mr-3">{String.fromCharCode(65 + index)}.</span>
                    {option}
                  </Button>
                ))}
              </div>
            )}

            {question.type === 'boolean' && (
              <div className="space-y-3">
                <Button
                  variant={selectedAnswer === "true" ? "default" : "outline"}
                  className={`w-full justify-start text-left h-auto p-4 ${
                    selectedAnswer === "true" 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-muted'
                  }`}
                  onClick={() => handleAnswerChange("true")}
                >
                  <span className="font-medium mr-3">A.</span>
                  True
                </Button>
                <Button
                  variant={selectedAnswer === "false" ? "default" : "outline"}
                  className={`w-full justify-start text-left h-auto p-4 ${
                    selectedAnswer === "false" 
                      ? 'bg-primary text-primary-foreground' 
                      : 'hover:bg-muted'
                  }`}
                  onClick={() => handleAnswerChange("false")}
                >
                  <span className="font-medium mr-3">B.</span>
                  False
                </Button>
              </div>
            )}

            {question.type === 'short' && (
              <div className="space-y-2">
                <Input
                  placeholder="Type your answer..."
                  value={selectedAnswer}
                  onChange={(e) => handleAnswerChange(e.target.value)}
                  maxLength={120}
                  className="text-base bg-input-background border border-border"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>Max 120 characters</span>
                  <span>{selectedAnswer.length}/120</span>
                </div>
              </div>
            )}


          </CardContent>
        </Card>

        {/* Footer Controls */}
        <div className="sticky bottom-0 bg-background/95 backdrop-blur-sm border-t border-border p-4">
          <div className="max-w-4xl mx-auto flex justify-between">
            <Button 
              onClick={handleBack}
              disabled={currentQuestion === 0}
              variant="outline"
            >
              <ChevronLeft size={16} className="mr-2" />
              Back
            </Button>
            
            <div className="flex gap-2">
              <Button 
                onClick={handleNext}
                disabled={!isAnswerValid()}
                className="bg-primary text-primary-foreground"
              >
                {currentQuestion < questions.length - 1 ? 'Next' : 'Submit'}
                <ChevronRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}