import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Edit, Trash2, ArrowLeft, Calendar, MapPin, Tag, Heart } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";
import memory4 from "@/assets/memory-4.jpg";

const ProductDetails = () => {
  const { id } = useParams();
  
  // Mock data for memory details
  const memories = {
    "1": {
      id: "1",
      image: memory1,
      title: "Morning Coffee Moments",
      date: "November 15, 2024",
      location: "Home Kitchen",
      description: "The perfect start to a peaceful Sunday morning. The aroma of freshly brewed coffee filling the kitchen while golden sunlight streams through the window.",
      tags: ["morning", "coffee", "peaceful", "sunday"],
      emotions: ["😊", "☕", "🌅"],
      views: 12,
      favorited: true
    },
    "2": {
      id: "2",
      image: memory2,
      title: "Sunset Beach Walk",
      date: "November 10, 2024",
      location: "Malibu Beach, California",
      description: "An evening stroll along the shore as the sun painted the sky in brilliant oranges and purples. The waves gently kissing the sand created the perfect soundtrack.",
      tags: ["sunset", "beach", "peaceful", "nature"],
      emotions: ["🌅", "🌊", "💛"],
      views: 28,
      favorited: false
    },
    "3": {
      id: "3",
      image: memory3,
      title: "Love Letters Collection",
      date: "November 8, 2024",
      location: "Study Room",
      description: "Rediscovered a collection of handwritten letters from years past. Each one telling a story of connection, love, and cherished moments.",
      tags: ["letters", "memories", "love", "vintage"],
      emotions: ["💝", "📝", "💭"],
      views: 7,
      favorited: true
    },
    "4": {
      id: "4",
      image: memory4,
      title: "Quiet Reading Time",
      date: "October 28, 2024",
      location: "Library Corner",
      description: "Lost in the pages of a captivating novel, with soft afternoon light creating the perfect reading atmosphere.",
      tags: ["reading", "books", "quiet", "afternoon"],
      emotions: ["📚", "🤓", "☀️"],
      views: 15,
      favorited: false
    }
  };

  const memory = memories[id as keyof typeof memories];
  const [isFavorited, setIsFavorited] = useState(memory?.favorited || false);

  if (!memory) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 pb-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Memory Not Found</h1>
            <p className="text-muted-foreground mb-6">The memory you're looking for doesn't exist.</p>
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

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <div className="mb-6">
            <Link to="/">
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Gallery
              </Button>
            </Link>
          </div>

          {/* Memory Image */}
          <div className="relative mb-8">
            <div className="aspect-video w-full overflow-hidden rounded-3xl memory-card">
              <img
                src={memory.image}
                alt={memory.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Action Buttons Overlay */}
            <div className="absolute top-4 right-4 flex space-x-2">
              <Button
                variant="outline"
                size="sm"
                className="glass"
                onClick={() => setIsFavorited(!isFavorited)}
              >
                <Heart className={`w-4 h-4 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} />
              </Button>
              <Link to={`/update-product/${memory.id}`}>
                <Button variant="outline" size="sm" className="glass">
                  <Edit className="w-4 h-4" />
                </Button>
              </Link>
              <Link to={`/delete-product/${memory.id}`}>
                <Button variant="outline" size="sm" className="glass">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Memory Details */}
          <div className="space-y-6">
            {/* Title and Metadata */}
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-4">{memory.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center space-x-2">
                  <Calendar className="w-4 h-4" />
                  <span>{memory.date}</span>
                </div>
                
                {memory.location && (
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{memory.location}</span>
                  </div>
                )}
                
                <div className="flex items-center space-x-2">
                  <span>{memory.views} views</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="memory-card p-6">
              <h2 className="text-lg font-semibold text-foreground mb-3">Story</h2>
              <p className="text-muted-foreground leading-relaxed">{memory.description}</p>
            </div>

            {/* Emotions */}
            <div className="memory-card p-6">
              <h2 className="text-lg font-semibold text-foreground mb-3">Emotions</h2>
              <div className="flex space-x-2">
                {memory.emotions.map((emotion, index) => (
                  <span key={index} className="text-2xl">{emotion}</span>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="memory-card p-6">
              <h2 className="text-lg font-semibold text-foreground mb-3">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {memory.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="flex items-center space-x-1">
                    <Tag className="w-3 h-3" />
                    <span>{tag}</span>
                  </Badge>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <Link to={`/update-product/${memory.id}`}>
                <Button variant="outline">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Memory
                </Button>
              </Link>
              <Link to={`/delete-product/${memory.id}`}>
                <Button variant="destructive">
                  <Trash2 className="w-4 h-4 mr-2" />
                  Delete Memory
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default ProductDetails;