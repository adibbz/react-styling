import React from 'react';
import image from '../../a-rodgers.png';
import './Stylesheet.css';

const Stylesheet = props => (
  <div>
    <div className="wrapper">
      <img src={image} alt="card image" className="cardImage" />
      <div style={{ padding: 10, paddingBottom: 20 }}>
        <h3 style={{ marginTop: 0, marginBottom: 8 }}>Boat</h3>
        <p style={{ fontSize: 14, color: '#b9b9b9', marginTop: 0 }}>If it weren't for Tom Brady, he'd be the GOAT. So for now he's the BOAT (Best of All Time).</p>
        <button className="btn">Learn More</button>
      </div>
    </div>
    <p style={{ fontSize: 12 }}>CSS Stylesheet</p>
  </div>
)

export default Stylesheet