import { useCallback, useEffect, useState } from "react";

export function ImageLightbox({ images, initialIndex = 0, onClose }) {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const handlePrev = useCallback(() => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  }, [images.length]);

  const handleNext = useCallback(() => {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  }, [images.length]);

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowLeft") {
        handlePrev();
      }
      if (event.key === "ArrowRight") {
        handleNext();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, handlePrev, handleNext]);

  const currentImage = images[activeIndex];
  const isGradient = typeof currentImage === "string" && currentImage.startsWith("linear-gradient");

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-md"
      onClick={onClose}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        aria-label="Close lightbox"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 6 6 18" /><path d="m6 6 12 12" />
        </svg>
      </button>

      {/* Previous button */}
      {images.length > 1 ? (
        <button
          type="button"
          onClick={(event) => { event.stopPropagation(); handlePrev(); }}
          className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          aria-label="Previous image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
      ) : null}

      {/* Image */}
      <div
        className="max-h-[85vh] max-w-[90vw] overflow-hidden rounded-2xl"
        onClick={(event) => event.stopPropagation()}
      >
        {isGradient ? (
          <div
            className="h-[70vh] w-[80vw] max-w-4xl rounded-2xl"
            style={{ background: currentImage }}
          />
        ) : (
          <img
            src={currentImage}
            alt={`Gallery image ${activeIndex + 1}`}
            className="max-h-[85vh] max-w-full object-contain"
            loading="lazy"
          />
        )}
      </div>

      {/* Next button */}
      {images.length > 1 ? (
        <button
          type="button"
          onClick={(event) => { event.stopPropagation(); handleNext(); }}
          className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
          aria-label="Next image"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      ) : null}

      {/* Counter */}
      {images.length > 1 ? (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
          {activeIndex + 1} / {images.length}
        </div>
      ) : null}
    </div>
  );
}
