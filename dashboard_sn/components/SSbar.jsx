"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

function SSbar() {
  const [isCollapsed, setisCollapsed] = useState(false);
  const toggleSidebar = () => {
    setisCollapsed((prev) => !prev);
  };

  return (
    <div className=" top-0  left-0 z-50 h-screen sticky">
      <div className="aboslute left-0 top-4 ">
        <button className="btn" onClick={toggleSidebar}>
          <MdKeyboardArrowLeft />
        </button>
      </div>
      <aside className="sidebar " data-collapse={isCollapsed}>
        <div className="sidebar__top">
          <Image
            width={80}
            height={80}
            className="sidebar__logo"
            src="/icon/logo.png"
            alt="logo"
          />
          <p className="sidebar__logo-name">Optimieum</p>
        </div>
        <ul className="sidebar__list">
          <li className="sidebar__item">
            <Link className="sidebar__link hover:bg-blue-700" href="/">
              <span className="sidebar__icon">
                <img
                  src="/icon/oil-pump.png"
                  width={20}
                  height={20}
                  alt="Oil Pump Icon"
                />
              </span>
              <span className="sidebar__name">Wells</span>
            </Link>
          </li>

          <li className="sidebar__item">
            <Link className="sidebar__link hover:bg-blue-700" href="/map">
              <span className="sidebar__icon">
                <img
                  src="/icon/map.png"
                  width={20}
                  height={20}
                  alt="Map Icon"
                />
              </span>
              <span className="sidebar__name">Map</span>
            </Link>
          </li>
          <li className="sidebar__item">
            <Link className="sidebar__link hover:bg-blue-700" href="/table">
              <span className="sidebar__icon">
                <img
                  src="/icon/map.png"
                  width={20}
                  height={20}
                  alt="Map Icon"
                />
              </span>
              <span className="sidebar__name">table</span>
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default SSbar;
