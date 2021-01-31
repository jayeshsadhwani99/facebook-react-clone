import React from 'react';
import './Widgets.css';

function Widgets() {
    return (
        <div className='widgets'>
            <iframe 
                title="Facebook Feed"
                src="https://www.facebook.com/jayesh.sadhwani.75/posts/1978637678944846"
                width='340'
                height='100%'
                style={{border: 'none', overflow:'hidden'}}
                scrolling='no'
                framevorder='0'
                allowTransparency='true'
                allow='encrypted-media'
            ></iframe>
        </div>
    )
}

export default Widgets
