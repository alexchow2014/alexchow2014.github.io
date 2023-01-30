import './icon.css';
import './iconLinkedin.css';

import React from "react";

// Icon
import { AiFillLinkedin } from 'react-icons/ai';

function IconLinkedinbox() {
    return (
        <div className="container iconbox" id="iconmailbox">
            <a href="https://www.linkedin.com/in/alex-chow-tk-a36309252/">
                <h1 className="icon" id="mailbox"><AiFillLinkedin /></h1>
            </a>
        </div>
    );
}
  
export default IconLinkedinbox;