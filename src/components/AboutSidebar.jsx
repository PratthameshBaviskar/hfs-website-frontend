import { NavLink } from "react-router-dom";
import "./AboutSidebar.css";

const AboutSidebar = () => {
  const navItems = [
    { path: "/about", label: "About Us", end: true },
    { path: "/about/founder-trustees", label: "Our Founder & Trustees" },
    { path: "/about/principals-message", label: "Principal’s Message" },
    { path: "/about/objectives", label: "Objectives" },
    { path: "/about/mission", label: "Mission" },
  ];

  return (
    <aside className="about-sidebar-card">
      <nav className="about-sidebar-nav">
        <ul className="about-sidebar-list">
          {navItems.map((item) => (
            <li key={item.path} className="about-sidebar-item">
              <NavLink
                to={item.path}
                end={item.end}
                className={({ isActive }) =>
                  `about-sidebar-link ${isActive ? "active" : ""}`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="about-sidebar-label">{item.label}</span>
                    {isActive && (
                      <i className="fas fa-chevron-right about-sidebar-icon"></i>
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AboutSidebar;
