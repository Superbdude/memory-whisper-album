import { Calendar, MapPin, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";
import memory4 from "@/assets/memory-4.jpg";

const Timeline = () => {
  const timelineData = [
    {
      month: "November 2024",
      memories: [
        {
          id: "1",
          image: memory1,
          title: "Morning Coffee Moments",
          date: "Nov 15, 2024",
          time: "8:30 AM",
          location: "Home",
        },
        {
          id: "2",
          image: memory2,
          title: "Sunset Beach Walk",
          date: "Nov 10, 2024",
          time: "6:45 PM",
          location: "Malibu Beach",
        },
        {
          id: "3",
          image: memory3,
          title: "Love Letters Collection",
          date: "Nov 8, 2024",
          time: "2:15 PM",
        },
      ]
    },
    {
      month: "October 2024",
      memories: [
        {
          id: "4",
          image: memory4,
          title: "Quiet Reading Time",
          date: "Oct 28, 2024",
          time: "4:20 PM",
          location: "Library Corner",
        },
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl font-bold text-foreground mb-2">Your Memory Timeline</h1>
            <p className="text-muted-foreground">A journey through your captured moments</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/30" />
            
            <div className="space-y-12">
              {timelineData.map((period, periodIndex) => (
                <div key={period.month} className="relative">
                  {/* Month Header */}
                  <div className="flex items-center mb-8">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full glass flex items-center justify-center border-4 border-primary/20">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="ml-6">
                      <h2 className="text-2xl font-semibold text-foreground">{period.month}</h2>
                      <p className="text-muted-foreground">{period.memories.length} memories</p>
                    </div>
                  </div>

                  {/* Memories */}
                  <div className="ml-8 space-y-6">
                    {period.memories.map((memory, memoryIndex) => (
                      <div
                        key={memory.id}
                        className="relative fade-in"
                        style={{ animationDelay: `${(periodIndex * period.memories.length + memoryIndex) * 0.1}s` }}
                      >
                        {/* Timeline Dot */}
                        <div className="absolute -left-8 top-6 w-3 h-3 rounded-full bg-primary border-2 border-background" />
                        
                        {/* Memory Card */}
                        <div className="memory-card group cursor-pointer">
                          <div className="flex flex-col sm:flex-row">
                            <div className="sm:w-48 h-48 sm:h-32 overflow-hidden rounded-l-2xl sm:rounded-r-none rounded-r-2xl">
                              <img
                                src={memory.image}
                                alt={memory.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>
                            
                            <div className="flex-1 p-6">
                              <div className="flex items-start justify-between mb-2">
                                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                                  {memory.title}
                                </h3>
                                <div className="text-sm text-muted-foreground flex items-center space-x-1">
                                  <Clock className="w-3 h-3" />
                                  <span>{memory.time}</span>
                                </div>
                              </div>
                              
                              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                                <div className="flex items-center space-x-1">
                                  <Calendar className="w-3 h-3" />
                                  <span>{memory.date}</span>
                                </div>
                                
                                {memory.location && (
                                  <div className="flex items-center space-x-1">
                                    <MapPin className="w-3 h-3" />
                                    <span>{memory.location}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* End of Timeline */}
          <div className="relative mt-12 text-center">
            <div className="absolute left-8 w-16 h-16 rounded-full glass flex items-center justify-center border-4 border-primary/20">
              <div className="w-3 h-3 rounded-full bg-primary/50" />
            </div>
            <div className="ml-24">
              <p className="text-muted-foreground">This is where your journey begins...</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default Timeline;