import './icon.css';
import './iconMailbox.css';

import React from "react";

// Icon
import { HiOutlineMail } from 'react-icons/hi';

function IconMailbox() {
    return (
        <div className="container iconbox" id="iconmailbox">
            <a href="mailto:alexchow2014@gmail.com">
                <h1 className="icon" id="mailbox"><HiOutlineMail /></h1>
            </a>
        </div>
    );
}
  
export default IconMailbox;