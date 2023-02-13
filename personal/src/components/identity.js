import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import './identity.css';

import React from "react";

import Profile from '../resources/profile.png';
// Icon
import IconMailbox from '../components/iconMailbox';
import IconGithub from '../components/iconGithub';
import IconLinkedin from '../components/iconLinkedin';
import IconIG from '../components/iconIG';

function Identity() {
    return (
        <div className="container col-12">
        <div id="boxOne" className="row">
            <div className="boxOneitem topmargin 
                col-12 col-md-6 order-md-first order-last" id="boxOneNII">
                <div className="col-12" id="Name">
                    Chow Tsz Kui, Alex
                </div>
                <div className="col-12 Identity">
                    Software Engineer, Amateur Weatherman
                </div>
                <div className="col-12 Identity">
                    Cyclist, Live-long Learner
                </div>
            </div>
            <div className="boxOneitem  
                col-12 col-md-6 order-md-last order-first">
                <img id="profile_img" src={Profile} alt="profile" />
            </div>
        </div>

        <div id="boxTwo">
            <IconMailbox />
            <IconGithub />
            <IconLinkedin />
            <IconIG />
        </div>
        </div>
    );
}
  
export default Identity;

