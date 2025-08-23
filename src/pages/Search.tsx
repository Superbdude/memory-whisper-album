import { useState } from "react";
import { Search as SearchIcon, Filter, Calendar, MapPin, Tag, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import MemoryCard from "@/components/MemoryCard";
import { useToast } from "@/components/ui/use-toast";
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [likedMemories, setLikedMemories] = useState<string[]>([]);
  const { toast } = useToast();

  const allMemories = [
    {
      id: "1",
      image: memory1,
      title: "Morning Coffee Moments",
      date: "Nov 15, 2024",
      location: "Home",
      emotions: ["☕", "😊"],
      tags: ["morning", "coffee", "home", "peaceful"]
    },
    {
      id: "2",
      image: memory2,
      title: "Sunset Beach Walk",
      date: "Nov 10, 2024",
      location: "Malibu Beach",
      emotions: ["🌅", "💭"],
      tags: ["sunset", "beach", "nature", "peaceful"]
    },
    {
      id: "3",
      image: memory3,
      title: "Love Letters Collection",
      date: "Nov 8, 2024",
      emotions: ["💝", "📝"],
      tags: ["letters", "love", "vintage", "memories"]
    },
  ];

  const suggestedFilters = [
    { type: "date", label: "This Month", value: "this-month" },
    { type: "date", label: "Last Year", value: "last-year" },
    { type: "location", label: "Home", value: "home" },
    { type: "location", label: "Beach", value: "beach" },
    { type: "tag", label: "Family", value: "family" },
    { type: "tag", label: "Nature", value: "nature" },
    { type: "emotion", label: "Happy", value: "happy" },
    { type: "emotion", label: "Peaceful", value: "peaceful" },
  ];

  const filteredMemories = allMemories.filter(memory => {
    const matchesSearch = searchQuery.toLowerCase() === "" || 
      memory.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      memory.location?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      memory.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesSearch;
  });

  const addFilter = (filter: string) => {
    if (!activeFilters.includes(filter)) {
      setActiveFilters([...activeFilters, filter]);
    }
  };

  const removeFilter = (filter: string) => {
    setActiveFilters(activeFilters.filter(f => f !== filter));
  };

  const clearAllFilters = () => {
    setActiveFilters([]);
    setSearchQuery("");
  };

  const toggleLike = (memoryId: string) => {
    setLikedMemories(prev => 
      prev.includes(memoryId) 
        ? prev.filter(id => id !== memoryId)
        : [...prev, memoryId]
    );
    
    const isLiked = likedMemories.includes(memoryId);
    toast({
      title: isLiked ? "Removed from Favorites" : "Added to Favorites",
      description: isLiked ? "Memory removed from your favorites" : "Memory added to your favorites",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">Search Memories</h1>
            <p className="text-muted-foreground">Find your special moments</p>
          </div>

          {/* Search Bar */}
          <div className="memory-card mb-6">
            <div className="p-6">
              <div className="relative">
                <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  placeholder="Search by title, location, or tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-12 h-12 text-lg"
                />
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </div>

              {/* Active Filters */}
              {activeFilters.length > 0 && (
                <div className="flex flex-wrap items-center gap-2 mt-4">
                  <span className="text-sm text-muted-foreground">Active filters:</span>
                  {activeFilters.map((filter) => (
                    <Badge key={filter} variant="secondary" className="flex items-center gap-1">
                      {filter}
                      <X
                        className="w-3 h-3 cursor-pointer hover:text-destructive"
                        onClick={() => removeFilter(filter)}
                      />
                    </Badge>
                  ))}
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearAllFilters}
                    className="h-auto p-1 text-xs"
                  >
                    Clear all
                  </Button>
                </div>
              )}

              {/* Filter Panel */}
              {showFilters && (
                <div className="mt-6 p-4 border border-border rounded-lg bg-muted/20">
                  <h3 className="font-medium text-foreground mb-4">Filter by:</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <Calendar className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">Date</span>
                      </div>
                      <div className="space-y-2">
                        {suggestedFilters.filter(f => f.type === "date").map((filter) => (
                          <Button
                            key={filter.value}
                            variant="outline"
                            size="sm"
                            onClick={() => addFilter(filter.label)}
                            className="w-full justify-start h-8"
                          >
                            {filter.label}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">Location</span>
                      </div>
                      <div className="space-y-2">
                        {suggestedFilters.filter(f => f.type === "location").map((filter) => (
                          <Button
                            key={filter.value}
                            variant="outline"
                            size="sm"
                            onClick={() => addFilter(filter.label)}
                            className="w-full justify-start h-8"
                          >
                            {filter.label}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <Tag className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground">Tags</span>
                      </div>
                      <div className="space-y-2">
                        {suggestedFilters.filter(f => f.type === "tag").map((filter) => (
                          <Button
                            key={filter.value}
                            variant="outline"
                            size="sm"
                            onClick={() => addFilter(filter.label)}
                            className="w-full justify-start h-8"
                          >
                            {filter.label}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-lg">😊</span>
                        <span className="text-sm font-medium text-foreground">Emotions</span>
                      </div>
                      <div className="space-y-2">
                        {suggestedFilters.filter(f => f.type === "emotion").map((filter) => (
                          <Button
                            key={filter.value}
                            variant="outline"
                            size="sm"
                            onClick={() => addFilter(filter.label)}
                            className="w-full justify-start h-8"
                          >
                            {filter.label}
                          </Button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Results */}
          <div className="mb-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-foreground">
                {searchQuery || activeFilters.length > 0 
                  ? `${filteredMemories.length} result${filteredMemories.length !== 1 ? 's' : ''} found`
                  : 'All Memories'
                }
              </h2>
              {(searchQuery || activeFilters.length > 0) && (
                <Button variant="outline" size="sm" onClick={clearAllFilters}>
                  Show All
                </Button>
              )}
            </div>
          </div>

          {/* Memory Grid */}
          {filteredMemories.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredMemories.map((memory, index) => (
                <div
                  key={memory.id}
                  className="fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <MemoryCard 
                    {...memory}
                    isLiked={likedMemories.includes(memory.id)}
                    onToggleLike={() => toggleLike(memory.id)}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center mb-4">
                <SearchIcon className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">No memories found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or filters
              </p>
              <Button variant="outline" onClick={clearAllFilters}>
                Clear filters
              </Button>
            </div>
          )}
        </div>
      </div>
      
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default Search;