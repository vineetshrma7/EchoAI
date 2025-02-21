import React from "react";
import './App.css';
import LoginLogoMenu from './LoginLogoMenu'


function HeaderSection() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="header-left">
            <button className="icon-button">☰</button>
            <h1 className="header-title">ChatGPT</h1>
          </div>
          <LoginLogoMenu />
        </div>
      </header>
    </>
  );
}

export default HeaderSection
