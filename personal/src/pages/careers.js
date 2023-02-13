import './careers.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import React from "react";

// Components
import Footer from '../components/footer';
import NavScrollExample from '../components/nav';
import TimelineBlock from '../components/timeline';

// Image
import clearance from '../resources/ts_box3_9.jpg'

function CareerPage() {
    return (
        <div>        
            <div className="pageitemLineOne">
                <NavScrollExample />
            </div>

            <div id="pageitemLineTwo">
                <div className="container col-12">
                    <div id="pageitemLineTwo_careeers_title">
                        Career
                    </div>
                    <div id="pageitemLineTwo_careeers_description">
                        I worked for years in different directions of software engineering.
                    </div>
                    
                </div>
            </div>

            <div className="pageitemLine_content" id="career_three">
                <div className="container col-12">
                    <div id="title_place">
                        Current Place
                    </div>

                    <div className="textcard">
                        <div className="row">
                            <div className="col-12 col-lg-4 order-md-first order-first" id="current_place_img">
                                <img id="clearance_picture" src={clearance} alt="profile" />
                                <div id="clearance_picture_credit">Credit: EMSD of HKSAR</div>
                            </div>
                            <div className="col-12 col-lg-8 order-md-last order-last fill-available" id="current_place_word">
                                <div id='career_three_jobtitle'>
                                    Assistant software engineer @ ATAL Technologies Limited
                                </div>
                                <div className='career_three_description'>
                                    As an assistant software engineer, I 
                                </div>
                                <div className='career_three_description_pt'>
                                    <li>
                                        maintain and upgrade the system of automated clearance system for cars and passengers, 
                                        which is using on the checkpoints of Hong Kong. This provides improved efficiency 
                                        to the management of the entry and exit.
                                    </li>
                                    <li>
                                        construct and set up the PCs for transmissing the data collected by sensors that 
                                        installed on the smart lamppost for the whole system.
                                    </li>
                                </div>

                                <div className='career_three_description' id='career_three_description_date'>
                                    From July 2022
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                
            </div>

            <div className="pageitemLine_content" id="career_four">
                <div className='container col-12' id="title_experience">
                    Past Experience
                </div>

                <div className='container col-12'>
                    <div id="timeline_block">
                        <TimelineBlock />
                    </div>
                </div>
                
            </div>

            <div id="footer">
                <Footer />
            </div>

        </div> 

        
    );
}
  
export default CareerPage;