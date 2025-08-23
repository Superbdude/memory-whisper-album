import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/components/ui/use-toast";
import { Filter, SortAsc, X } from "lucide-react";

interface SortFilterModalProps {
  children: React.ReactNode;
}

const SortFilterModal = ({ children }: SortFilterModalProps) => {
  const [sortBy, setSortBy] = useState("date-desc");
  const [emotions, setEmotions] = useState<string[]>([]);
  const [locations, setLocations] = useState<string[]>([]);
  const [dateRange, setDateRange] = useState("");
  const [open, setOpen] = useState(false);
  const { toast } = useToast();

  const emotionOptions = [
    "happy", "nostalgic", "peaceful", "excited", "grateful", "adventurous", "love", "proud"
  ];

  const locationOptions = [
    "Home", "Beach", "Mountains", "City", "Park", "Restaurant", "Travel", "Work"
  ];

  const toggleEmotion = (emotion: string) => {
    setEmotions(prev => 
      prev.includes(emotion) 
        ? prev.filter(e => e !== emotion)
        : [...prev, emotion]
    );
  };

  const toggleLocation = (location: string) => {
    setLocations(prev => 
      prev.includes(location) 
        ? prev.filter(l => l !== location)
        : [...prev, location]
    );
  };

  const clearFilters = () => {
    setSortBy("date-desc");
    setEmotions([]);
    setLocations([]);
    setDateRange("");
    toast({
      title: "Filters Cleared",
      description: "All filters have been reset.",
    });
  };

  const applyFilters = () => {
    toast({
      title: "Filters Applied",
      description: "Your memories have been sorted and filtered.",
    });
    setOpen(false);
  };

  const activeFiltersCount = emotions.length + locations.length + (dateRange ? 1 : 0);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[500px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-lg gradient-memory flex items-center justify-center">
                <Filter className="w-4 h-4 text-white" />
              </div>
              <span>Sort & Filter</span>
            </div>
            {activeFiltersCount > 0 && (
              <Badge variant="secondary">{activeFiltersCount} active</Badge>
            )}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Sort Options */}
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <SortAsc className="w-4 h-4 text-primary" />
              <Label className="text-sm font-medium">Sort By</Label>
            </div>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date-desc">Newest First</SelectItem>
                <SelectItem value="date-asc">Oldest First</SelectItem>
                <SelectItem value="title-asc">Title A-Z</SelectItem>
                <SelectItem value="title-desc">Title Z-A</SelectItem>
                <SelectItem value="location">By Location</SelectItem>
                <SelectItem value="emotions">By Emotions</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator />

          {/* Date Range Filter */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Date Range</Label>
            
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger>
                <SelectValue placeholder="All time" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">All Time</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
                <SelectItem value="last-year">Last Year</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Separator />

          {/* Emotions Filter */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Emotions</Label>
            
            <div className="grid grid-cols-2 gap-2">
              {emotionOptions.map((emotion) => (
                <div key={emotion} className="flex items-center space-x-2">
                  <Checkbox
                    id={emotion}
                    checked={emotions.includes(emotion)}
                    onCheckedChange={() => toggleEmotion(emotion)}
                  />
                  <Label 
                    htmlFor={emotion} 
                    className="text-sm capitalize cursor-pointer"
                  >
                    {emotion}
                  </Label>
                </div>
              ))}
            </div>
            
            {emotions.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {emotions.map((emotion) => (
                  <Badge key={emotion} variant="secondary" className="text-xs">
                    {emotion}
                    <X 
                      className="w-3 h-3 ml-1 cursor-pointer" 
                      onClick={() => toggleEmotion(emotion)}
                    />
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <Separator />

          {/* Locations Filter */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Locations</Label>
            
            <div className="grid grid-cols-2 gap-2">
              {locationOptions.map((location) => (
                <div key={location} className="flex items-center space-x-2">
                  <Checkbox
                    id={location}
                    checked={locations.includes(location)}
                    onCheckedChange={() => toggleLocation(location)}
                  />
                  <Label 
                    htmlFor={location} 
                    className="text-sm cursor-pointer"
                  >
                    {location}
                  </Label>
                </div>
              ))}
            </div>
            
            {locations.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {locations.map((location) => (
                  <Badge key={location} variant="secondary" className="text-xs">
                    {location}
                    <X 
                      className="w-3 h-3 ml-1 cursor-pointer" 
                      onClick={() => toggleLocation(location)}
                    />
                  </Badge>
                ))}
              </div>
            )}
          </div>

          <div className="flex space-x-3 pt-4">
            <Button 
              type="button" 
              variant="outline" 
              className="flex-1" 
              onClick={clearFilters}
            >
              Clear All
            </Button>
            <Button 
              className="flex-1 bg-primary hover:bg-primary-dark" 
              onClick={applyFilters}
            >
              Apply Filters
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SortFilterModal;