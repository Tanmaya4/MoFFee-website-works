const shimmer =
  "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent";

const CollectionsSkeleton = () => (
  <div className="min-h-screen bg-background animate-pulse">
    {/* Header skeleton */}
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className={`h-5 w-20 rounded bg-muted ${shimmer}`} />
        <div className={`h-6 w-24 rounded bg-muted ${shimmer}`} />
        <div className="w-16 sm:w-20" />
      </div>
    </div>

    {/* Hero skeleton */}
    <div className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 mb-16 sm:mb-24 bg-charcoal/30">
      <div className="container mx-auto px-4 sm:px-6 flex flex-col items-center gap-4">
        <div className={`h-3 w-32 rounded-full bg-muted ${shimmer}`} />
        <div className={`h-12 w-80 rounded-lg bg-muted ${shimmer}`} />
        <div className={`h-4 w-96 max-w-full rounded-full bg-muted/60 ${shimmer}`} />
      </div>
    </div>

    {/* Video section skeleton */}
    <div className={`w-full h-screen bg-charcoal/20 ${shimmer}`} />

    {/* Products skeleton */}
    <div className="py-12 sm:py-24 container mx-auto px-4 sm:px-6 space-y-16">
      {[1, 2, 3].map((i) => (
        <div key={i} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className={`aspect-[16/9] rounded-xl bg-muted ${shimmer}`} />
          <div className="space-y-4">
            <div className={`h-10 w-48 rounded bg-muted ${shimmer}`} />
            <div className={`h-3 w-24 rounded bg-muted/60 ${shimmer}`} />
            <div className={`h-4 w-full rounded bg-muted/40 ${shimmer}`} />
            <div className={`h-4 w-3/4 rounded bg-muted/40 ${shimmer}`} />
            <div className={`h-12 w-36 rounded-full bg-muted ${shimmer}`} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default CollectionsSkeleton;
