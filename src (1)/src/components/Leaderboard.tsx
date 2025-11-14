import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";
import { Trophy, Crown, Star, ChevronRight, Clock, Activity, Timer, Target } from "lucide-react";
import { motion } from "motion/react";

interface LeaderboardProps {}

// Fixed podium positions - same people always in same positions
const fixedPodiumUsers = [
  { name: 'Sarah Chen', handle: '@sarahc', avatar: 'SC' },  // Always 1st place
  { name: 'Maya Patel', handle: '@mayap', avatar: 'MP' },   // Always 2nd place  
  { name: 'Alex Rodriguez', handle: '@alexr', avatar: 'AR' }, // Always 3rd place
];

const leaderboardData = {
  daily: {
    consistent: {
      'Sarah Chen': 7,
      'Maya Patel': 5,
      'Alex Rodriguez': 6,
      'Jordan Kim': 4,
      'You': 3,
    },
    highestMarks: {
      'Sarah Chen': 91,
      'Maya Patel': 94,
      'Alex Rodriguez': 88,
      'Jordan Kim': 82,
      'You': 85,
    },
    studyTime: {
      'Sarah Chen': '08:45',
      'Maya Patel': '07:30',
      'Alex Rodriguez': '06:15',
      'Jordan Kim': '04:40',
      'You': '05:20',
    },
  },
  weekly: {
    consistent: {
      'Sarah Chen': 6,
      'Maya Patel': 7,
      'Alex Rodriguez': 5,
      'Jordan Kim': 4,
      'You': 6,
    },
    highestMarks: {
      'Sarah Chen': 92,
      'Maya Patel': 89,
      'Alex Rodriguez': 87,
      'Jordan Kim': 81,
      'You': 84,
    },
    studyTime: {
      'Sarah Chen': '38:20',
      'Maya Patel': '42:15',
      'Alex Rodriguez': '32:10',
      'Jordan Kim': '28:30',
      'You': '35:45',
    },
  },
  monthly: {
    consistent: {
      'Sarah Chen': 28,
      'Maya Patel': 26,
      'Alex Rodriguez': 24,
      'Jordan Kim': 19,
      'You': 22,
    },
    highestMarks: {
      'Sarah Chen': 90,
      'Maya Patel': 91,
      'Alex Rodriguez': 86,
      'Jordan Kim': 80,
      'You': 83,
    },
    studyTime: {
      'Sarah Chen': '184:30',
      'Maya Patel': '168:45',
      'Alex Rodriguez': '142:15',
      'Jordan Kim': '115:50',
      'You': '128:20',
    },
  },
};

