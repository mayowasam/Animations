import React, { useLayoutEffect, useRef } from "react";
import { navAnim } from "../animations/animation";
import Menu from "../assets/menu.svg";

function Header() {
  const onceRef = useRef(false)

  useLayoutEffect(() => {
    if (onceRef.current)  return

    navAnim(".nav");
    onceRef.current = true

  });
  return (
    <header>
      <nav>
        <h1 className="nav">
          COR
          <span>e</span>
        </h1>
        <div className="menu">
          <img className="nav" src={Menu} alt="menu_icon" />
          <p className="nav">find your fit</p>
        </div>
        <div>
          <a className="nav" href="/">
            account
          </a>
          <a className="nav" href="/">
            cart (0)
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
