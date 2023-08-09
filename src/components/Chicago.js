import React from 'react'
import '../App.css';
import Chefa from '../assests/MarioAdrianA.jpg';
import Chefb from '../assests/Mario and Adrian b.jpg';


function Chicago() {
    return (
        <div className='chicago-section'>
                         <div className="about-desc" >
                            <h1>Little Lemon</h1>
                             <h2 className='city'>Chicago</h2>
                            <p className='description'>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit, 
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in 
                                voluptate velit icia deserunt mollit anim id est laborum. </p>
                        </div>
                        <div className='chef-image'>
                            <img src={Chefa} className='chefa' alt='chef imaga' />
                            <img src={Chefb} alt='chef imagb' />
                        </div>
     </div>
     )
}

export default Chicago