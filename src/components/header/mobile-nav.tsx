

import { INavLink } from "../../configs";
import ctl from "@netlify/classnames-template-literals";
import React from "react";
import {Link} from "react-router-dom";

 const MobileNav = ({
  navLinks,
}: {
  navLinks: INavLink[];
}) => {
  return (
    <ul className={mobileNavStyle}>
      {navLinks.map((link, index) => (
        <li key={`mobile_nav_link-${index}`}>
          <Link className="font-semibold" to={link.url}>
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const mobileNavStyle = ctl(
  `absolute inset-0 top-20 md:hidden bg-white h-max  flex flex-col items-center space-y-10 pb-5 shadow-md`,
);

export default MobileNav;
