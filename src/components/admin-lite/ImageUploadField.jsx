import { getMediaSurfaceStyle, normalizeImageUrl } from "../../utils/media";

export function ImageUploadField({
  value,
  onChange,
  label = "Image",
  helperText = "",
}) {
  function handleBlur() {
    onChange(normalizeImageUrl(value));
  }

  return (
    <div className="space-y-3">
      <div
        className="overflow-hidden rounded-[22px] border border-[var(--color-border)] bg-[var(--color-surface-muted)]"
      >
        <div className="h-36 w-full" style={getMediaSurfaceStyle(value)} />
      </div>

      <label className="block space-y-2">
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-text-soft)]">
          {label} link
        </span>
        <input
          type="url"
          value={value ?? ""}
          onChange={(event) => onChange(event.target.value)}
          onBlur={handleBlur}
          className="form-control"
          placeholder="Paste image link or Google Drive share link"
        />
      </label>

      {helperText ? (
        <p className="text-sm leading-7 text-[var(--color-text-soft)]">{helperText}</p>
      ) : null}

      <p className="text-xs leading-6 text-[var(--color-text-soft)]">
        Accepts direct image URLs and standard Google Drive share links. Drive links are converted automatically.
      </p>
    </div>
  );
}
