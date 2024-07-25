import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About ReDi School</h1>
      </header>
      <main className="about-content">
        <section className="about-section">
          <h2>What is ReDi School?</h2>
          <p>ReDi School offers free tech education to refugees and underserved communities, aiming to bridge the gap in the tech industry.</p>
        </section>
        <section className="about-section">
          <h2>Our Programs</h2>
          <ul>
            <li>Full-stack Web Development</li>
            <li>Frontend and Backend Workshops</li>
            <li>Career Coaching</li>
          </ul>
        </section>
        <section className="about-section">
          <h2>Get Involved</h2>
          <ul>
            <li>Volunteer</li>
            <li>Donate</li>
            <li>Partner with Us</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
