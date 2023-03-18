import React from 'react';
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

function NavBar() {
    return (
        <div>
        <nav>
            <div class="landing_nav-items">
                {/* <ul> */}
                    <ul>
                        <li style={{color: 'black'}}>
                       <a href='/'>HOME</a>
                        </li>
                        <li>
                        <a href='#'>ABOUT</a>  
                        </li>
                        <li>
                        <a href='#'>TEAM</a>
                        </li>
                    </ul>
                   {/* <li>HOME </li> 
                   <li>ABOUT</li> 
                   <li>TEAM</li> 
                </ul> */}
            </div>
        </nav>
        </div>
    )
}

export default NavBar;
