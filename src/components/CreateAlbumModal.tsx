import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Folder, Plus } from "lucide-react";

interface CreateAlbumModalProps {
  children: React.ReactNode;
}

const CreateAlbumModal = ({ children }: CreateAlbumModalProps) => {
  const [albumName, setAlbumName] = useState("");
  const [description, setDescription] = useState("");
  const [privacy, setPrivacy] = useState("private");
  const [cover, setCover] = useState("");
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!albumName.trim()) {
      toast({
        title: "Error",
        description: "Please enter an album name",
        variant: "destructive",
      });
      return;
    }

    // Create album logic here
    toast({
      title: "Album Created!",
      description: `"${albumName}" has been created successfully.`,
    });

    // Reset form
    setAlbumName("");
    setDescription("");
    setPrivacy("private");
    setCover("");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg gradient-memory flex items-center justify-center">
              <Folder className="w-4 h-4 text-white" />
            </div>
            <span>Create New Album</span>
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="albumName">Album Name *</Label>
            <Input
              id="albumName"
              placeholder="e.g., Summer Vacation 2024"
              value={albumName}
              onChange={(e) => setAlbumName(e.target.value)}
            />
          </div>
          
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="What's this album about?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>
          
          <div>
            <Label htmlFor="privacy">Privacy</Label>
            <Select value={privacy} onValueChange={setPrivacy}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="private">Private - Only you can see</SelectItem>
                <SelectItem value="shared">Shared - People with link can view</SelectItem>
                <SelectItem value="public">Public - Anyone can find and view</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <Label htmlFor="cover">Cover Color</Label>
            <Select value={cover} onValueChange={setCover}>
              <SelectTrigger>
                <SelectValue placeholder="Choose a cover color" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="warm">Warm Peach</SelectItem>
                <SelectItem value="cool">Cool Blue</SelectItem>
                <SelectItem value="love">Soft Rose</SelectItem>
                <SelectItem value="nature">Gentle Green</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex space-x-3 pt-4">
            <Button type="button" variant="outline" className="flex-1" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" className="flex-1 bg-primary hover:bg-primary-dark">
              <Plus className="w-4 h-4 mr-2" />
              Create Album
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateAlbumModal;