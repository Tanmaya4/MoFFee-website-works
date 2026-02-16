const shimmer =
  "relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.5s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent";

const HeroSkeleton = () => (
  <div className="absolute inset-0 bg-[#111] z-20 flex flex-col">
    {/* Nav skeleton */}
    <div className="flex items-center justify-between px-6 py-6">
      <div className={`h-6 w-28 rounded bg-white/10 ${shimmer}`} />
      <div className="hidden lg:flex gap-8">
        {[80, 64, 72, 56].map((w, i) => (
          <div key={i} className={`h-3 rounded bg-white/8 ${shimmer}`} style={{ width: w }} />
        ))}
      </div>
      <div className={`lg:hidden h-6 w-6 rounded bg-white/10 ${shimmer}`} />
    </div>

    {/* Hero content skeleton */}
    <div className="flex-1 flex flex-col items-center justify-center px-4 gap-5">
      {/* Tagline */}
      <div className={`h-3 w-48 rounded-full bg-white/8 ${shimmer}`} />
      {/* Headline line 1 */}
      <div className={`h-12 sm:h-16 w-72 sm:w-96 rounded-lg bg-white/10 ${shimmer}`} />
      {/* Headline line 2 */}
      <div className={`h-12 sm:h-16 w-48 sm:w-64 rounded-lg bg-white/8 ${shimmer}`} />
      {/* Paragraph */}
      <div className="flex flex-col items-center gap-2 mt-2">
        <div className={`h-3 w-80 rounded-full bg-white/6 ${shimmer}`} />
        <div className={`h-3 w-64 rounded-full bg-white/6 ${shimmer}`} />
      </div>
      {/* Buttons */}
      <div className="flex gap-4 mt-4">
        <div className={`h-12 w-44 rounded-lg bg-white/10 ${shimmer}`} />
        <div className={`h-12 w-32 rounded-lg bg-white/8 ${shimmer}`} />
      </div>
    </div>
  </div>
);

export default HeroSkeleton;
