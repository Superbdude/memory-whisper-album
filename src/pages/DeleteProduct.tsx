import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { ArrowLeft, Trash2, AlertTriangle } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";
import memory4 from "@/assets/memory-4.jpg";

const DeleteProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  // Mock data
  const memories = {
    "1": {
      id: "1",
      image: memory1,
      title: "Morning Coffee Moments",
      date: "November 15, 2024",
      location: "Home Kitchen"
    },
    "2": {
      id: "2",
      image: memory2,
      title: "Sunset Beach Walk",
      date: "November 10, 2024",
      location: "Malibu Beach, California"
    },
    "3": {
      id: "3",
      image: memory3,
      title: "Love Letters Collection",
      date: "November 8, 2024",
      location: "Study Room"
    },
    "4": {
      id: "4",
      image: memory4,
      title: "Quiet Reading Time",
      date: "October 28, 2024",
      location: "Library Corner"
    }
  };

  const memory = memories[id as keyof typeof memories];

  if (!memory) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20 pb-8 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Memory Not Found</h1>
            <p className="text-muted-foreground mb-6">The memory you're trying to delete doesn't exist.</p>
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const handleDelete = async () => {
    setIsDeleting(true);
    
    // Simulate deletion process
    setTimeout(() => {
      toast({
        title: "Memory Deleted",
        description: "Your memory has been permanently deleted.",
        variant: "destructive",
      });
      
      setIsDeleting(false);
      setShowDeleteDialog(false);
      
      // Navigate back to home
      setTimeout(() => {
        navigate("/");
      }, 1000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20 pb-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center space-x-4 mb-8">
            <Link to={`/product-details/${id}`}>
              <Button variant="outline" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-foreground">Delete Memory</h1>
          </div>

          {/* Warning Section */}
          <div className="memory-card p-6 mb-8 border-destructive/20">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-semibold text-destructive mb-2">
                  Permanent Deletion Warning
                </h2>
                <p className="text-muted-foreground mb-4">
                  This action cannot be undone. Once you delete this memory, it will be permanently 
                  removed from your collection and cannot be recovered.
                </p>
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                  <h3 className="font-medium text-foreground mb-2">What will be deleted:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• The photo/video file</li>
                    <li>• All metadata and descriptions</li>
                    <li>• Tags and emotions associated with this memory</li>
                    <li>• Any comments or notes</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Memory Preview */}
          <div className="memory-card p-6 mb-8">
            <h2 className="text-lg font-semibold text-foreground mb-4">Memory to be deleted:</h2>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <div className="sm:w-48 h-48 sm:h-32 overflow-hidden rounded-2xl flex-shrink-0">
                <img
                  src={memory.image}
                  alt={memory.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground mb-2">{memory.title}</h3>
                <div className="space-y-1 text-sm text-muted-foreground">
                  <p>Date: {memory.date}</p>
                  {memory.location && <p>Location: {memory.location}</p>}
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              variant="destructive"
              onClick={() => setShowDeleteDialog(true)}
              className="flex-1 sm:flex-none"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Delete This Memory
            </Button>
            
            <Link to={`/product-details/${id}`} className="flex-1 sm:flex-none">
              <Button variant="outline" className="w-full">
                Keep This Memory
              </Button>
            </Link>
          </div>

          {/* Delete Confirmation Dialog */}
          <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="flex items-center space-x-2">
                  <AlertTriangle className="w-5 h-5 text-destructive" />
                  <span>Are you absolutely sure?</span>
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This will permanently delete the memory "{memory.title}" and all associated data. 
                  This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel disabled={isDeleting}>
                  Cancel
                </AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleDelete}
                  disabled={isDeleting}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  {isDeleting ? "Deleting..." : "Yes, delete forever"}
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </div>
      
      <div className="h-20 md:hidden" />
    </div>
  );
};

export default DeleteProduct;