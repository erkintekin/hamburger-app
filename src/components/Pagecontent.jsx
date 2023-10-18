import React from "react";
import Menu from "./Menu";
import Aboutsection from "./Aboutsection";
import Contact from "./Contact";

function Pagecontent() {
  return (
    <>
      {/* Page content */}
      <div className="w3-content" style={{ maxWidth: 1100 }}>
        <Menu />
        <Aboutsection />
        <Contact />
      </div>
    </>
  );
}

export default Pagecontent;
