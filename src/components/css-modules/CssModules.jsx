import React from 'react';
import image from '../../a-rodgers.png';
import styles from './CssModules.module.scss';

const CssModules = props => (
  <div>
    <div className="wrapper">
      <img src={image} alt="card image" className={styles.cardImage} />
      <div className={styles.textWrapper}>
        <h3 className={styles.h1}>The Dude</h3>
        <p className={styles.bodyText}>If it weren't for Tom Brady, he'd be the GOAT. So for now he's the BOAT (Best of All Time).</p>
        <button className={styles.btn}>Learn More</button>
      </div>
    </div>
    <p style={{ fontSize: 14 }}>CSS Modules</p>
  </div>
)

export default CssModules