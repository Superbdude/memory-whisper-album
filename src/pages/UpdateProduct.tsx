import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Save, Upload, Calendar, MapPin, Tag, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";
import memory4 from "@/assets/memory-4.jpg";

const UpdateProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Mock data for editing
  const memories = {
    "1": {
      id: "1",
      image: memory1,
      title: "Morning Coffee Moments",
      date: "2024-11-15",
      location: "Home Kitchen",
      description: "The perfect start to a peaceful Sunday morning. The aroma of freshly brewed coffee filling the kitchen while golden sunlight streams through the window.",
      tags: ["morning", "coffee", "peaceful", "sunday"],
      emotions: ["😊", "☕", "🌅"]
    },
    "2": {
      id: "2",
      image: memory2,
      title: "Sunset Beach Walk",
      date: "2024-11-10",
      location: "Malibu Beach, California",
      description: "An evening stroll along the shore as the sun painted the sky in brilliant oranges and purples. The waves gently kissing the sand created the perfect soundtrack.",
      tags: ["sunset", "beach", "peaceful", "nature"],
      emotions: ["🌅", "🌊", "💛"]
    },
    "3": {
      id: "3",
      image: memory3,
      title: "Love Letters Collection",
      date: "2024-11-08",
      location: "Study Room",
      description: "Rediscovered a collection of handwritten letters from years past. Each one telling a story of connection, love, and cherished moments.",
      tags: ["letters", "memories", "love", "vintage"],
      emotions: ["💝", "📝", "💭"]
    },
    "4": {
      id: "4",
      image: memory4,
      title: "Quiet Reading Time",
      date: "2024-10-28",
      location: "Library Corner",
      description: "Lost in the pages of a captivating novel, with soft afternoon light creating the perfect reading atmosphere.",
      tags: ["reading", "books", "quiet", "afternoon"],
      emotions: ["📚", "🤓", "☀️"]
    }
  };

  const memory = memories[id as keyof typeof memories];
  
  const [formData, setFormData] = useState({
    title: memory?.title || "",
    date: memory?.date || "",
    location: memory?.location || "",
    description: memory?.description || "",
    tags: memory?.tags?.join(", ") || "",
    emotions: memory?.emotions?.join(" ") || ""
  });

  const [newTag, setNewTag] = useState("");
  const [tagsList, setTagsList] = useState(memory?.tags || []);

  if (!memory) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 pb-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Memory Not Found</h1>
            <p className="text-muted-foreground mb-6">The memory you're trying to edit doesn't exist.</p>
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddTag = () => {
    if (newTag.trim() && !tagsList.includes(newTag.trim())) {
      setTagsList(prev => [...prev, newTag.trim()]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTagsList(prev => prev.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate saving
    toast({
      title: "Memory Updated!",
      description: "Your memory has been successfully updated.",
    });

    // Navigate back to memory details
    setTimeout(() => {
      navigate(`/product-details/${id}`);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <Link to={`/product-details/${id}`}>
                <Button variant="outline" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back
                </Button>
              </Link>
              <h1 className="text-3xl font-bold text-foreground">Edit Memory</h1>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Current Image Preview */}
            <div className="memory-card p-6">
              <Label className="text-lg font-semibold text-foreground mb-4 block">Current Photo</Label>
              <div className="aspect-video w-full max-w-md overflow-hidden rounded-2xl mb-4">
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <Button type="button" variant="outline" size="sm">
                <Upload className="w-4 h-4 mr-2" />
                Change Photo
              </Button>
            </div>

            {/* Basic Information */}
            <div className="memory-card p-6 space-y-6">
              <h2 className="text-lg font-semibold text-foreground">Basic Information</h2>
              
              <div className="space-y-2">
                <Label htmlFor="title" className="flex items-center space-x-2">
                  <span>Title</span>
                </Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Give your memory a beautiful title..."
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>Date</span>
                  </Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>Location</span>
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    placeholder="Where was this taken?"
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="memory-card p-6 space-y-4">
              <h2 className="text-lg font-semibold text-foreground">Story</h2>
              <div className="space-y-2">
                <Label htmlFor="description">Tell the story behind this memory</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Share what made this moment special..."
                  rows={4}
                />
              </div>
            </div>

            {/* Emotions */}
            <div className="memory-card p-6 space-y-4">
              <h2 className="text-lg font-semibold text-foreground flex items-center space-x-2">
                <Heart className="w-5 h-5" />
                <span>Emotions</span>
              </h2>
              <div className="space-y-2">
                <Label htmlFor="emotions">Express how this memory makes you feel</Label>
                <Input
                  id="emotions"
                  name="emotions"
                  value={formData.emotions}
                  onChange={handleInputChange}
                  placeholder="😊 🌅 💛 (use emojis to express emotions)"
                />
              </div>
            </div>

            {/* Tags */}
            <div className="memory-card p-6 space-y-4">
              <h2 className="text-lg font-semibold text-foreground flex items-center space-x-2">
                <Tag className="w-5 h-5" />
                <span>Tags</span>
              </h2>
              
              <div className="flex space-x-2">
                <Input
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  placeholder="Add a tag..."
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTag())}
                />
                <Button type="button" onClick={handleAddTag} variant="outline">
                  Add
                </Button>
              </div>

              <div className="flex flex-wrap gap-2">
                {tagsList.map((tag, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
                    onClick={() => handleRemoveTag(tag)}
                  >
                    {tag} ×
                  </Badge>
                ))}
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button type="submit" className="flex-1 sm:flex-none">
                <Save className="w-4 h-4 mr-2" />
                Save Changes
              </Button>
              <Link to={`/product-details/${id}`} className="flex-1 sm:flex-none">
                <Button type="button" variant="outline" className="w-full">
                  Cancel
                </Button>
              </Link>
            </div>
          </form>
        </div>
      </div>
      
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default UpdateProduct;