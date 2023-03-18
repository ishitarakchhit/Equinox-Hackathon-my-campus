import React from 'react';

function Content() {
    return (
        <div>
                <div className='landingtext'>
                    <h1>WELCOME TO</h1>
                    <h1>ACADEMIC RECORD</h1>
                    <h1>PORTAL OF IGDTUW . . .</h1>
                </div>
                <div className="landingButtons">
                    <button className='landingStudent'><a href='loginuser'>LOGIN</a></button>
                </div>
                {/* <figure>
                    <img src={Rocket} alt="Rocket"  className="landingRocket" />
                </figure> */}
        </div>
    )
}
export default Content
