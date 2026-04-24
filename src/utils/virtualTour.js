/**
 * Detects if a URL is a YouTube or Matterport tour link
 * and returns an embeddable iframe URL.
 */
export function getEmbedUrl(url) {
  if (!url || typeof url !== "string") return null;

  const trimmed = url.trim();

  // YouTube
  const youtubeMatch = trimmed.match(
    /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/
  );
  if (youtubeMatch) {
    return `https://www.youtube.com/embed/${youtubeMatch[1]}?rel=0&modestbranding=1`;
  }

  // Matterport
  const matterportMatch = trimmed.match(/my\.matterport\.com\/show\/\?m=([a-zA-Z0-9]+)/);
  if (matterportMatch) {
    return `https://my.matterport.com/show/?m=${matterportMatch[1]}&play=1`;
  }

  // Already an embed URL
  if (trimmed.includes("youtube.com/embed/") || trimmed.includes("matterport.com/show/")) {
    return trimmed;
  }

  return null;
}

export function isVirtualTourUrl(url) {
  return getEmbedUrl(url) !== null;
}
