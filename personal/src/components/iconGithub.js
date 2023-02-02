import './icon.css';
import './iconGithub.css';

import React from "react";

// Icon
import { BsGithub } from 'react-icons/bs';

function IconGithub() {
    return (
        <div className="container iconbox" id="icongithub">
            <a href="https://github.com/alexchow2014" className='icon_a'>
                <h1 className="icon" id='github'><BsGithub /></h1>
            </a>
        </div>
    );
}
  
export default IconGithub;