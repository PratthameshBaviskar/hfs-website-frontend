import React from "react";
import { NavLink } from "react-router-dom";
import "./FounderSidebar.css";

const FounderSidebar = () => {
    const navItems = [
        { path: "/about", label: "About Us", end: true },
        { path: "/about/founder-trustees", label: "Our Founder & Trustees" },
        { path: "/about/principals-message", label: "Principal’s Message" },
        { path: "/about/objectives", label: "Objectives" },
        { path: "/about/mission", label: "Mission" },
    ];

    return (
        <aside className="founder-sidebar-card">
            <nav className="founder-sidebar-nav">
                <ul className="founder-sidebar-list">
                    {navItems.map((item) => (
                        <li key={item.path} className="founder-sidebar-item">
                            <NavLink
                                to={item.path}
                                end={item.end}
                                className={({ isActive }) =>
                                    `founder-sidebar-link ${isActive ? "active" : ""}`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <span className="founder-sidebar-label">{item.label}</span>
                                        {isActive && (
                                            <i className="fas fa-chevron-right founder-sidebar-icon"></i>
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

export default FounderSidebar;
