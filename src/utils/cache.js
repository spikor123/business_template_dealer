const CACHE_PREFIX = "btd-cache-";
const DEFAULT_TTL_MS = 5 * 60 * 1000; // 5 minutes

/**
 * Get a cached value from localStorage.
 * Returns null if expired or missing.
 */
export function getCachedData(key) {
  try {
    const raw = localStorage.getItem(`${CACHE_PREFIX}${key}`);
    if (!raw) return null;

    const parsed = JSON.parse(raw);
    if (Date.now() > parsed.expiresAt) {
      localStorage.removeItem(`${CACHE_PREFIX}${key}`);
      return null;
    }

    return parsed.data;
  } catch {
    return null;
  }
}

/**
 * Set a value into localStorage with a TTL.
 */
export function setCachedData(key, data, ttlMs = DEFAULT_TTL_MS) {
  try {
    const payload = {
      data,
      expiresAt: Date.now() + ttlMs,
    };
    localStorage.setItem(`${CACHE_PREFIX}${key}`, JSON.stringify(payload));
  } catch {
    // Silently fail if storage is full.
  }
}

/**
 * Clear all cached data.
 */
export function clearCache() {
  try {
    const keys = Object.keys(localStorage).filter((key) => key.startsWith(CACHE_PREFIX));
    keys.forEach((key) => localStorage.removeItem(key));
  } catch {
    // Silently fail.
  }
}
