import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Switch } from "./ui/switch";
import { Label } from "./ui/label";
import { Cog } from "lucide-react";

interface SettingsPageProps {
  onNavigateTo?: (screen: string) => void;
}

export function SettingsPage({ onNavigateTo }: SettingsPageProps) {
  const [allowDataSave, setAllowDataSave] = useState<boolean>(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem("privacyConsent");
      if (v != null) setAllowDataSave(v === "true");
    } catch {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("privacyConsent", String(allowDataSave));
    } catch {}
  }, [allowDataSave]);

  return (
    <div className="p-6 space-y-6 max-w-2xl">
      <Card>
        <CardHeader className="flex items-center gap-2">
          <CardTitle className="flex items-center gap-2">
            <Cog className="text-primary" size={20} />
            Settings
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <Label className="text-base">Allow saving my data</Label>
              <p className="text-sm text-muted-foreground">Control whether your study data is stored by this app on your device.</p>
            </div>
            <div className="flex items-center gap-2">
              <Switch checked={allowDataSave} onCheckedChange={setAllowDataSave} />
              <Button size="sm" variant="outline" onClick={() => setAllowDataSave((v: boolean) => !v)}>
                {allowDataSave ? 'On' : 'Off'}
              </Button>
            </div>
          </div>
          {onNavigateTo && (
            <div className="pt-2">
              <Button variant="outline" onClick={() => onNavigateTo("dashboard")}>Back to Dashboard</Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
