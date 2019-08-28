import React from "react";
import NavigationItems from "../NavigationItem/NavigationItem";
const toolbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Logo
        </a>
        <NavigationItems></NavigationItems>
      </div>
    </nav>
  );
};

export default toolbar;
