import React from 'react'
import image from '../a-rodgers.png';
import Radium from 'radium'
import color from 'color';

const cardWrapper = {
    display: 'flex', 
    flexDirection: 'column', 
    backgroundColor: '#424242', 
    maxWidth: 300, 
    boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)'
};

// Help from Radium
const styles = {
    btn: {
        backgroundColor: '#f9bc03', 
        color: '#333', 
        border: 0, 
        borderRadius: 3, 
        fontSize: 14, 
        padding: '6px 12px',
        cursor: 'pointer',
        transition: "all ease-in 500ms",
        ':hover': {
            backgroundColor: color('#f9bc03').darken(0.2)
        }
    }
}

const Inline = props => (
    <div>
        <div style={cardWrapper}>
            <img src={image} alt="Aaron Rodgers" style={{width: '100%', borderTopLeftRadius: 5, borderTopRightRadius: 5}} />
            <div style={{padding: '10px 10px 20px 10px'}}>
                <h3 style={{marginTop: 0, marginBottom: 8}}>Boat</h3>
                <p style={{fontSize: 14, color: '#b9b9b9', marginTop: 0}}>If it weren't for Tom Brady, he'd be the GOAT. So for now he's the BOAT (Best of All Time).</p>
                <button style={styles.btn}>Learn More</button>
                <p className="extra-tag">Extra p tag</p>
            </div>
        </div>
        <p style={{fontSize: 14}}>Inline Styling w/ Radium</p>
    </div>
)

export default Radium(Inline)
