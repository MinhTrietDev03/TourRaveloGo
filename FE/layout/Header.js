"use client";
import useClickOutside from "@/utility/useClickOutside";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import hook để lấy đường dẫn hiện tại
import { Fragment, useState } from "react";
import { Accordion } from "react-bootstrap";

const Menu = () => {
  const pathname = usePathname(); // Lấy đường dẫn hiện tại (ví dụ: /about hoặc /tour-sidebar)

  // Hàm kiểm tra xem link có đang active hay không
  const isActive = (path) => pathname === path;

  return (
    <nav className="main-menu navbar-expand-lg">
      <Accordion>
        <div className="navbar-header">
          <div className="mobile-logo">
            <Link href="/">
              <img src="assets/images/logos/logo.png" alt="Logo" title="Logo" />
            </Link>
          </div>
          <Accordion.Toggle as={"button"} type="button" className="navbar-toggle" eventKey="collapse">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </Accordion.Toggle>
        </div>
        <Accordion.Collapse eventKey="collapse" className="navbar-collapse clearfix">
          <ul className="navigation clearfix">
            {/* Logic: Nếu đường dẫn khớp với href, thêm class "current" */}
            <li className={isActive("/") ? "current" : ""}>
                <Link href="/">Home</Link>
            </li>
            <li className={isActive("/about") ? "current" : ""}>
                <Link href="/about">About</Link>
            </li>
            <li className={isActive("/tour-sidebar") ? "current" : ""}>
                <Link href="/tour-sidebar">Tours</Link>
            </li>
            <li className={isActive("/destination") ? "current" : ""}>
                <Link href="/destination">Destinations</Link>
            </li>
            <li className={isActive("/pricing") ? "current" : ""}>
                <Link href="/pricing">Services</Link>
            </li>
          </ul>
        </Accordion.Collapse>
      </Accordion>
    </nav>
  );
};

const Header = ({ header }) => {
  const sidebarClick = () => document.querySelector("body").classList.toggle("side-content-visible");

  switch (header) {
    case 1: return <Header1 sidebarClick={sidebarClick} />;
    case 2: return <Header2 sidebarClick={sidebarClick} />;
    default: return <Header3 sidebarClick={sidebarClick} />;
  }
};
export default Header;

// --- HEADER 1 (Giữ nguyên cấu trúc của bạn) ---
const Header1 = ({ sidebarClick }) => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const domNode = useClickOutside(() => { setToggleSearch(false); });

  return (
    <Fragment>
      <header className="main-header header-one white-menu menu-absolute fixed-header">
        <div className="header-upper py-30 rpy-0">
          <div className="container-fluid clearfix">
            <div className="header-inner rel d-flex align-items-center">
              <div className="logo-outer">
                <div className="logo">
                  <Link href="/"><img src="assets/images/logos/logo.png" alt="Logo" /></Link>
                </div>
              </div>
              <div className="nav-outer mx-lg-auto ps-xxl-5 clearfix">
                <Menu />
              </div>
              <div className="nav-search">
                <button className="far fa-search" onClick={() => setToggleSearch(!toggleSearch)} />
                <form action="#" className={toggleSearch ? "" : "hide"} ref={domNode}>
                  <input type="text" placeholder="Search" className="searchbox" required />
                  <button type="submit" className="searchbutton far fa-search" />
                </form>
              </div>
              <div className="menu-btns py-10">
                <Link href="contact" className="theme-btn style-two bgc-secondary">
                  <span data-hover="Book Now">Book Now</span>
                  <i className="fal fa-arrow-right" />
                </Link>
                <div className="menu-sidebar">
                  <Link href="/login" className="bg-transparent" style={{ fontSize: '24px', marginLeft: '20px', color: 'inherit' }}>
                    <i className="far fa-user-circle" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

// --- HEADER 2 ---
const Header2 = ({ sidebarClick }) => {
  return (
    <Fragment>
      <header className="main-header header-two">
        <div className="header-upper">
          <div className="container-fluid clearfix">
            <div className="header-inner rel d-flex align-items-center justify-content-between">
              <div className="logo-outer d-block">
                <div className="logo">
                  <Link href="/"><img src="assets/images/logos/logo-two.png" alt="Logo" /></Link>
                </div>
              </div>
              <div className="menu-btns py-10">
                <Link href="/login" style={{ fontSize: '24px', color: '#fff' }}>
                  <i className="far fa-user" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

// --- HEADER 3 ---
const Header3 = ({ sidebarClick }) => {
  return (
    <Fragment>
      <header className="main-header header-one">
        <div className="header-upper bg-white py-30 rpy-0">
          <div className="container-fluid clearfix">
            <div className="header-inner rel d-flex align-items-center">
              <div className="logo-outer">
                <div className="logo">
                  <Link href="/"><img src="assets/images/logos/logo-two.png" alt="Logo" /></Link>
                </div>
              </div>
              <div className="nav-outer mx-lg-auto ps-xxl-5 clearfix">
                <Menu />
              </div>
              <div className="menu-btns py-10">
                <Link href="contact" className="theme-btn style-two bgc-secondary">
                  <span data-hover="Book Now">Book Now</span>
                  <i className="fal fa-arrow-right" />
                </Link>
                <div className="menu-sidebar">
                  <Link href="/login" style={{ fontSize: '36px', marginLeft: '20px', color: '#333' }}>
                    <i className="far fa-user-circle" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};