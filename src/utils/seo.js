import { useEffect } from "react";

/**
 * Sets the document title and meta description dynamically.
 * Call this in any page component to update SEO tags.
 */
export function useDocumentMeta({ title, description }) {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');

      if (!metaDescription) {
        metaDescription = document.createElement("meta");
        metaDescription.setAttribute("name", "description");
        document.head.appendChild(metaDescription);
      }

      metaDescription.setAttribute("content", description);
    }

    return () => {
      // Reset to defaults on unmount
      document.title = "Urban Crest Realty";
    };
  }, [title, description]);
}
