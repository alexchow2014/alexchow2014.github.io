import './icon.css';
import './iconYT.css'

import React from "react";

// Icon
import { FaYoutube } from 'react-icons/fa';

function IconYTbox() {
    return (
        <div className="container iconbox" id="iconytbox">
            <a href="https://www.youtube.com/watch?v=WaWRVsMFj9Q/" className='icon_a'>
                <h1 className="icon"><FaYoutube /></h1>
            </a>
        </div>
    );
}
  
export default IconYTbox;