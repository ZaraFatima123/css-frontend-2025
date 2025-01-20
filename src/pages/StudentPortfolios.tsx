const StudentPortfolios = () => {
  return (
    <div className="min-h-screen pt-20 pb-20 md:pb-0 px-4 bg-background">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-foreground">
            Student Portfolios
          </h1>
          <p className="text-muted-foreground">
            Browse through student achievements and projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Portfolio Cards */}
          <div className="rounded-lg border border-border bg-card p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-card-foreground mb-2">
              Portfolio Title
            </h2>
            <p className="text-muted-foreground">
              Student portfolio description...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPortfolios;