import { r as reactExports } from "../_libs/react.mjs";
import { f as isAdminIdentity } from "./sellerProfiles-CxEQPkQ2.mjs";
function useAdminAccess(userId, email) {
  const [isAdmin, setIsAdmin] = reactExports.useState(false);
  const [loading, setLoading] = reactExports.useState(Boolean(userId));
  reactExports.useEffect(() => {
    let isMounted = true;
    async function checkAdmin() {
      if (!userId) {
        if (isMounted) {
          setIsAdmin(false);
          setLoading(false);
        }
        return;
      }
      setLoading(true);
      const result = await isAdminIdentity(userId, email);
      if (!isMounted) return;
      setIsAdmin(result);
      setLoading(false);
    }
    checkAdmin();
    return () => {
      isMounted = false;
    };
  }, [userId, email]);
  return { isAdmin, loading };
}
const DEFAULT_SITE_SETTINGS = {
  heroBadge: "Handcrafted with Heart",
  heroTitleLine1: "Crafted",
  heroTitleAccent: "Care",
  heroDescription: "Explore a world of handcrafted products that tell stories of tradition, innovation, and beauty. Each piece is a testament to skill, passion, and craftsmanship.",
  contactPhone: "+91-7559360218",
  contactEmail: "arpitrai924@gmail.com"
};
const SITE_SETTINGS_KEY = "artisan-echo-site-settings";
function getSiteSettings() {
  if (typeof window === "undefined") {
    return DEFAULT_SITE_SETTINGS;
  }
  try {
    const raw = window.localStorage.getItem(SITE_SETTINGS_KEY);
    if (!raw) return DEFAULT_SITE_SETTINGS;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_SITE_SETTINGS,
      ...parsed
    };
  } catch {
    return DEFAULT_SITE_SETTINGS;
  }
}
function saveSiteSettings(next) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(SITE_SETTINGS_KEY, JSON.stringify(next));
}
export {
  getSiteSettings as g,
  saveSiteSettings as s,
  useAdminAccess as u
};
