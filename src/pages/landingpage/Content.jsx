import React from 'react';
import Rocket from '../../../src/assets/Rocket.png';

function Content() {
    return (
        <div>
                <div className='landingtext'>
                    <h1>WELCOME TO</h1>
                    <h1>SLOT BOOKING</h1>
                    <h1>PORTAL OF IGDTUW</h1>
                </div>
                <div className="landingButtons">
                    <button className='landingStudent'><a href='/loginuser'>LOGIN</a></button>
                </div>
                {/* <figure>
                    <img src={Rocket} alt="Rocket"  className="landingRocket" />
                </figure> */}
        </div>
    )
}
export default Content
