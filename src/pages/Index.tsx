import { Camera, Plus, Grid3X3, LayoutList, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import MemoryCard from "@/components/MemoryCard";
import UploadModal from "@/components/UploadModal";
import SortFilterModal from "@/components/SortFilterModal";
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";
import memory4 from "@/assets/memory-4.jpg";

const Index = () => {
  const memories = [
    {
      id: "1",
      image: memory1,
      title: "Morning Coffee Moments",
      date: "Nov 15, 2024",
      location: "Home",
      emotions: ["☕", "😊"],
    },
    {
      id: "2", 
      image: memory2,
      title: "Sunset Beach Walk",
      date: "Nov 10, 2024",
      location: "Malibu Beach",
      emotions: ["🌅", "💭"],
    },
    {
      id: "3",
      image: memory3,
      title: "Love Letters Collection", 
      date: "Nov 8, 2024",
      emotions: ["💝", "📝"],
    },
    {
      id: "4",
      image: memory4,
      title: "Quiet Reading Time",
      date: "Nov 5, 2024",
      location: "Library Corner",
      emotions: ["📚", "🕯️"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-12">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 text-primary">
              <Camera className="w-4 h-4" />
              <span className="text-sm font-medium">Your Digital Memory Album</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground">
              Preserve Your
              <span className="block gradient-memory bg-clip-text text-transparent">
                Beautiful Moments
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Store, organize, and relive your most precious memories with our beautiful, 
              intuitive platform designed for storytelling.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <UploadModal>
                <Button size="lg" className="bg-primary hover:bg-primary-dark shadow-lg">
                  <Plus className="w-5 h-5 mr-2" />
                  Add Your First Memory
                </Button>
              </UploadModal>
              
              <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                <LayoutList className="w-5 h-5 mr-2" />
                View Timeline
              </Button>
            </div>
          </div>

          {/* View Toggle */}
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">Recent Memories</h2>
              <p className="text-muted-foreground">Your latest captured moments</p>
            </div>
            
            <div className="flex items-center space-x-2">
              <SortFilterModal>
                <Button variant="outline" size="sm">
                  <Filter className="w-4 h-4 mr-2" />
                  Sort & Filter
                </Button>
              </SortFilterModal>
              <Button variant="outline" size="sm">
                <Grid3X3 className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <LayoutList className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Memory Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {memories.map((memory, index) => (
              <div 
                key={memory.id} 
                className="fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <MemoryCard {...memory} />
              </div>
            ))}
          </div>

          {/* Empty State Call-to-Action */}
          <div className="mt-16 text-center">
            <div className="max-w-md mx-auto space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full gradient-memory flex items-center justify-center">
                <Camera className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground">Start Your Journey</h3>
              <p className="text-muted-foreground">
                Upload your first photo or video to begin creating your digital memory album
              </p>
              
              <UploadModal>
                <Button className="bg-primary hover:bg-primary-dark">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Memory
                </Button>
              </UploadModal>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile spacing for bottom nav */}
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default Index;
