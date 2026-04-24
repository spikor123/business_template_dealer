const scoreLabels = {
  safety: { label: "Safety", icon: "🛡️" },
  connectivity: { label: "Connectivity", icon: "🚇" },
  lifestyle: { label: "Lifestyle", icon: "🏋️" },
  investment: { label: "Investment", icon: "📈" },
};

function ScoreBar({ label, icon, value }) {
  const percentage = (value / 10) * 100;
  const color =
    value >= 9
      ? "bg-emerald-500"
      : value >= 7
        ? "bg-blue-500"
        : value >= 5
          ? "bg-amber-500"
          : "bg-red-400";

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium text-[var(--color-text)]">
          <span>{icon}</span> {label}
        </span>
        <span className="text-sm font-bold text-[var(--color-text)]">{value}/10</span>
      </div>
      <div className="h-2.5 overflow-hidden rounded-full bg-[var(--color-surface-muted)]">
        <div
          className={`h-full rounded-full ${color} transition-all duration-700 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

export function LocalityScores({ scores }) {
  if (!scores) {
    return null;
  }

  return (
    <article className="premium-card rounded-[28px] p-6 sm:p-7">
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-deep)]">
        Locality scores
      </h3>
      <p className="mt-2 text-sm leading-7 text-[var(--color-text-soft)]">
        Data-driven ratings to help buyers and investors compare neighbourhoods.
      </p>
      <div className="mt-6 grid gap-5">
        {Object.entries(scoreLabels).map(([key, meta]) => {
          const value = scores[key];
          if (value === undefined || value === null) {
            return null;
          }
          return (
            <ScoreBar key={key} label={meta.label} icon={meta.icon} value={value} />
          );
        })}
      </div>
    </article>
  );
}
