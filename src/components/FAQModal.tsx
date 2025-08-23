import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Shield, Upload, Heart, Settings, Crown } from "lucide-react";

interface FAQModalProps {
  children: React.ReactNode;
}

const FAQModal = ({ children }: FAQModalProps) => {
  const faqCategories = [
    {
      category: "Getting Started",
      icon: Upload,
      questions: [
        {
          question: "How do I create my first memory album?",
          answer: "Click the 'Upload' button in the navigation bar or the '+' icon on the Albums page. You can upload photos and videos, add descriptions, locations, emotions, and organize them into albums."
        },
        {
          question: "What file formats are supported?",
          answer: "We support all common image formats (JPEG, PNG, GIF, WebP) and video formats (MP4, MOV, AVI). Maximum file size is 100MB per file."
        },
        {
          question: "How do I organize my memories?",
          answer: "You can create albums, add tags, emotions, locations, and dates to your memories. Use the search and filter features to quickly find specific memories."
        }
      ]
    },
    {
      category: "Privacy & Security",
      icon: Shield,
      questions: [
        {
          question: "How secure are my memories?",
          answer: "We use enterprise-grade encryption (AES-256) to protect your data. All files are stored securely in the cloud with multiple backups. Only you have access to your private memories."
        },
        {
          question: "Can other people see my memories?",
          answer: "By default, all your memories are private. You can choose to share specific albums or memories with others through secure links or by inviting specific people."
        },
        {
          question: "How do you handle my data?",
          answer: "We never sell your data or use your memories for advertising. Your privacy is our top priority. You can export or delete your data at any time."
        }
      ]
    },
    {
      category: "Features",
      icon: Heart,
      questions: [
        {
          question: "What are emotions and how do they work?",
          answer: "Emotions help you categorize your memories by how they made you feel. You can add emotions like 'happy', 'nostalgic', 'peaceful' to memories and search by emotions later."
        },
        {
          question: "Can I collaborate on albums with others?",
          answer: "Yes! You can invite family and friends to collaborate on shared albums. They can add their own memories and help build the story together."
        },
        {
          question: "How does the timeline feature work?",
          answer: "The timeline automatically organizes your memories chronologically. You can view memories by year, month, or specific time periods to see how your story unfolds."
        }
      ]
    },
    {
      category: "Account & Billing",
      icon: Crown,
      questions: [
        {
          question: "What's included in the free plan?",
          answer: "The free plan includes 5GB of storage, unlimited memories and albums, basic sharing features, and access to all core features."
        },
        {
          question: "What are the benefits of upgrading?",
          answer: "Premium plans include more storage (100GB-1TB), advanced sharing options, priority support, higher upload limits, and exclusive features like facial recognition."
        },
        {
          question: "Can I cancel my subscription anytime?",
          answer: "Yes, you can cancel your subscription at any time. Your data will remain accessible until the end of your billing period."
        }
      ]
    },
    {
      category: "Troubleshooting",
      icon: Settings,
      questions: [
        {
          question: "My uploads are failing. What should I do?",
          answer: "Check your internet connection and file size. Ensure files are under 100MB. Try uploading one file at a time. If issues persist, contact our support team."
        },
        {
          question: "I can't find a specific memory. How can I search better?",
          answer: "Use the search bar with keywords, locations, or emotions. You can also filter by date ranges, albums, or specific tags you've added to memories."
        },
        {
          question: "How do I recover deleted memories?",
          answer: "Deleted memories are moved to trash and kept for 30 days. Go to Settings > Data Management > Trash to restore them. After 30 days, they're permanently deleted."
        }
      ]
    }
  ];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      
      <DialogContent className="sm:max-w-[700px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg gradient-memory flex items-center justify-center">
              <HelpCircle className="w-4 h-4 text-white" />
            </div>
            <span>Frequently Asked Questions</span>
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {faqCategories.map((category, categoryIndex) => (
            <div key={category.category} className="space-y-2">
              <div className="flex items-center space-x-2 mb-3">
                <category.icon className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">{category.category}</h3>
              </div>
              
              <Accordion type="single" collapsible className="space-y-2">
                {category.questions.map((item, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`${categoryIndex}-${index}`}
                    className="border border-border rounded-lg px-4"
                  >
                    <AccordionTrigger className="text-left hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
          
          <div className="mt-8 p-4 rounded-lg bg-muted/50 text-center">
            <h3 className="font-semibold text-foreground mb-2">Still have questions?</h3>
            <p className="text-sm text-muted-foreground mb-3">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <p className="text-sm text-primary font-medium">
              Email us at support@memories.app or use the contact form
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FAQModal;