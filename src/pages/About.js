import React from 'react';
import MultiplePizzas from '../assets/multiplePizzas.jpeg';
import '../styles/About.css';

function About() {
    return (
        <>
            <div className='about'>
                <div className='aboutTop' style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
                <div className='aboutBottom'>
                    <h1>About Us</h1>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed vel quaerat perferendis maxime, neque laudantium optio, ipsam veritatis perspiciatis dolores illo mollitia aliquid? Perferendis sed totam architecto aperiam enim debitis quos officiis ex eaque corrupti. Soluta aliquam et reiciendis alias sit minima. Tenetur animi, amet fugit doloribus ullam, quo mollitia, saepe ut nulla natus enim quae sed. Voluptate error, velit sequi quis quidem culpa odit impedit laudantium soluta officiis rerum!</p>
                </div>
            </div>
        </>
    )
}

export default About
