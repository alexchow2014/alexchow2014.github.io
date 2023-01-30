import './icon.css';
import './iconIG.css';

import React from "react";

// Icon
import { FaInstagram } from 'react-icons/fa';

function IconIGbox() {
    return (
        <div className="container iconbox" id="iconmailbox">
            <a href="https://www.instagram.com/new_alexchow2014/">
                <h1 className="icon"><FaInstagram /></h1>
            </a>
        </div>
    );
}
  
export default IconIGbox;