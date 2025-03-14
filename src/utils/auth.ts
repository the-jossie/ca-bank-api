import { INavLink, NAV_LINKS } from "../configs";
import { UserRole } from "../types";

export const computeUserRole = (auth: { token?: string; role?: string }): UserRole => {
    if (auth.token && auth.role === "ROLE_ADMIN") {
      return "admin";
    } else if (auth.token) {
      return "user";
    } else {
      return "guest";
    }
  }

export  const computeNavLinksToShow = (auth: { token?: string; role?: string }): INavLink[] => {
    const userType = computeUserRole(auth);

  return NAV_LINKS.filter((link) => {
    if (userType === "admin") {
      return ["protected", "authenticated", "public"].includes(link.visibility);
    } else if (userType === "user") {
      return ["authenticated", "public", "exclusive"].includes(link.visibility);
    } else if (userType === "guest") {
      return ["public", "unauthenticated"].includes(link.visibility);
    }

    return false;
  });
}
