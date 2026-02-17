const shimmer =
  "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent";

const MoffeeProductSkeleton = () => (
  <div className="min-h-screen bg-background">
    {/* Header skeleton */}
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-4 sm:py-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className={`h-5 w-20 rounded bg-white/10 ${shimmer}`} />
        <div className={`h-6 w-24 rounded bg-white/10 ${shimmer}`} />
        <div className="w-16 sm:w-32" />
      </div>
    </div>

    {/* Hero skeleton */}
    <div className="relative min-h-screen flex items-center justify-center bg-charcoal">
      <div className="flex flex-col items-center gap-6">
        <div className={`h-3 w-40 rounded-full bg-white/8 ${shimmer}`} />
        <div className={`h-16 sm:h-20 w-72 sm:w-96 rounded-lg bg-white/10 ${shimmer}`} />
        <div className={`h-6 w-80 rounded bg-white/8 ${shimmer}`} />
        <div className={`h-4 w-96 max-w-full rounded bg-white/6 ${shimmer}`} />
        <div className={`h-14 w-48 rounded-full bg-white/10 mt-4 ${shimmer}`} />
      </div>
    </div>

    {/* Story section skeleton */}
    <div className="py-20 sm:py-28 bg-cream">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl flex flex-col items-center gap-4">
        <div className={`h-3 w-24 rounded-full bg-muted ${shimmer}`} />
        <div className={`h-10 w-80 rounded bg-muted ${shimmer}`} />
        <div className="w-full space-y-3 mt-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className={`h-4 w-full rounded bg-muted/50 ${shimmer}`} />
          ))}
        </div>
      </div>
    </div>

    {/* Benefits skeleton */}
    <div className="py-20 sm:py-28">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className={`h-3 w-24 rounded-full bg-muted ${shimmer}`} />
          <div className={`h-10 w-56 rounded bg-muted ${shimmer}`} />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="p-6 sm:p-8 rounded-2xl border-2 border-muted flex flex-col items-center gap-4">
              <div className={`w-14 h-14 rounded-full bg-muted ${shimmer}`} />
              <div className={`h-5 w-32 rounded bg-muted ${shimmer}`} />
              <div className={`h-3 w-full rounded bg-muted/50 ${shimmer}`} />
              <div className={`h-3 w-3/4 rounded bg-muted/50 ${shimmer}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default MoffeeProductSkeleton;
