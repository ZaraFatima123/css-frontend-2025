const LeetcodeCommunity = () => {
  return (
    <div className="min-h-screen pt-20 pb-20 md:pb-0 px-4 bg-background">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">
            LeetCode Community
          </h1>
          <p className="text-muted-foreground">
            Connect with fellow LeetCode enthusiasts.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-2xl font-semibold text-card-foreground mb-4">
              Recent Activity
            </h2>
          </div>
          
          <div className="rounded-lg border border-border bg-card p-6">
            <h2 className="text-2xl font-semibold text-card-foreground mb-4">
              Community Stats
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeetcodeCommunity;