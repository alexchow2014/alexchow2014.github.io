import './mainpage.css';
import './textline.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import NavScrollExample from '../components/nav';

import React, { useState, useEffect } from "react";
import profile from '../resources/profile.png';

// Icon
import IconMailbox from '../components/iconMailbox';
import IconGithub from '../components/iconGithub';
import IconLinkedin from '../components/iconLinkedin';
import IconIG from '../components/iconIG';
// Components
import Footer from '../components/footer';

function WebPage() {
    return (
        <div>        
            <div id="pageitemLineOne">
                <NavScrollExample />
            </div>
            <div id="pageitemLineTwo">
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
                            {/* <img src={profile} alt="profile" /> */}
                                <img src="https://picsum.photos/250" alt="profile" />
                        </div>
                    </div>

                    <div id="boxTwo">
                        <IconMailbox />
                        <IconGithub />
                        <IconLinkedin />
                        <IconIG />
                    </div>
                </div>
            </div>
            <div id="pageitemLineThree" className='pageitemLine_content'>
                <div className="container col-12">
                    <div className='textcard'>
                        <div className='text_black'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    
                        <div className='text_black'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    
                        <div className='text_black'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    </div>
                </div>
            </div>


            <div id="pageitemLineFour" className='pageitemLine_content'>
                <div className="container col-12" id="section_title_news">
                    News
                </div>
                <div className="container col-12 news_item">
                    <div className='textcard'>
                        <div className='text_black'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    </div>
                </div>
                <div className="container col-12 news_item">
                    <div className='textcard'>
                        <div className='text_black'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    </div>
                </div>
            </div>

            <div id="pageitemLineFive" className='pageitemLine_content'>
                <div className="container col-12" id="section_title_project">
                    Projects
                </div>
                <div className="container col-12 project_item">
                    <div className='textcard'>
                        <div className='text_black'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    </div>
                </div>
                <div className="container col-12 project_item">
                    <div className='textcard'>
                        <div className='text_black'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</div>
                    </div>
                </div>
            </div>

            <div id="footer">
                <Footer />
            </div>

        </div> 

        
    );
}
  
export default WebPage;
