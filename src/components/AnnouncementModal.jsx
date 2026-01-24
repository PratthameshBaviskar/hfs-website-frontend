import React, { useState, useEffect, useRef } from 'react';
import '../styles/AnnouncementModal.css';

const AnnouncementModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(() => {
    // Check sessionStorage to see if the announcement has been shown this session
    return !sessionStorage.getItem('hasSeenAnnouncement');
  });
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (shouldRender) {
      // Small timeout to allow render before adding 'active' class for animation
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [shouldRender]);

  useEffect(() => {
    if (isOpen) {
      // Focus trap logic could go here, for now simpler focus management
      // Focus the close button or modal container when opened
      if (closeButtonRef.current) {
        closeButtonRef.current.focus();
      }
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    // Wait for animation to finish before unmounting
    setTimeout(() => {
      setShouldRender(false);
      // Set flag in sessionStorage
      sessionStorage.setItem('hasSeenAnnouncement', 'true');
    }, 600); // Matches new CSS transition duration
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleClose();
    }
    // Simple focus trap: prevent Tabbing out (simplified version)
    if (e.key === 'Tab' && modalRef.current) {
      // This is a very basic trap that just keeps focus within the modal container if strictly implemented
      // For this task, strict focus trap might arguably be overkill if not using a library, 
      // but we'll stick to basic ESC closing and initial focus.
    }
  };

  if (!shouldRender) return null;

  return (
    <div
      className={`announcement-overlay ${isOpen ? 'active' : ''}`}
      onClick={handleClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="announcement-title"
    >
      <div
        className="announcement-modal"
        onClick={(e) => e.stopPropagation()} // Prevent click from closing when clicking inside modal
        ref={modalRef}
      >
        <div className="announcement-header">
          <h2 id="announcement-title" className="announcement-title">ANNOUNCEMENTS</h2>
          <button
            className="close-button"
            onClick={handleClose}
            ref={closeButtonRef}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        <div className="announcement-body">
          <p>The Jr. KG admissions for the academic year 2026–2027 are now closed.</p>
          <p>We do not have any vacancies from Sr. KG to Grade IX for the academic year 2026–2027.</p>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementModal;