export function Leaderboard(_: LeaderboardProps) {
  const [timeframe, setTimeframe] = useState<'daily' | 'weekly' | 'monthly'>('weekly');
  const [rankingType, setRankingType] = useState<'consistent' | 'highestMarks' | 'studyTime'>('consistent');
  
  const rawData = leaderboardData[timeframe][rankingType];
  
  // Create sorted list for ranking display (4th, 5th places etc.)
  const sortedData = Object.entries(rawData)
    .map(([name, value]) => ({
      name,
      value,
      handle: name === 'You' ? '@you' : 
             name === 'Sarah Chen' ? '@sarahc' :
             name === 'Maya Patel' ? '@mayap' :
             name === 'Alex Rodriguez' ? '@alexr' : '@jordank',
      avatar: name === 'You' ? 'YU' : 
              name === 'Sarah Chen' ? 'SC' :
              name === 'Maya Patel' ? 'MP' :
              name === 'Alex Rodriguez' ? 'AR' : 'JK',
      metric: rankingType === 'studyTime' ? 'time' : rankingType === 'highestMarks' ? 'score' : 'days'
    }))
    .sort((a, b) => {
      if (rankingType === 'studyTime') {
        // Convert time to minutes for comparison
        const aMinutes = a.value.toString().split(':').reduce((acc, time) => (60 * parseInt(acc)) + parseInt(time), 0);
        const bMinutes = b.value.toString().split(':').reduce((acc, time) => (60 * parseInt(acc)) + parseInt(time), 0);
        return bMinutes - aMinutes;
      }
      return (b.value as number) - (a.value as number);
    });
  
  const userRank = sortedData.findIndex(user => user.name === 'You') + 1;
  const userInTopFive = userRank <= 5 && userRank > 0;
  
  const getCrownIcon = (position: number) => {
    switch (position) {
      case 0:
        return <Crown className="text-yellow-500" size={24} />; // Gold crown
      case 1:
        return <Crown className="text-gray-400" size={20} />; // Silver crown
      case 2:
        return <Crown className="text-orange-700" size={20} />; // Bronze crown
      default:
        return null;
    }
  };

  const getMetricLabel = () => {
    switch (rankingType) {
      case 'consistent':
        return timeframe === 'daily' ? 'Consistency Days' : 'Consistent Days';
      case 'highestMarks':
        return 'Highest Marks';
      case 'studyTime':
        return 'Study Time';
    }
  };

  const formatValue = (user: any) => {
    if (rankingType === 'studyTime') {
      return user.value;
    }
    if (rankingType === 'consistent') {
      return `${user.value} ${user.value === 1 ? 'day' : 'days'}`;
    }
    if (rankingType === 'highestMarks') {
      return `${user.value}%`;
    }
    return user.value;
  };

  const getValueForUser = (userName: string) => {
    const value = rawData[userName];
    if (rankingType === 'studyTime') {
      return value;
    }
    if (rankingType === 'consistent') {
      return `${value} ${value === 1 ? 'day' : 'days'}`;
    }
    if (rankingType === 'highestMarks') {
      return `${value}%`;
    }
    return value;
  };

  const getRankingIcon = () => {
    switch (rankingType) {
      case 'consistent':
        return <Activity size={16} />;
      case 'highestMarks':
        return <Target size={16} />;
      case 'studyTime':
        return <Timer size={16} />;
    }
  };

  return (
    <div className="p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header with proper spacing */}
        <div className="space-y-2 mb-8">
          <div className="flex items-center gap-3">
            <Trophy className="text-primary" size={24} />
            <h1>Leaderboard</h1>
          </div>
          <p className="text-muted-foreground">Top 5 in your Friendlist</p>
        </div>

        {/* Timeframe tabs */}
        <div className="flex justify-center">
          <Tabs value={timeframe} onValueChange={(value) => setTimeframe(value as any)}>
            <TabsList className="grid grid-cols-3 w-80">
              <TabsTrigger value="daily">Daily</TabsTrigger>
              <TabsTrigger value="weekly">Weekly</TabsTrigger>
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        {/* Ranking type tabs */}
        <div className="flex justify-center">
          <Tabs value={rankingType} onValueChange={(value) => setRankingType(value as any)}>
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="consistent" className="flex items-center gap-2">
                <Activity size={14} />
                Most Consistent
              </TabsTrigger>
              <TabsTrigger value="highestMarks" className="flex items-center gap-2">
                <Target size={14} />
                Highest Marks
              </TabsTrigger>
              <TabsTrigger value="studyTime" className="flex items-center gap-2">
                <Timer size={14} />
                Longest Study Time
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-center flex items-center justify-center gap-2">
              {getRankingIcon()}
              {getMetricLabel()}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Top 3 with stable positioning, encouragement colors, and staggered animations */}
            <div className="flex justify-center items-end gap-8 h-48">
              {/* Second Place - Fixed position left - appears SECOND */}
              <motion.div 
                className="flex flex-col items-center justify-end h-full pb-4"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.8,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                }}
              >
                <motion.div 
                  className="relative mb-4"
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 }}
                >
                  {getCrownIcon(1)}
                </motion.div>
                <motion.div 
                  className="relative"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.0, type: "spring", stiffness: 200 }}
                >
                  <Avatar className="w-16 h-16 border-4 border-gray-300/60">
                    <AvatarFallback className="text-lg font-semibold bg-gradient-to-br from-gray-100 to-gray-50">
                      {fixedPodiumUsers[1].avatar}
                    </AvatarFallback>
                  </Avatar>
                </motion.div>
                <motion.p 
                  className="font-medium text-center mt-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.2 }}
                >
                  {fixedPodiumUsers[1].name}
                </motion.p>
                <motion.p 
                  className="text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 1.3 }}
                >
                  {fixedPodiumUsers[1].handle}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1.4 }}
                >
                  <Badge variant="secondary" className="mt-2 bg-gray-100 text-gray-700 border-gray-200">
                    {getValueForUser(fixedPodiumUsers[1].name)}
                  </Badge>
                </motion.div>
              </motion.div>

              {/* First Place - Fixed position center, elevated - appears LAST for maximum drama */}
              <motion.div 
                className="flex flex-col items-center justify-end h-full"
                initial={{ opacity: 0, y: 60, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.4,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                }}
              >
                <motion.div 
                  className="relative mb-4"
                  initial={{ opacity: 0, rotate: -180, scale: 0 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.8, type: "spring", stiffness: 120 }}
                >
                  {getCrownIcon(0)}
                </motion.div>
                <motion.div 
                  className="relative"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.7, type: "spring", stiffness: 150 }}
                >
                  <Avatar className="w-20 h-20 border-4 border-yellow-400/60 shadow-lg">
                    <AvatarFallback className="text-xl font-semibold bg-gradient-to-br from-yellow-100 to-yellow-50">
                      {fixedPodiumUsers[0].avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div className="absolute inset-0 rounded-full shadow-yellow-400/30 shadow-lg"></div>
                </motion.div>
                <motion.p 
                  className="font-semibold text-center text-lg mt-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 2.1 }}
                >
                  {fixedPodiumUsers[0].name}
                </motion.p>
                <motion.p 
                  className="text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 2.2 }}
                >
                  {fixedPodiumUsers[0].handle}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 2.3 }}
                >
                  <Badge variant="secondary" className="mt-2 bg-yellow-100 text-yellow-800 border-yellow-200">
                    {getValueForUser(fixedPodiumUsers[0].name)}
                  </Badge>
                </motion.div>
              </motion.div>

              {/* Third Place - Fixed position right - appears FIRST */}
              <motion.div 
                className="flex flex-col items-center justify-end h-full pb-4"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ 
                  duration: 0.6, 
                  delay: 0.2,
                  ease: "easeOut",
                  type: "spring",
                  stiffness: 100
                }}
              >
                <motion.div 
                  className="relative mb-4"
                  initial={{ opacity: 0, rotate: -180 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                >
                  {getCrownIcon(2)}
                </motion.div>
                <motion.div 
                  className="relative"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.4, type: "spring", stiffness: 200 }}
                >
                  <Avatar className="w-16 h-16 border-4 border-orange-400/60">
                    <AvatarFallback className="text-lg font-semibold bg-gradient-to-br from-orange-100 to-orange-50">
                      {fixedPodiumUsers[2].avatar}
                    </AvatarFallback>
                  </Avatar>
                </motion.div>
                <motion.p 
                  className="font-medium text-center mt-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                >
                  {fixedPodiumUsers[2].name}
                </motion.p>
                <motion.p 
                  className="text-sm text-muted-foreground"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                >
                  {fixedPodiumUsers[2].handle}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                >
                  <Badge variant="secondary" className="mt-2 bg-orange-100 text-orange-800 border-orange-200">
                    {getValueForUser(fixedPodiumUsers[2].name)}
                  </Badge>
                </motion.div>
              </motion.div>
            </div>


            {/* 4th and 5th Place */}
            <div className="space-y-3 mt-8">
              {sortedData.slice(3, 5).map((user, index) => (
                <div key={user.handle} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg h-16">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary/10 text-primary rounded-full font-semibold min-w-8">
                      {index + 4}
                    </div>
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-gradient-to-br from-primary/20 to-primary/10">
                        {user.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">{user.handle}</p>
                    </div>
                  </div>
                  <Badge variant="outline" className="text-primary border-primary/20">
                    {formatValue(user)}
                  </Badge>
                </div>
              ))}
            </div>

            {/* My Rank Row */}
            <div className="border-t pt-4">
              {userInTopFive ? (
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 p-3 bg-accent/10 rounded-lg">
                    <Star className="text-accent" size={20} />
                    <p className="font-medium text-accent-foreground">
                      You're in the Top 5 — great consistency!
                    </p>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-lg border border-primary/20">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center w-8 h-8 bg-primary/20 text-primary rounded-full font-semibold min-w-8">
                      #{userRank}
                    </div>
                    <Avatar className="w-10 h-10">
                      <AvatarFallback className="bg-gradient-to-br from-primary/30 to-primary/20">
                        YU
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">Your Rank</p>
                      <p className="text-sm text-muted-foreground">#{userRank} this {timeframe.slice(0, -2)}</p>
                    </div>
                  </div>
                  <Badge className="bg-primary/10 text-primary border-primary/20">
                    {formatValue(sortedData.find(u => u.name === 'You')!)}
                  </Badge>
                </div>
              )}
            </div>

            {/* Footer */}
            <div className="border-t pt-4 space-y-4">
              <div className="text-center text-sm text-muted-foreground">
                <p>Ranking based on: {getMetricLabel().toLowerCase()}, engagement, and learning progress</p>
              </div>
              
              {/* Achievements removed */}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}