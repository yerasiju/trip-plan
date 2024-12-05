import React from "react";
import styles from "../styles/About.module.css";

const aboutSections = [
  {
    title: "Our Vision",
    text: "Empowering every traveler to feel confident and prepared by eliminating the stress of flying with clear, up-to-date information.",
    image: "src/assets/images/aa.jpg",
    alt: "Vision",
  },
  {
    title: "Our Mission",
    text: "To enhance your air travel with expert guidance, personalized support, and a vibrant traveler community.",
    image: "src/assets/images/aaa.jpg",
    alt: "Mission",
  },
  {
    image: "src/assets/images/a.jpg",
    title: "Our Work",
    text: `
      Guides: Everything from booking to in-flight comfort.<br/>
      Tips: Insider tricks to travel smarter.<br/>
      Community: Connect and share experiences.<br/>
      Support: Help when you need it.
    `,

    alt: "Work",
  },
];

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      {aboutSections.map((section, index) => (
        <div key={index} className={styles.aboutItem}>
          <div className={styles.aboutImage}>
            <img src={section.image} alt={section.alt} />
          </div>
          <div className={styles.aboutText}>
            <h3>{section.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: section.text }}></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
