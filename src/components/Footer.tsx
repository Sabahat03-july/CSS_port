import React from 'react';
import '../style/footer.css';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p className="footer-text">© 2024 Your Name. All Rights Reserved.</p>
        <div className="social-links">
          <Link href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_pr" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</Link>
          <Link href="https://github.com/Sabahat03-july" target="_blank" rel="noopener noreferrer" className="social-link">GitHub</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
