import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white z-1000">
      <div className="p-2">
        <img src={require("../assets/logo.png")} alt="Logo" className="h-12" />
      </div>
    </header>
  );
};

export default Header;
