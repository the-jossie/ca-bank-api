import { PAGE_ROUTES } from './routes';

export interface INavLink {
  name: string;
  url: string;
  visibility: "protected" | "authenticated" | "public" | "unauthenticated" | "exclusive";
}

export const NAV_LINKS: INavLink[] = [
  {
    name: "Home",
    url: PAGE_ROUTES.DASHBOARD,
    visibility: "public",
  },
  {
    name: "Login",
    url: PAGE_ROUTES.LOGIN,
    visibility: "unauthenticated",
  },
  {
    name: "Sign Up",
    url: PAGE_ROUTES.SIGNUP,
    visibility: "unauthenticated",
  },
];
