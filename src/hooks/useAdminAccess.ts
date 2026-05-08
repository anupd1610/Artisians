import { useEffect, useState } from "react";
import { isAdminIdentity } from "@/lib/sellerProfiles";

export function useAdminAccess(userId?: string, email?: string | null) {
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(Boolean(userId));

  useEffect(() => {
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
