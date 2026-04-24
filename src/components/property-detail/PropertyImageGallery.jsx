import { useState } from "react";
import { createPropertyPlaceholder, getMediaSurfaceStyle } from "../../utils/media";
import { ImageLightbox } from "../ImageLightbox";

export function PropertyImageGallery({ property }) {
  const galleryImages = Array.isArray(property.galleryImages) ? property.galleryImages : [];
  const allImages = [property.featuredImage, ...galleryImages].filter(Boolean);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <section className="site-section space-y-5">
      <div className="premium-card overflow-hidden rounded-[34px]">
        <div
          className="relative h-[360px] cursor-pointer sm:h-[480px] transition duration-500 hover:scale-[1.02]"
          style={getMediaSurfaceStyle(property.featuredImage, createPropertyPlaceholder(property))}
          onClick={() => setLightboxIndex(0)}
          role="button"
          tabIndex={0}
          aria-label="Open image gallery"
        >
          <div className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(29,36,51,0.28))] p-5 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">Gallery preview</p>
            <p className="mt-2 text-sm text-white/90">Click to view full gallery • {allImages.length} images</p>
          </div>
          {/* Expand icon */}
          <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/30 text-white backdrop-blur-sm transition hover:bg-black/50">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 3h6v6" /><path d="M9 21H3v-6" /><path d="M21 3l-7 7" /><path d="M3 21l7-7" />
            </svg>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {galleryImages.map((image, index) => (
          <div
            key={`${property.id}-${index}`}
            className="premium-card h-32 cursor-pointer rounded-[24px] transition duration-300 hover:scale-[1.03] hover:shadow-[0_16px_40px_rgba(20,26,41,0.12)] sm:h-36"
            style={getMediaSurfaceStyle(image, createPropertyPlaceholder({
              ...property,
              title: `${property.title} ${index + 1}`,
            }))}
            onClick={() => setLightboxIndex(index + 1)}
            role="button"
            tabIndex={0}
            aria-label={`View gallery image ${index + 1}`}
          />
        ))}
      </div>

      {lightboxIndex !== null ? (
        <ImageLightbox
          images={allImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      ) : null}
    </section>
  );
}
