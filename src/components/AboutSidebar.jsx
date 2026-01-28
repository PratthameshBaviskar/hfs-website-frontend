import { NavLink, useLocation } from "react-router-dom";
import "./AboutSidebar.css";

const AboutSidebar = () => {
  const { pathname, hash } = useLocation();

  const navItems = [
    { path: "/about", label: "About Us", end: true },
    { path: "/about/founder-trustees", label: "Our Founder & Trustees" },
    { path: "/about#objectives", label: "Objectives" },
    { path: "/about#mission", label: "Mission" },
  ];

  const getIsActive = (item) => {
    // 1. Handle "About Us" explicitly (Root about page, no hash)
    if (item.path === "/about") {
      return pathname === "/about" && hash === "";
    }

    // 2. Handle Hash Links (Objectives, Mission)
    if (item.path.includes("#")) {
      const [path, itemHash] = item.path.split("#");
      return pathname === path && hash === `#${itemHash}`;
    }

    // 3. Handle Standard Routes (Founder & Trustees)
    return pathname === item.path;
  };

  return (
    <aside className="about-sidebar-card">
      <nav className="about-sidebar-nav">
        <ul className="about-sidebar-list">
          {navItems.map((item) => {
            const isActive = getIsActive(item);

            return (
              <li key={item.path} className="about-sidebar-item">
                <NavLink
                  to={item.path}
                  end={item.end}
                  className={`about-sidebar-link ${isActive ? "active" : ""}`}
                >
                  <span className="about-sidebar-label">{item.label}</span>
                  {isActive && (
                    <i className="fas fa-chevron-right about-sidebar-icon"></i>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default AboutSidebar;
