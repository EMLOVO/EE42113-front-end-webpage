import { Bell, Calendar, X, RotateCcw } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Logo } from "./Logo";
import { useState } from "react";

interface Notification {
  id: string;
  message: string;
  read: boolean;
  linkTo?: string;
}

interface HeaderProps {
  groupName: string;
  timePeriod: string;
  onTimePeriodChange: (period: string) => void;
  onNavigateTo?: (screen: string) => void;
  showPeriodToggle?: boolean;
  onQuickReview?: () => void;
}

export function Header({ groupName, timePeriod, onTimePeriodChange, onNavigateTo, showPeriodToggle = false, onQuickReview }: HeaderProps) {
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: '1', message: 'Earned: Top 5 badge last week.', read: false },
    { id: '2', message: 'Group average accuracy reached 85% this week.', read: false }
  ]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const unreadCount = notifications.filter((n: any) => !n.read).length;

  const markAsRead = (id: string) => {
    setNotifications((prev: any) => prev.map((n: any) => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const markAllAsRead = () => {
    setNotifications((prev: any) => prev.map((n: any) => ({ ...n, read: true })));
  };

  const handleNotificationClick = (notification: Notification) => {
    markAsRead(notification.id);
    if (notification.linkTo && onNavigateTo) {
      onNavigateTo(notification.linkTo);
      setDrawerOpen(false);
    }
  };
  return (
    <>
      <div className="h-16 bg-card border-b border-border px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Logo size="sm" showText={false} />
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-semibold text-foreground">{groupName}</h1>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {showPeriodToggle && (
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-muted-foreground" />
              <div className="flex bg-muted rounded-lg p-1">
                <Button
                  size="sm"
                  variant="ghost"
                  className={`text-sm transition-all ${
                    timePeriod === "week" 
                      ? "bg-primary/10 text-primary font-semibold border-b-2 border-primary rounded-b-none" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => onTimePeriodChange("week")}
                >
                  This Week
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className={`text-sm transition-all ${
                    timePeriod === "month" 
                      ? "bg-primary/10 text-primary font-semibold border-b-2 border-primary rounded-b-none" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  onClick={() => onTimePeriodChange("month")}
                >
                  Month
                </Button>
              </div>
            </div>
          )}
          {/* Quick Review - accessible from any page */}
          <Button 
            variant="secondary"
            size="sm"
            onClick={onQuickReview}
            className="gap-2"
          >
            <RotateCcw size={16} />
            Quick Review
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="relative"
            onClick={() => setDrawerOpen(true)}
          >
            <Bell size={18} />
            {unreadCount > 0 && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-accent rounded-full flex items-center justify-center">
                <span className="text-xs font-medium text-accent-foreground">{unreadCount}</span>
              </div>
            )}
          </Button>
        </div>
      </div>

      {/* Notification Drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1" onClick={() => setDrawerOpen(false)} />
          <div className="w-80 bg-card border-l border-border h-full shadow-lg flex flex-col">
            <div className="p-4 border-b border-border flex items-center justify-between">
              <h3 className="font-semibold">Notifications</h3>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={markAllAsRead}
                  className="text-xs text-muted-foreground hover:text-foreground"
                >
                  Mark all as read
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setDrawerOpen(false)}
                >
                  <X size={16} />
                </Button>
              </div>
            </div>
            
            <div className="flex-1 overflow-y-auto">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 border-b border-border cursor-pointer transition-colors hover:bg-muted/50 ${
                    !notification.read ? 'bg-primary/5' : ''
                  }`}
                  onClick={() => handleNotificationClick(notification)}
                >
                  <div className="flex items-start gap-3">
                    {!notification.read && (
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    )}
                    <p className={`text-sm ${!notification.read ? 'font-medium' : 'text-muted-foreground'}`}>
                      {notification.message}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}