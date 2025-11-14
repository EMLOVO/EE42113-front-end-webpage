import { BarChart3, Sparkles, BookOpen, Mic, Trophy, Award, Settings } from "lucide-react";
import { Button } from "./ui/button";
import { Logo } from "./Logo";

interface NavigationProps {
  activeScreen: string;
  onScreenChange: (screen: string) => void;
}

export function Navigation({ activeScreen, onScreenChange }: NavigationProps) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'generator', label: 'Generator', icon: Sparkles },
    { id: 'subjects', label: 'Subjects', icon: BookOpen },
    { id: 'recording', label: 'Recording', icon: Mic },
    { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  return (
    <div className="w-64 bg-card border-r border-border h-full flex flex-col">
      <div className="p-6">
        <div className="mb-6 flex flex-col items-center">
          <Logo size="md" showText={true} />
        </div>
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={activeScreen === item.id ? "default" : "ghost"}
                className={`w-full justify-start gap-3 ${
                  activeScreen === item.id 
                    ? "bg-primary text-primary-foreground" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
                onClick={() => onScreenChange(item.id)}
              >
                <Icon size={20} />
                {item.label}
              </Button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}