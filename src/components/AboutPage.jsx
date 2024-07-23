import React from 'react';
import './AboutPage.css'; // Ensure this file is created for custom styles

const AboutPage = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About ReDi School</h1>
      </header>
      <main className="about-content">
        <section className="about-section">
          <h2>What is ReDi School?</h2>
          <p>
            ReDi School of Digital Integration is a non-profit organization that provides free technology education to refugees and underserved communities. Our mission is to empower individuals by providing them with the skills and knowledge needed to thrive in the digital world.
          </p>
          <p>
            We offer a range of programs including coding bootcamps, workshops, and mentorship opportunities. Our goal is to bridge the gap between the tech industry and underrepresented groups, fostering a more inclusive and diverse technology sector.
          </p>
        </section>
        <section className="about-section">
          <h2>Our Programs</h2>
          <ul>
            <li>Full-stack Web Development Bootcamp</li>
            <li>Frontend and Backend Development Workshops</li>
            <li>Career Coaching and Mentorship</li>
            <li>Community Events and Networking Opportunities</li>
          </ul>
        </section>
        <section className="about-section">
          <h2>Get Involved</h2>
          <p>
            If you’re interested in supporting our mission, there are many ways to get involved:
          </p>
          <ul>
            <li>Volunteer as a mentor or instructor</li>
            <li>Donate to support our programs</li>
            <li>Partner with us to offer internships and job placements</li>
          </ul>
          <p>
            For more information, visit our website or contact us at <a href="mailto:info@redischool.org">info@redischool.org</a>.
          </p>
        </section>
      </main>
      <footer className="about-footer">
        <p>&copy; 2024 ReDi School. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
