import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import hfsLogo from "../assets/images/hfslogo.png";
import "./Navbar.css";

const MENU_ITEMS = [
  {
    id: "our-school",
    label: "Our School",
    hasDropdown: true,
    submenu: [
      { label: "About Us", path: "/about" },
      { label: "Our Founder & Trustees", path: "/about/founder-trustees" },
      { label: "Objectives", path: "/about#objectives" },
      { label: "Mission", path: "/about#mission" },
    ],
  },
  {
    id: "academics",
    label: "Academics",
    hasDropdown: true,
    submenu: [
      { label: "Pre Primary", path: "/academics/pre-primary" },
      { label: "Primary", path: "/academics/primary" },
      { label: "Secondary", path: "/academics/secondary" },
      { label: "ISC", path: "/academics/isc" },
    ],
  },
  {
    id: "general-info",
    label: "General Info",
    path: "/general-info",
  },
  {
    id: "contact",
    label: "Contact",
    path: "/contact",
  },
  {
    id: "media-room",
    label: "Media Room",
    path: "/media-room",
  },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine if at top or scrolled
      setScrolled(currentScrollY > 50);

      // Visibility logic: hide on scroll down, show on scroll up
      // Only hide if scroll is past a threshold (150px) and mobile menu is closed
      if (currentScrollY > lastScrollY && currentScrollY > 150 && !mobileOpen) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", scrollListener);
    return () => window.removeEventListener("scroll", scrollListener);
  }, [lastScrollY, mobileOpen]);

  const openDropdown = (id) => setActiveDropdown(id);
  const closeDropdown = () => setActiveDropdown(null);

  const handleDropdownClick = (e, item) => {
    if (!item.hasDropdown) return;
    e.preventDefault();
    setActiveDropdown((prev) => (prev === item.id ? null : item.id));
  };

  const handleNavMouseLeave = () => {
    setActiveDropdown(null);
  };

  const toggleMobile = () => {
    setMobileOpen((o) => !o);
    setMobileAccordion(null);
  };

  const toggleAccordion = (id) => {
    setMobileAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <div className={`utility-bar ${!visible ? "utility-bar--hidden" : ""}`}>
        <div className="utility-container">
          <div className="utility-links">
            <span className="utility-link">Quick Links ▼</span>
            <a href="https://hfspowai.in" className="utility-link">Login</a>
            <span className="utility-link">Contact Us</span>
            <span className="utility-btn">Inquire</span>
          </div>
        </div>
      </div>

      <header className={`navbar ${scrolled ? "scrolled" : ""} ${!visible ? "navbar--hidden" : ""}`}>
        <div className="navbar-container">
          <NavLink to="/" className="navbar-brand">
            <img src={hfsLogo} alt="Hiranandani Foundation School" className="navbar-logo" />
          </NavLink>

          <nav
            className="nav-main"
            onMouseLeave={handleNavMouseLeave}
            aria-label="Main navigation"
          >
            <ul className="nav-main__list">
              {MENU_ITEMS.map((item) => (
                <li
                  key={item.id}
                  className="nav-main__item"
                  onMouseEnter={() => item.hasDropdown && openDropdown(item.id)}
                >
                  {item.hasDropdown ? (
                    <>
                      <button
                        type="button"
                        className="nav-main__trigger"
                        onClick={(e) => handleDropdownClick(e, item)}
                        aria-expanded={activeDropdown === item.id}
                        aria-haspopup="true"
                        aria-controls={item.submenu.length ? `menu-${item.id}` : undefined}
                        id={item.submenu.length ? `trigger-${item.id}` : undefined}
                      >
                        <span className="nav-main__label">{item.label}</span>
                        <span className="nav-main__arrow" aria-hidden="true">▼</span>
                      </button>
                      {item.submenu.length > 0 && (
                        <div
                          id={`menu-${item.id}`}
                          className={`nav-main__dropdown ${activeDropdown === item.id ? "nav-main__dropdown--open" : ""}`}
                          role="menu"
                          aria-labelledby={`trigger-${item.id}`}
                        >
                          <ul className="nav-main__sublist">
                            {item.submenu.map((sub) => (
                              <li key={sub.path} role="none">
                                <NavLink
                                  to={sub.path}
                                  className="nav-main__sublink"
                                  role="menuitem"
                                  onClick={closeDropdown}
                                >
                                  {sub.label}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </>
                  ) : (
                    <NavLink to={item.path} className="nav-main__link">
                      {item.label}
                    </NavLink>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <button
            type="button"
            className="mobile-toggle"
            onClick={toggleMobile}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span className={`hamburger ${mobileOpen ? "active" : ""}`} />
          </button>
        </div>
      </header>

      <div
        className={`nav-drawer ${mobileOpen ? "nav-drawer--open" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <nav className="nav-drawer__nav" aria-label="Mobile navigation">
          <ul className="nav-drawer__list">
            {MENU_ITEMS.map((item) => (
              <li key={item.id} className="nav-drawer__item">
                {item.hasDropdown ? (
                  <>
                    <button
                      type="button"
                      className="nav-drawer__trigger"
                      onClick={() => toggleAccordion(item.id)}
                      aria-expanded={mobileAccordion === item.id}
                      aria-controls={item.submenu.length ? `drawer-${item.id}` : undefined}
                    >
                      <span className="nav-drawer__label">{item.label}</span>
                      <span className="nav-drawer__icon" aria-hidden="true">
                        {mobileAccordion === item.id ? "−" : "+"}
                      </span>
                    </button>
                    {item.submenu.length > 0 && (
                      <ul
                        id={`drawer-${item.id}`}
                        className={`nav-drawer__sublist ${mobileAccordion === item.id ? "nav-drawer__sublist--open" : ""}`}
                      >
                        {item.submenu.map((sub) => (
                          <li key={sub.path}>
                            <NavLink
                              to={sub.path}
                              className="nav-drawer__sublink"
                              onClick={toggleMobile}
                            >
                              {sub.label}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <NavLink
                    to={item.path}
                    className="nav-drawer__link"
                    onClick={toggleMobile}
                  >
                    {item.label}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
