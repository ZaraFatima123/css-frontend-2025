import { ToastDemo } from "@/components/toast-demo"

const Homepage = () => {
  return (
    <div className="min-h-screen pt-20 pb-20 md:pb-0 px-4 bg-background">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">Welcome Home</h1>
          <p className="text-muted-foreground">This is your dashboard homepage.</p>
        </div>
        
        <div className="rounded-lg border border-border bg-card p-6">
          <ToastDemo />
        </div>
      </div>
    </div>
  );
};

export default Homepage;