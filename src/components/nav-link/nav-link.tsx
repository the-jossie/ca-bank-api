

/*

NavLink: by default the active class is added when the href matches the start of the URL pathname.
Use the exact property to change it to an exact match with the whole URL pathname.

*/
import React from "react";
import {Link, useLocation} from "react-router-dom";

interface NavLinkProps {
  href: string;
  exact: boolean;
  className: string;
  children: React.ReactNode;
}

export const NavLink = ({ href, exact, children, ...props }: NavLinkProps) => {
  const { pathname } = useLocation();
  const active = " border-b border-primary";
  const isActive = exact ? pathname === href : pathname.startsWith(href);

  if (isActive) {
    props.className += active;
  }

  return (
    <Link to={href} {...props}>
      {children}
    </Link>
  );
};
