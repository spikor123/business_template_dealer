import { getEmbedUrl } from "../../utils/virtualTour";

export function PropertyVirtualTour({ tourUrl }) {
  const embedUrl = getEmbedUrl(tourUrl);

  if (!embedUrl) {
    return null;
  }

  return (
    <section className="site-section">
      <article className="premium-card overflow-hidden rounded-[32px] p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent-deep)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m22 8-6 4 6 4V8Z" /><rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
            </svg>
          </span>
          <div>
            <h2 className="section-title text-xl font-semibold text-[var(--color-text)]">Virtual Tour</h2>
            <p className="text-sm text-[var(--color-text-soft)]">Explore this property from the comfort of your home</p>
          </div>
        </div>
        <div className="mt-6 aspect-video overflow-hidden rounded-[24px] border border-[var(--color-border)]">
          <iframe
            src={embedUrl}
            title="Virtual Tour"
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; xr-spatial-tracking"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </article>
    </section>
  );
}
