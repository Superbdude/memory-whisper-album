import { Heart, Camera, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";

const About = () => {
  const features = [
    {
      icon: Camera,
      title: "Capture Moments",
      description: "Easily upload and organize your photos and videos with our intuitive interface."
    },
    {
      icon: Heart,
      title: "Emotional Tagging",
      description: "Add emotions and feelings to your memories to create a richer storytelling experience."
    },
    {
      icon: Shield,
      title: "Safe & Private",
      description: "Your memories are encrypted and stored securely. Only you have access to your personal album."
    },
    {
      icon: Sparkles,
      title: "Beautiful Design",
      description: "Experience your memories in a beautiful, modern interface designed for emotional connection."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-medium">About Memories</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Your Digital
              <span className="block gradient-memory bg-clip-text text-transparent">
                Memory Keeper
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              We believe that every moment matters. Our platform is designed to help you preserve, 
              organize, and relive your most precious memories in a beautiful, safe, and intuitive way.
            </p>
          </div>

          {/* Story Section */}
          <div className="memory-card mb-16">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                <p>
                  In a world where we take thousands of photos but rarely look back at them, 
                  we wanted to create something different. Memories was born from the desire 
                  to make digital photo storage feel personal, emotional, and meaningful.
                </p>
                <p>
                  We combine modern technology with thoughtful design to create a platform 
                  that doesn't just store your photos—it helps you tell your story. Every 
                  feature is crafted with the understanding that behind every image is a 
                  moment worth remembering.
                </p>
                <p>
                  Whether it's a quiet morning coffee, a sunset walk, or a letter from a 
                  loved one, these moments deserve a home that honors their importance in your life.
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">What Makes Us Special</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="memory-card fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-full gradient-memory flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="memory-card mb-16">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6">Our Values</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-memory-warm flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Emotional Connection</h3>
                  <p className="text-sm text-muted-foreground">
                    We design for the heart, creating experiences that evoke emotions and memories.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-memory-cool flex items-center justify-center mx-auto mb-4">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Privacy First</h3>
                  <p className="text-sm text-muted-foreground">
                    Your memories are yours alone. We use the highest security standards to protect them.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-memory-nature flex items-center justify-center mx-auto mb-4">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">Beautiful Simplicity</h3>
                  <p className="text-sm text-muted-foreground">
                    Complex technology should feel effortless. We prioritize intuitive, beautiful design.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <h2 className="text-3xl font-bold text-foreground">Start Your Memory Journey</h2>
              <p className="text-lg text-muted-foreground">
                Join thousands of people who are already preserving their precious moments with Memories.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-primary hover:bg-primary-dark">
                  <Camera className="w-5 h-5 mr-2" />
                  Get Started
                </Button>
                <Button variant="outline" size="lg">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default About;