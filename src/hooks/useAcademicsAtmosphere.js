import { useEffect } from 'react';

/**
 * useAcademicsAtmosphere
 * Handles scroll-responsive variable and Intersection Observer for Academics pages.
 */
export const useAcademicsAtmosphere = (wrapperRef) => {
    useEffect(() => {
        const wrapper = wrapperRef.current;
        if (!wrapper) return;

        // 1. Handle Scroll-Responsive Depth Field
        const handleScroll = () => {
            const scrollY = window.scrollY;
            wrapper.style.setProperty('--scroll-y', scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        // 2. Handle Scroll Transition Polish (Intersection Observer)
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const sections = wrapper.querySelectorAll('.reveal-on-scroll');
        sections.forEach(section => observer.observe(section));

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, [wrapperRef]);
};

export default useAcademicsAtmosphere;
