// Services.js
import React from 'react';
import styles from './Services.module.css';
import '../Styles/Styles.module.css'

const Services = () => {
    return (
        <section id='services' className={styles.services}>
            <h2 className={styles.title}>SERVICES</h2>
            <div className={styles.serviceItems}>
                <div className={`${styles.serviceItem} ${styles.animate}`}>
                    <div className={styles.icon}>🎨</div>
                    <h3 className={styles.heading}>Design</h3>
                    <p className={styles.description}>Web Design . Logo Design . UI/UX</p>
                </div>
                <div className={`${styles.serviceItem} ${styles.animate}`}>
                    <div className={styles.icon}>💡</div>
                    <h3 className={styles.heading}>Entrepreneurship</h3>
                    <p className={styles.description}>One Project . One Award</p>
                </div>
                <div className={`${styles.serviceItem} ${styles.animate}`}>
                    <div className={styles.icon}>💻</div>
                    <h3 className={styles.heading}>Development</h3>
                    <p className={styles.description}>
                        Websites . Web Applications . CMS . Management Systems . Mobile Applications
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Services;
