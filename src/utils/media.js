const DEFAULT_MEDIA_FALLBACK =
  "linear-gradient(135deg, rgba(230, 220, 202, 1) 0%, rgba(247, 241, 233, 1) 100%)";

function escapeSvgText(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toSvgDataUrl(svg) {
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

function createBrandedPlaceholder({
  eyebrow = "Urban Crest Realty",
  title = "Premium Gurgaon Property",
  subtitle = "Curated visual preview",
  align = "left",
}) {
  const textAnchor = align === "center" ? "middle" : "start";
  const x = align === "center" ? "600" : "86";

  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="800" viewBox="0 0 1200 800" fill="none">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="800" gradientUnits="userSpaceOnUse">
          <stop stop-color="#F7F0E7"/>
          <stop offset="0.45" stop-color="#E7DCC8"/>
          <stop offset="1" stop-color="#D9C5A7"/>
        </linearGradient>
        <radialGradient id="glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(960 110) rotate(116.201) scale(398.367 526.176)">
          <stop stop-color="#FFFFFF" stop-opacity="0.75"/>
          <stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1200" height="800" rx="42" fill="url(#bg)"/>
      <rect width="1200" height="800" rx="42" fill="url(#glow)"/>
      <rect x="58" y="58" width="1084" height="684" rx="34" fill="rgba(255,255,255,0.18)" stroke="rgba(64,49,35,0.14)"/>
      <rect x="86" y="90" width="228" height="42" rx="21" fill="rgba(29,36,51,0.82)"/>
      <text x="200" y="117" text-anchor="middle" fill="#F7F0E7" font-size="15" font-weight="700" font-family="Arial, Helvetica, sans-serif" letter-spacing="3">${escapeSvgText(eyebrow.toUpperCase())}</text>
      <text x="${x}" y="260" text-anchor="${textAnchor}" fill="#1D2433" font-size="68" font-weight="700" font-family="Georgia, Times New Roman, serif">${escapeSvgText(title)}</text>
      <text x="${x}" y="324" text-anchor="${textAnchor}" fill="#43506A" font-size="28" font-weight="500" font-family="Arial, Helvetica, sans-serif">${escapeSvgText(subtitle)}</text>
      <path d="M86 620C196 530.667 310.667 486 430 486C549.333 486 658.667 523.333 758 598C847.333 662 945.333 694 1052 694" stroke="rgba(29,36,51,0.16)" stroke-width="2"/>
      <circle cx="1048" cy="182" r="96" fill="rgba(29,36,51,0.08)"/>
      <circle cx="1088" cy="162" r="24" fill="rgba(183,121,43,0.35)"/>
      <rect x="86" y="652" width="188" height="18" rx="9" fill="rgba(29,36,51,0.12)"/>
      <rect x="86" y="684" width="124" height="18" rx="9" fill="rgba(29,36,51,0.08)"/>
    </svg>
  `;

  return toSvgDataUrl(svg);
}

function getInitials(value) {
  const parts = String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  return parts.slice(0, 2).map((part) => part[0]?.toUpperCase() || "").join("") || "UC";
}

export function createLogoPlaceholder({ businessName = "Urban Crest Realty", brandInitials = "UC" } = {}) {
  const initials = getInitials(brandInitials || businessName);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="280" height="280" viewBox="0 0 280 280" fill="none">
      <defs>
        <linearGradient id="logoBg" x1="0" y1="0" x2="280" y2="280" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1D2433"/>
          <stop offset="1" stop-color="#445679"/>
        </linearGradient>
      </defs>
      <rect width="280" height="280" rx="64" fill="url(#logoBg)"/>
      <circle cx="140" cy="140" r="98" fill="rgba(255,255,255,0.08)"/>
      <text x="140" y="158" text-anchor="middle" fill="#FFF8F1" font-size="88" font-weight="700" font-family="Georgia, Times New Roman, serif">${escapeSvgText(initials)}</text>
    </svg>
  `;

  return toSvgDataUrl(svg);
}

export function createHeroPlaceholder({ businessName = "Urban Crest Realty", city = "Gurgaon" } = {}) {
  return createBrandedPlaceholder({
    eyebrow: businessName,
    title: "Premium homes in Gurgaon",
    subtitle: `Curated opportunities across ${city}'s strongest micro-markets`,
  });
}

export function createPropertyPlaceholder(property = {}) {
  return createBrandedPlaceholder({
    eyebrow: property.locality || property.city || "Gurgaon",
    title: property.title || "Curated Residence",
    subtitle: property.priceLabel || `${property.propertyType || "Premium property"} in Gurgaon`,
  });
}

export function createLocalityPlaceholder(locality = {}) {
  return createBrandedPlaceholder({
    eyebrow: locality.city || "Gurgaon",
    title: locality.name || "Premium Locality",
    subtitle: locality.avgPriceLabel || locality.idealFor || "Micro-market snapshot",
  });
}

export function createAvatarPlaceholder({ name = "Client", role = "Client" } = {}) {
  const initials = getInitials(name);
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240" fill="none">
      <defs>
        <linearGradient id="avatarBg" x1="0" y1="0" x2="240" y2="240" gradientUnits="userSpaceOnUse">
          <stop stop-color="#E8DCC8"/>
          <stop offset="1" stop-color="#D6C0A0"/>
        </linearGradient>
      </defs>
      <rect width="240" height="240" rx="120" fill="url(#avatarBg)"/>
      <circle cx="120" cy="120" r="92" fill="rgba(255,255,255,0.22)"/>
      <text x="120" y="128" text-anchor="middle" fill="#1D2433" font-size="74" font-weight="700" font-family="Georgia, Times New Roman, serif">${escapeSvgText(initials)}</text>
      <text x="120" y="188" text-anchor="middle" fill="#43506A" font-size="16" font-weight="700" font-family="Arial, Helvetica, sans-serif" letter-spacing="2">${escapeSvgText(role.toUpperCase())}</text>
    </svg>
  `;

  return toSvgDataUrl(svg);
}

export function isGradientValue(value) {
  return /^linear-gradient|^radial-gradient/i.test(String(value || "").trim());
}

function extractGoogleDriveFileId(value) {
  const source = String(value || "").trim();

  if (!source) {
    return "";
  }

  const fileMatch = source.match(/\/file\/d\/([^/]+)/i);
  if (fileMatch?.[1]) {
    return fileMatch[1];
  }

  const openMatch = source.match(/[?&]id=([^&]+)/i);
  if (openMatch?.[1]) {
    return openMatch[1];
  }

  return "";
}

export function normalizeImageUrl(value) {
  const source = String(value || "").trim();

  if (!source) {
    return "";
  }

  if (/drive\.google\.com|docs\.google\.com/i.test(source)) {
    const fileId = extractGoogleDriveFileId(source);

    if (fileId) {
      return `https://drive.google.com/uc?export=view&id=${fileId}`;
    }
  }

  return source;
}

export function isImageUrl(value) {
  const normalizedValue = normalizeImageUrl(value);
  return /^(https?:\/\/|data:image\/|blob:)/i.test(normalizedValue);
}

export function getImageSrc(value, fallback = "") {
  const normalizedValue = normalizeImageUrl(value);

  if (isImageUrl(normalizedValue)) {
    return normalizedValue;
  }

  return fallback;
}

function resolveSurfaceStyle(source) {
  if (isGradientValue(source)) {
    return {
      backgroundImage: source,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  }

  if (isImageUrl(source)) {
    return {
      backgroundImage: `url("${source}")`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    };
  }

  return null;
}

export function getMediaSurfaceStyle(value, fallback = DEFAULT_MEDIA_FALLBACK) {
  const source = normalizeImageUrl(value);
  return resolveSurfaceStyle(source) || resolveSurfaceStyle(fallback) || resolveSurfaceStyle(DEFAULT_MEDIA_FALLBACK);
}
