# Proposed Improvements: Urban Crest Realty (Business Template)

This document outlines potential enhancements for the website and the Google Sheets-powered admin dashboard to improve performance, user experience, and management efficiency.

## 1. Website (Client-Facing)

### UI/UX & Design
- ✅ **Scroll Animations**: CSS scroll-driven entrance animations for sections and cards as they appear in the viewport.
- ✅ **Image Lightbox**: Full-screen gallery viewer with keyboard navigation (←/→/Esc) and image counter overlay.
- ✅ **Skeleton Loaders**: Reusable shimmer components (`SkeletonHero`, `SkeletonCard`, `SkeletonSection`) for loading states.
- **Interactive Property Maps**: Integrate **Google Maps API** or **Leaflet** to show exact property locations and nearby amenities (schools, hospitals, transit). *(Requires API key)*
- **Enhanced Transitions**: Implement **Framer Motion** for smoother section entries and hover effects. *(Requires npm package)*

### Performance & SEO
- ✅ **SEO Meta Tags**: Dynamic `<title>` and `<meta description>` tags generated per page using a reusable `useDocumentMeta` hook.
- ✅ **Error Boundaries**: Global React Error Boundary wrapping the entire app for graceful crash handling.
- **Image Optimization**: Auto-convert uploaded images to **WebP** format and implement lazy loading to improve Core Web Vitals.
- **PWA Support**: Convert the site into a Progressive Web App (PWA) so users can "install" it on their mobile home screens.

---

## 2. Admin Dashboard (Google Apps Script / Sheets)

### Management Experience
- ✅ **Lead Export**: One-click CSV export button in the Admin Lead Inbox with properly escaped field data.
- **Real-Time Theme Preview**: Add a "Live Preview" mode in the Admin UI where changes to colors or logos can be seen instantly before saving.
- **Media Manager**: Instead of pasting URLs, implement a simple upload interface that integrates with Cloudinary or Google Drive. *(Requires API setup)*
- **Bulk Property Upload**: Allow admins to upload a CSV/Excel file to add dozens of properties at once instead of manual entry.

### Notifications
- **WhatsApp/Email Alerts**: Trigger an automated notification to the admin whenever a new lead is submitted. *(Requires external service)*
- **Auto-Reply**: Send an automated "Thank you" email or WhatsApp message to the client immediately after they submit an inquiry. *(Requires external service)*

---

## 3. Architecture & Reliability

### Data Layer
- ✅ **Caching Layer**: `localStorage` caching utility with TTL support (`getCachedData`, `setCachedData`, `clearCache`) to reduce redundant API calls.
- ✅ **Error Handling**: React Error Boundary with a polished fallback UI (error icon, message, refresh button).
- **Migration to Database**: For large-scale operations (1000+ properties), consider migrating from Google Sheets to **Supabase** or **Firebase**.

### Security
- **JWT Authentication**: Move from simple password strings to JSON Web Tokens (JWT) for more secure admin sessions.
- **Rate Limiting**: Implement basic rate limiting on the Apps Script side to prevent spam lead submissions.

---

## 4. New Business Features
- ✅ **Virtual Tours**: Support for embedding 360-degree YouTube or Matterport tours in property detail pages (auto-detects URL format).
- ✅ **Locality Scores**: Data-driven score bars for Safety, Connectivity, Lifestyle, and Investment on locality detail pages.
- ~~**Mortgage Calculator**~~: Excluded per user request.

---

## New Files Created
| File | Purpose |
|------|---------|
| `src/components/SkeletonLoader.jsx` | Reusable loading skeleton components |
| `src/components/ImageLightbox.jsx` | Full-screen image gallery viewer |
| `src/components/ErrorBoundary.jsx` | Global error boundary with fallback UI |
| `src/components/LocalityScores.jsx` | Animated score bars for localities |
| `src/components/property-detail/PropertyVirtualTour.jsx` | YouTube/Matterport embed component |
| `src/utils/seo.js` | Dynamic meta tag hook |
| `src/utils/cache.js` | localStorage caching with TTL |
| `src/utils/leadExport.js` | CSV export for admin leads |
| `src/utils/virtualTour.js` | URL detection for virtual tours |

## Modified Files
| File | Change |
|------|--------|
| `src/main.jsx` | Wrapped app in ErrorBoundary |
| `src/index.css` | Added scroll animation keyframes and styles |
| `src/pages/Home.jsx` | Added SEO meta tags |
| `src/pages/PropertyDetail.jsx` | Added SEO + Virtual Tour integration |
| `src/pages/LocalityDetail.jsx` | Added Locality Scores section |
| `src/pages/AdminLite.jsx` | Added Lead Export CSV button |
| `src/data/localities.js` | Added scores data to all localities |
| `src/components/property-detail/PropertyImageGallery.jsx` | Integrated lightbox with click-to-expand |
