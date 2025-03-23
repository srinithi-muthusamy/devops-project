// Reviews.js
import React from 'react';
import styles from './Reviews.module.css'; // Import the CSS module

const Reviews = () => {
  return (
    <section id="reviews" className={styles.reviews}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What Our Students Say</h2>
        <div className={styles.reviewGrid}>
          <div className={styles.reviewCard}>
            <h3>John</h3>
            <p>"The Introduction to Programming course was fantastic! The instructors were knowledgeable, and the hands-on projects helped solidify my understanding."</p>
          </div>
          <div className={styles.reviewCard}>
            <h3>Vinoth</h3>
            <p>"Advanced Data Science took my skills to the next level. The course was well-structured and covered all the essential topics."</p>
          </div>
          <div className={styles.reviewCard}>
            <h3>Gowtham</h3>
            <p>"Digital Marketing Strategies provided me with valuable insights into modern marketing techniques. Highly recommended for anyone looking to enhance their marketing skills."</p>
          </div>
          <div className={styles.reviewCard}>
            <h3>Michael</h3>
            <p>"Great experience with the e-learning platform! The user interface is intuitive, and the content is engaging and informative."</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
