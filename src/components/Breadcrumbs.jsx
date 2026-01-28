import React from 'react';
import { useLocation, NavLink } from 'react-router-dom';

const Breadcrumbs = ({ variant }) => {
    const location = useLocation();
    const pathname = location.pathname;

    // Determine if we're in the "Our School" section
    const ourSchoolPaths = ['/about', '/about/founder-trustees', '/founder-trustees', '/vision-mission-values', '/objectives'];

    const isOurSchoolSection = ourSchoolPaths.includes(pathname);

    // Don't show breadcrumbs on the home page or academics pages (which self-handle breadcrumbs)
    if (pathname === '/' || pathname === '/campus' || pathname.startsWith('/academics')) {
        return null;
    }

    // If it's an About page, only show if a variant is explicitly provided
    if (isOurSchoolSection && !variant) {
        return null;
    }

    // Mapping of paths to display names
    const breadcrumbMap = {
        '/about': 'About Us',
        '/founder-trustees': 'Our Founder & Trustees',
        '/vision-mission-values': 'Vision, Mission & Values',
        '/objectives': 'Objectives',
        '/academics': 'Academics',
        '/general-info': 'General Info',
        '/contact': 'Contact',
        '/media-room': 'Media Room'
    };


    return (
        <nav className={`breadcrumbs ${variant === 'hero' ? 'breadcrumbs-hero' : ''}`} aria-label="breadcrumb">
            <div className={variant === 'hero' ? 'hero-breadcrumbs-inner' : 'section-container'}>
                <ul className="breadcrumb-list">
                    <li className="breadcrumb-item">
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <span className="breadcrumb-separator">»</span>

                    {isOurSchoolSection && pathname !== '/about' && (
                        <>
                            <li className="breadcrumb-item">
                                <NavLink to="/about">Our School</NavLink>
                            </li>
                            <span className="breadcrumb-separator">»</span>
                        </>
                    )}

                    <li className="breadcrumb-item active">
                        {breadcrumbMap[pathname] || pathname.split('/').pop().replace('-', ' ')}
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Breadcrumbs;
