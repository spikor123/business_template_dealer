export function SkeletonCard() {
  return (
    <div className="premium-card animate-pulse overflow-hidden rounded-[28px]">
      <div className="h-56 bg-[var(--color-surface-muted)]" />
      <div className="space-y-4 p-6">
        <div className="flex items-center justify-between">
          <div className="h-6 w-16 rounded-full bg-[var(--color-surface-muted)]" />
          <div className="h-5 w-24 rounded-full bg-[var(--color-surface-muted)]" />
        </div>
        <div className="space-y-2">
          <div className="h-6 w-3/4 rounded-lg bg-[var(--color-surface-muted)]" />
          <div className="h-4 w-1/2 rounded-lg bg-[var(--color-surface-muted)]" />
          <div className="h-4 w-full rounded-lg bg-[var(--color-surface-muted)]" />
        </div>
        <div className="flex gap-2">
          <div className="h-8 w-20 rounded-full bg-[var(--color-surface-muted)]" />
          <div className="h-8 w-20 rounded-full bg-[var(--color-surface-muted)]" />
          <div className="h-8 w-20 rounded-full bg-[var(--color-surface-muted)]" />
        </div>
        <div className="flex gap-3">
          <div className="h-12 flex-1 rounded-full bg-[var(--color-surface-muted)]" />
          <div className="h-12 flex-1 rounded-full bg-[var(--color-surface-muted)]" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonHero() {
  return (
    <section className="shell-container pt-8 pb-6 sm:pt-12 sm:pb-8">
      <div className="animate-pulse rounded-[36px] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
          <div className="space-y-8">
            <div className="space-y-5">
              <div className="h-7 w-64 rounded-full bg-[var(--color-surface-muted)]" />
              <div className="space-y-3">
                <div className="h-12 w-full rounded-lg bg-[var(--color-surface-muted)]" />
                <div className="h-12 w-3/4 rounded-lg bg-[var(--color-surface-muted)]" />
              </div>
              <div className="h-5 w-2/3 rounded-lg bg-[var(--color-surface-muted)]" />
            </div>
            <div className="flex gap-3">
              <div className="h-14 w-56 rounded-full bg-[var(--color-surface-muted)]" />
              <div className="h-14 w-48 rounded-full bg-[var(--color-surface-muted)]" />
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="h-[420px] rounded-[32px] bg-[var(--color-surface-muted)]" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function SkeletonSection({ count = 3 }) {
  return (
    <div className="grid gap-12 xl:grid-cols-3">
      {Array.from({ length: count }).map((_, index) => (
        <SkeletonCard key={index} />
      ))}
    </div>
  );
}

export function SkeletonText({ lines = 3, className = "" }) {
  return (
    <div className={`animate-pulse space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, index) => (
        <div
          key={index}
          className="h-4 rounded-lg bg-[var(--color-surface-muted)]"
          style={{ width: `${85 - index * 15}%` }}
        />
      ))}
    </div>
  );
}
