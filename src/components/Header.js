import React from "react";

const Header = () => {
  return (
    <header className="fixed top-3 left-2 w-full z-1000">
      <div className="p-2">
        <img src={require("../assets/logo.png")} alt="Logo" className="h-10" />
      </div>
    </header>
  );
};

export default Header;
