import { Heart, MapPin, Calendar, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface MemoryCardProps {
  id: string;
  image: string;
  title: string;
  date: string;
  location?: string;
  emotions?: string[];
  className?: string;
}

const MemoryCard = ({ id, image, title, date, location, emotions, className = "" }: MemoryCardProps) => {
  return (
    <Link to={`/product-details/${id}`} className={`memory-card group cursor-pointer block ${className}`}>
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Actions */}
        <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button size="sm" variant="secondary" className="glass-strong text-white border-white/30">
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>

        {/* Emotions */}
        {emotions && emotions.length > 0 && (
          <div className="absolute top-3 left-3 flex space-x-1">
            {emotions.map((emotion, index) => (
              <span key={index} className="text-lg">
                {emotion}
              </span>
            ))}
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-foreground mb-2 line-clamp-2">{title}</h3>
        
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1">
              <Calendar className="w-3 h-3" />
              <span>{date}</span>
            </div>
            
            {location && (
              <div className="flex items-center space-x-1">
                <MapPin className="w-3 h-3" />
                <span>{location}</span>
              </div>
            )}
          </div>
          
          <Button size="sm" variant="ghost" className="h-auto p-1 text-muted-foreground hover:text-primary">
            <Heart className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Link>
  );
};

export default MemoryCard;