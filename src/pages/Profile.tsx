import { User, Settings, Camera, Heart, Calendar, MapPin, Edit3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Navigation from "@/components/Navigation";
import MemoryCard from "@/components/MemoryCard";
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";

const Profile = () => {
  const stats = [
    { label: "Total Memories", value: "127", icon: Camera },
    { label: "Albums Created", value: "8", icon: Heart },
    { label: "Years Active", value: "2", icon: Calendar },
    { label: "Locations", value: "23", icon: MapPin },
  ];

  const recentMemories = [
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
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Profile Header */}
          <div className="memory-card mb-8">
            <div className="p-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-6 sm:space-y-0 sm:space-x-8">
                <div className="relative">
                  <Avatar className="w-24 h-24">
                    <AvatarImage src="/api/placeholder/150/150" />
                    <AvatarFallback className="text-2xl font-semibold bg-primary text-primary-foreground">
                      JD
                    </AvatarFallback>
                  </Avatar>
                  <Button
                    size="sm"
                    className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full p-0 bg-primary hover:bg-primary-dark"
                  >
                    <Edit3 className="w-3 h-3" />
                  </Button>
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h1 className="text-3xl font-bold text-foreground mb-2">Jane Doe</h1>
                      <p className="text-muted-foreground">Memory Keeper since 2022</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-0">
                      <Button variant="outline" size="sm">
                        <Edit3 className="w-4 h-4 mr-2" />
                        Edit Profile
                      </Button>
                      <Button variant="outline" size="sm">
                        <Settings className="w-4 h-4 mr-2" />
                        Settings
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-foreground max-w-2xl">
                    Photography enthusiast capturing life's beautiful moments. I believe every memory 
                    has a story worth telling, and I love preserving the little details that make 
                    each moment special.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="memory-card fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full gradient-memory flex items-center justify-center mx-auto mb-3">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold text-foreground">Recent Memories</h2>
                <Button variant="outline" size="sm">View All</Button>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {recentMemories.map((memory, index) => (
                  <div
                    key={memory.id}
                    className="fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <MemoryCard {...memory} />
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Info & Achievements */}
            <div className="space-y-6">
              {/* Quick Info */}
              <div className="memory-card">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Quick Info</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Member since</span>
                      <span className="font-medium text-foreground">January 2022</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Location</span>
                      <span className="font-medium text-foreground">San Francisco, CA</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Favorite emotion</span>
                      <span className="font-medium text-foreground">😊 Joy</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Privacy</span>
                      <span className="font-medium text-foreground">Private</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="memory-card">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Achievements</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-memory-warm flex items-center justify-center">
                        <Camera className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">First Memory</h4>
                        <p className="text-sm text-muted-foreground">Uploaded your first photo</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-memory-cool flex items-center justify-center">
                        <Heart className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Memory Keeper</h4>
                        <p className="text-sm text-muted-foreground">100+ memories stored</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-memory-nature flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">Year in Review</h4>
                        <p className="text-sm text-muted-foreground">Active for 2+ years</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Storage Info */}
              <div className="memory-card">
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Storage</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Used</span>
                      <span className="font-medium text-foreground">2.4 GB</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '24%' }}></div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Available</span>
                      <span className="font-medium text-foreground">7.6 GB remaining</span>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-4">
                    Upgrade Storage
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default Profile;