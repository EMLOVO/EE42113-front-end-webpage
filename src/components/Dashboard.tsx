import { TrendingUp, Clock, Target, RotateCcw, Sparkles, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { XAxis, YAxis, ResponsiveContainer, AreaChart, Area, Tooltip } from "recharts";
import { useState } from "react";

interface DashboardProps {
  onNavigateToChallenge?: (concept?: string) => void;
  timePeriod: string;
  onQuickReview?: () => void;
}

// Subject-specific activity data (fake/demo)
const activityDataBySubject: Record<string, { week: any[]; month: any[] }> = {
  Biology: {
    week: [
      { day: 'Mon', sessions: 10, date: '2025-10-01' },
      { day: 'Tue', sessions: 14, date: '2025-10-02' },
      { day: 'Wed', sessions: 7, date: '2025-10-03' },
      { day: 'Thu', sessions: 16, date: '2025-10-04' },
      { day: 'Fri', sessions: 20, date: '2025-10-05' },
      { day: 'Sat', sessions: 12, date: '2025-10-06' },
      { day: 'Sun', sessions: 11, date: '2025-10-07' },
    ],
    month: [
      { week: 'Week 1', sessions: 72, weekNumber: 1 },
      { week: 'Week 2', sessions: 88, weekNumber: 2 },
      { week: 'Week 3', sessions: 80, weekNumber: 3 },
      { week: 'Week 4', sessions: 95, weekNumber: 4 },
      { week: 'Week 5', sessions: 60, weekNumber: 5 },
    ],
  },
  Physics: {
    week: [
      { day: 'Mon', sessions: 8, date: '2025-10-01' },
      { day: 'Tue', sessions: 9, date: '2025-10-02' },
      { day: 'Wed', sessions: 12, date: '2025-10-03' },
      { day: 'Thu', sessions: 18, date: '2025-10-04' },
      { day: 'Fri', sessions: 24, date: '2025-10-05' },
      { day: 'Sat', sessions: 20, date: '2025-10-06' },
      { day: 'Sun', sessions: 15, date: '2025-10-07' },
    ],
    month: [
      { week: 'Week 1', sessions: 65, weekNumber: 1 },
      { week: 'Week 2', sessions: 76, weekNumber: 2 },
      { week: 'Week 3', sessions: 90, weekNumber: 3 },
      { week: 'Week 4', sessions: 110, weekNumber: 4 },
      { week: 'Week 5', sessions: 70, weekNumber: 5 },
    ],
  },
  'China History': {
    week: [
      { day: 'Mon', sessions: 6, date: '2025-10-01' },
      { day: 'Tue', sessions: 8, date: '2025-10-02' },
      { day: 'Wed', sessions: 9, date: '2025-10-03' },
      { day: 'Thu', sessions: 12, date: '2025-10-04' },
      { day: 'Fri', sessions: 14, date: '2025-10-05' },
      { day: 'Sat', sessions: 10, date: '2025-10-06' },
      { day: 'Sun', sessions: 9, date: '2025-10-07' },
    ],
    month: [
      { week: 'Week 1', sessions: 58, weekNumber: 1 },
      { week: 'Week 2', sessions: 62, weekNumber: 2 },
      { week: 'Week 3', sessions: 70, weekNumber: 3 },
      { week: 'Week 4', sessions: 82, weekNumber: 4 },
      { week: 'Week 5', sessions: 55, weekNumber: 5 },
    ],
  },
};

// Subject-specific common errors (fake/demo)
const commonErrorsBySubject: Record<string, { week: any[]; month: any[] }> = {
  Biology: {
    week: [
      { concept: 'Mitochondria function', errors: 10 },
      { concept: 'Ribosome vs Lysosome', errors: 8 },
      { concept: 'Osmosis vs Diffusion', errors: 7 },
      { concept: 'Meiosis phases', errors: 6 },
      { concept: 'Punnett square ratios', errors: 5 },
    ],
    month: [
      { concept: 'Signal transduction pathways', errors: 20 },
      { concept: 'Enzyme kinetics', errors: 17 },
      { concept: 'Photosystems I vs II', errors: 15 },
      { concept: 'DNA replication enzymes', errors: 13 },
      { concept: 'Transcription vs Translation', errors: 12 },
    ],
  },
  Physics: {
    week: [
      { concept: 'Free-body diagrams', errors: 9 },
      { concept: 'Unit conversions (J to N·m)', errors: 8 },
      { concept: 'Momentum sign conventions', errors: 7 },
      { concept: 'Work-energy theorem', errors: 6 },
      { concept: 'Projectile components', errors: 5 },
    ],
    month: [
      { concept: 'Rotational inertia', errors: 18 },
      { concept: 'Angular momentum', errors: 16 },
      { concept: 'Kirchhoff’s laws', errors: 14 },
      { concept: 'Wave superposition', errors: 12 },
      { concept: 'Thermodynamic processes', errors: 11 },
    ],
  },
  'China History': {
    week: [
      { concept: 'Qin legalist reforms', errors: 7 },
      { concept: 'Han Silk Road context', errors: 6 },
      { concept: 'Mandate of Heaven transitions', errors: 6 },
      { concept: 'Song technological advances', errors: 5 },
      { concept: 'Ming maritime policy shift', errors: 4 },
    ],
    month: [
      { concept: 'Dynastic cycles timeline', errors: 15 },
      { concept: 'Tax reforms across dynasties', errors: 13 },
      { concept: 'Confucian bureaucracy evolution', errors: 12 },
      { concept: 'Trade networks development', errors: 11 },
      { concept: 'Foreign relations policy', errors: 10 },
    ],
  },
};

export function Dashboard({ onNavigateToChallenge, timePeriod, onQuickReview }: DashboardProps) {
  const [filterApplied, setFilterApplied] = useState(null as any);
  const [subject, setSubject] = useState('Biology');
  
  const activityData = activityDataBySubject[subject][timePeriod === 'week' ? 'week' : 'month'];
  const commonErrors = commonErrorsBySubject[subject][timePeriod === 'week' ? 'week' : 'month'];
  const xAxisKey = timePeriod === 'week' ? 'day' : 'week';
  
  const handleChartClick = (data: any) => {
    const filterValue = timePeriod === 'week' ? data.date : `Week ${data.weekNumber}`;
    setFilterApplied(filterValue);
    onNavigateToChallenge && onNavigateToChallenge();
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-lg">
          <p className="font-medium">{timePeriod === 'week' ? data.date : label}</p>
          <p className="text-primary">Sessions: {payload[0].value}</p>
        </div>
      );
    }
    return null;
  };

  const weekFilter = () => {
    switch (subject) {
        case 'Biology':
            return '72'
        case 'Physics':
            return '65'
        case 'China History':
            return '58'
        default:
            break;
    }
  }; 

  const monthFilter = () => {
    switch (subject) {
        case 'Biology':
            return '80'
        case 'Physics':
            return '70'
        case 'China History':
            return '60'
        default:
            break;
    }
  }

 
  return (
    <div className="p-6 space-y-6">
      {/* Quick Review CTA */}
      {onQuickReview && (
        <Card className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border border-primary/30 w-400">
            <CardContent className="p-4 flex items-center gap-2 ">
            <div className="text-sm text-muted-foreground">Wanna do a quick review?</div>
            <Button size="sm" onClick={onQuickReview} className="gap-2">
              <RotateCcw size={16} /> Quick Review
            </Button>
          </CardContent>
        </Card>
      )}
      {/* Subject selector bar */}
      <div className="flex items-center gap-2">
        {(['Biology','Physics','China History'] as const).map(s => (
          <button
            key={s}
            onClick={() => setSubject(s)}
            className={`px-3 py-1.5 rounded-md text-sm border transition-colors ${subject===s? 'bg-primary text-primary-foreground border-primary':'bg-card text-foreground border-border hover:bg-muted'}`}
          >
            {s}
          </button>
        ))}
      </div>
      {/* Filter chip */}
      {filterApplied && (
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
            Filtered by {filterApplied}
            <button 
              onClick={() => setFilterApplied(null)}
              className="ml-2 hover:bg-primary/20 rounded-full p-0.5"
            >
              <X size={12} />
            </button>
          </Badge>
        </div>
      )}

      {/* AI Banner */}
      <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center gap-3">
            <Sparkles className="text-primary" size={24} />
            <p className="text-lg font-medium text-foreground">
              Great job! You have completed {timePeriod === 'week' ? weekFilter() : monthFilter()} of this {timePeriod}'s goals!
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Stats Row */}
      <div className="flex gap-4">
        <Badge variant="secondary" className="px-4 py-2 bg-card border border-border">
          <Clock size={16} className="mr-2" />
          <span className="font-medium">{timePeriod === 'week' ? '42h' : '168h'} Study Hours</span>
          <TrendingUp size={14} className="ml-2 text-secondary" />
        </Badge>
        <Badge variant="secondary" className="px-4 py-2 bg-card border border-border">
          <Target size={16} className="mr-2" />
          <span className="font-medium">{timePeriod === 'week' ? '87%' : '89%'} Average Accuracy</span>
          <TrendingUp size={14} className="ml-2 text-secondary" />
        </Badge>
        <Badge variant="secondary" className="px-4 py-2 bg-card border border-border">
          <span className="font-medium">{timePeriod === 'week' ? '156' : '624'} Tasks Completed</span>
          <TrendingUp size={14} className="ml-2 text-secondary" />
        </Badge>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Group Activity Trend */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp size={20} className="text-primary" />
              Study Activity Trend — {subject}
            </CardTitle>
            <p className="text-sm text-muted-foreground">
              {timePeriod === 'week' ? 'This Week = daily view' : 'Month = weekly view'}
            </p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={activityData} onClick={handleChartClick}>
                <XAxis dataKey={xAxisKey} />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Area 
                  type="monotone" 
                  dataKey="sessions" 
                  stroke="#4DB6AC" 
                  fill="#4DB6AC" 
                  fillOpacity={0.3}
                  className="cursor-pointer hover:opacity-80"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Completion Status removed per demo requirements */}

        {/* Common Errors */}
        <Card>
          <CardHeader>
            <CardTitle>Common Errors — {subject}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {commonErrors.map((error) => (
                <div key={error.concept} className="flex items-center justify-between">
                  <span className="text-sm">{error.concept}</span>
                  <Button 
                    size="sm" 
                    variant="outline"
                    className="text-xs"
                    onClick={() => onNavigateToChallenge && onNavigateToChallenge(error.concept)}
                  >
                    <RotateCcw size={12} className="mr-1" />
                    Review
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* AI Comment Section */}
        <Card>
          <CardHeader>
            <CardTitle>AI Comments — {subject}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2 text-sm">
            {subject === 'Biology' && (
              <>
                <p>Concept diagrams seem to slow you down. Consider chunking cell organelles into function-based groups.</p>
                <p className="text-muted-foreground">Common miss: differentiating rough vs smooth ER roles.</p>
              </>
            )}
            {subject === 'Physics' && (
              <>
                <p>You answer qualitatively well but lose points on unit conversions. Add a 5-minute unit check step.</p>
                <p className="text-muted-foreground">Focus: dynamics sign conventions.</p>
              </>
            )}
            {subject === 'China History' && (
              <>
                <p>Dates are fine; causal chains need work. Try cause → event → consequence triples.</p>
                <p className="text-muted-foreground">Strengthen: Han economic reforms context.</p>
              </>
            )}
          </CardContent>
        </Card>

        {/* Suggested Study Plan */}
        <Card>
          <CardHeader>
            <CardTitle>Suggested Study Plan — {subject}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-sm">
            {subject === 'Biology' && (
              <ul className="list-disc ml-5 space-y-1">
                <li>Day 1: Cell organelles (flashcards 20m) + 10 MCQs.</li>
                <li>Day 2: Genetics basics + Punnett squares (25m).</li>
                <li>Day 3: Mixed review + spaced recall (15m).</li>
              </ul>
            )}
            {subject === 'Physics' && (
              <ul className="list-disc ml-5 space-y-1">
                <li>Day 1: Kinematics problems with units focus (30m).</li>
                <li>Day 2: Newton’s Laws mixed practice (25m).</li>
                <li>Day 3: Energy & momentum conservation quiz (20m).</li>
              </ul>
            )}
            {subject === 'China History' && (
              <ul className="list-disc ml-5 space-y-1">
                <li>Day 1: Qin → Han timeline drill (20m).</li>
                <li>Day 2: Trade routes and policies mapping (25m).</li>
                <li>Day 3: Cause-effect card linking (15m).</li>
              </ul>
            )}
          </CardContent>
        </Card>

        {/* Personal Learning Curve removed per demo requirements */}
      </div>
    </div>
  );
}