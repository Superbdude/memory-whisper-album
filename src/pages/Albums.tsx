import { Folder, Plus, Search, Grid3X3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navigation from "@/components/Navigation";

const Albums = () => {
  const albums = [
    {
      id: "1",
      name: "Summer Adventures",
      count: 24,
      cover: "/api/placeholder/300/300",
      color: "bg-memory-warm"
    },
    {
      id: "2",
      name: "Family Gatherings",
      count: 18,
      cover: "/api/placeholder/300/300",
      color: "bg-memory-love"
    },
    {
      id: "3",
      name: "City Explorations",
      count: 32,
      cover: "/api/placeholder/300/300",
      color: "bg-memory-cool"
    },
    {
      id: "4",
      name: "Nature Walks",
      count: 15,
      cover: "/api/placeholder/300/300",
      color: "bg-memory-nature"
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground mb-2">Albums</h1>
              <p className="text-muted-foreground">Organize your memories into collections</p>
            </div>
            
            <Button className="bg-primary hover:bg-primary-dark mt-4 sm:mt-0">
              <Plus className="w-4 h-4 mr-2" />
              Create Album
            </Button>
          </div>

          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search albums..."
              className="pl-10"
            />
          </div>

          {/* Albums Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {albums.map((album, index) => (
              <div
                key={album.id}
                className="memory-card fade-in group cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative">
                  <div className={`w-full h-48 ${album.color} rounded-t-2xl flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <Folder className="w-12 h-12 mx-auto mb-2 opacity-60" />
                      <Grid3X3 className="w-8 h-8 mx-auto opacity-40" />
                    </div>
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-t-2xl" />
                  
                  <div className="absolute top-3 right-3 glass-strong text-white px-2 py-1 rounded-lg text-sm font-medium">
                    {album.count}
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-foreground mb-1">{album.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {album.count} {album.count === 1 ? 'memory' : 'memories'}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Create New Album Card */}
            <div className="memory-card fade-in group cursor-pointer border-2 border-dashed border-primary/30 hover:border-primary/50">
              <div className="w-full h-48 flex items-center justify-center rounded-t-2xl bg-primary/5">
                <div className="text-center text-primary">
                  <Plus className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm font-medium">Create Album</p>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1">New Album</h3>
                <p className="text-sm text-muted-foreground">Start a new collection</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default Albums;