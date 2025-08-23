import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";
import { Settings, Bell, Shield, Eye, Download, Trash2 } from "lucide-react";

interface SettingsModalProps {
  children: React.ReactNode;
}

const SettingsModal = ({ children }: SettingsModalProps) => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [pushNotifications, setPushNotifications] = useState(false);
  const [weeklyDigest, setWeeklyDigest] = useState(true);
  const [profileVisibility, setProfileVisibility] = useState("friends");
  const [downloadQuality, setDownloadQuality] = useState("high");
  const [autoBackup, setAutoBackup] = useState(true);
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSave = () => {
    toast({
      title: "Settings Saved!",
      description: "Your preferences have been updated successfully.",
    });
    setOpen(false);
  };

  const handleExportData = () => {
    toast({
      title: "Export Started",
      description: "We'll send you a download link when your data is ready.",
    });
  };

  const handleDeleteAccount = () => {
    toast({
      title: "Account Deletion",
      description: "Please contact support to delete your account.",
      variant: "destructive",
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[600px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg gradient-memory flex items-center justify-center">
              <Settings className="w-4 h-4 text-white" />
            </div>
            <span>Settings</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Notifications */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Bell className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Notifications</h3>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="email-notifications">Email Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications via email</p>
                </div>
                <Switch
                  id="email-notifications"
                  checked={emailNotifications}
                  onCheckedChange={setEmailNotifications}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="push-notifications">Push Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive notifications on your device</p>
                </div>
                <Switch
                  id="push-notifications"
                  checked={pushNotifications}
                  onCheckedChange={setPushNotifications}
                />
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="weekly-digest">Weekly Digest</Label>
                  <p className="text-sm text-muted-foreground">Get a summary of your memories</p>
                </div>
                <Switch
                  id="weekly-digest"
                  checked={weeklyDigest}
                  onCheckedChange={setWeeklyDigest}
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Privacy */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Privacy</h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="profile-visibility">Profile Visibility</Label>
                <Select value={profileVisibility} onValueChange={setProfileVisibility}>
                  <SelectTrigger className="mt-2">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="public">Public - Anyone can see</SelectItem>
                    <SelectItem value="friends">Friends Only</SelectItem>
                    <SelectItem value="private">Private - Only you</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <Label htmlFor="auto-backup">Auto Backup</Label>
                  <p className="text-sm text-muted-foreground">Automatically backup new memories</p>
                </div>
                <Switch
                  id="auto-backup"
                  checked={autoBackup}
                  onCheckedChange={setAutoBackup}
                />
              </div>
            </div>
          </div>

          <Separator />

          {/* Media */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Eye className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Media</h3>
            </div>
            
            <div>
              <Label htmlFor="download-quality">Download Quality</Label>
              <Select value={downloadQuality} onValueChange={setDownloadQuality}>
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="original">Original Quality</SelectItem>
                  <SelectItem value="high">High Quality</SelectItem>
                  <SelectItem value="medium">Medium Quality</SelectItem>
                  <SelectItem value="low">Low Quality</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <Separator />

          {/* Data Management */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Data Management</h3>
            
            <div className="space-y-3">
              <Button 
                variant="outline" 
                className="w-full justify-start"
                onClick={handleExportData}
              >
                <Download className="w-4 h-4 mr-2" />
                Export My Data
              </Button>
              
              <Button 
                variant="destructive" 
                className="w-full justify-start"
                onClick={handleDeleteAccount}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Account
              </Button>
            </div>
          </div>

          <div className="flex space-x-3 pt-4">
            <Button type="button" variant="outline" className="flex-1" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button className="flex-1 bg-primary hover:bg-primary-dark" onClick={handleSave}>
              Save Settings
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsModal;