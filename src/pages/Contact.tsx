import { Mail, MessageCircle, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours",
      contact: "hello@memories.app",
      action: "mailto:hello@memories.app"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      contact: "Available 9 AM - 6 PM EST",
      action: "#"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team",
      contact: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our office is always open for visitors",
      contact: "123 Memory Lane, SF, CA 94103",
      action: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <MessageCircle className="w-4 h-4" />
              <span className="text-sm font-medium">Get in Touch</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              We'd Love to
              <span className="block gradient-memory bg-clip-text text-transparent">
                Hear From You
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a question, suggestion, or just want to share your memory story? 
              We're here to help and would love to connect with you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="memory-card">
                <div className="p-8">
                  <h2 className="text-2xl font-semibold text-foreground mb-6">Send us a message</h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="John" />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Doe" />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john.doe@example.com" />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" placeholder="How can we help you?" />
                    </div>
                    
                    <div>
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us more about your question or feedback..."
                        rows={6}
                      />
                    </div>
                    
                    <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary-dark">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div className="memory-card">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Get in touch</h3>
                  <p className="text-muted-foreground mb-6">
                    Choose the method that works best for you. We're committed to providing 
                    excellent support and building meaningful connections with our community.
                  </p>
                  
                  <div className="space-y-4">
                    {contactMethods.map((method, index) => (
                      <a
                        key={method.title}
                        href={method.action}
                        className="block p-4 rounded-xl border border-border hover:bg-muted/50 transition-colors fade-in"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 rounded-lg gradient-memory flex items-center justify-center">
                            <method.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium text-foreground">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-1">{method.description}</p>
                            <p className="text-sm font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="memory-card">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-4">Quick Questions?</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground mb-1">How secure are my memories?</h4>
                      <p className="text-sm text-muted-foreground">
                        We use enterprise-grade encryption and security measures to protect your data.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Is there a storage limit?</h4>
                      <p className="text-sm text-muted-foreground">
                        We offer flexible plans to accommodate different needs, from personal to family accounts.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Can I share my albums?</h4>
                      <p className="text-sm text-muted-foreground">
                        Yes! You can create shareable links or invite specific people to view your albums.
                      </p>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full mt-6">
                    View Full FAQ
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

export default Contact;