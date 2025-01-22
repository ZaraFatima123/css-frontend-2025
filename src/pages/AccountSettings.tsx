import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Card } from "@/components/ui/card"
import { Bell, Mail, Globe, Users } from "lucide-react"

const AccountSettings = () => {
  return (
    <div className="bg-background rounded-lg shadow p-6">
      <h2 className="text-2xl font-semibold mb-6">Community Preferences</h2>
      
      <div className="space-y-6">
        <Card className="p-4">
          <h3 className="text-lg font-medium mb-4">Notifications</h3>
          <div className="space-y-4">
            {[
              { icon: Bell, label: "Push Notifications", description: "Get notified about community updates" },
              { icon: Mail, label: "Email Digest", description: "Receive weekly community highlights" },
              { icon: Users, label: "Mentions", description: "Notify when someone mentions you" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <Label className="font-medium">{item.label}</Label>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                <Switch />
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-4">
          <h3 className="text-lg font-medium mb-4">Privacy</h3>
          <div className="space-y-4">
            {[
              { icon: Globe, label: "Public Profile", description: "Make your profile visible to everyone" },
              { icon: Users, label: "Show Statistics", description: "Display your solving statistics" }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <item.icon className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <Label className="font-medium">{item.label}</Label>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
                <Switch />
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  )
}

export default AccountSettings
