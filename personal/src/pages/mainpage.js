import './mainpage.css';
import './textline.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import NavScrollExample from '../components/nav';

import React from "react";
// import profile from '../resources/profile.png';


// Components
import Footer from '../components/footer';
import Identity from '../components/identity';

// Image
import typhoon_picture from '../resources/ty_img.png'
import full_stack from '../resources/full-stack.png'

// Icon
// import { MdOutlineWeb } from 'react-icons/md';



function WebPage() {
    return (
        <div>        
            <div className="pageitemLineOne">
                <NavScrollExample />
            </div>

            <div id="pageitemLineTwo">
                <Identity />
            </div>

            <div id="pageitemLineThree" className='pageitemLine_content'>
                <div className="container col-12">
                    <div className='textcard'>
                        <div className='text_black text_title' id="">
                            Hello!
                        </div>

                        <div className='text_black' id="">
                            I am working at ATAL Technologies Limited as an assistant software engineer, where 
                            I participated varies projects, including lampposts with IoT and automated clearance system 
                            for cars and passengers. I am also owning and operating a non-profit organization 
                            called "Professional Meteorology" on Facebook and Instgram, where provides weather analytics 
                            services and develops technologies regards to meteorology in order to provide enhance services 
                            to the general public and possibly weather consulting services to specialized users or as business 
                            solution. I graduated from the Chinese University of Hong Kong (CUHK) with a master degree in 
                            Information Engineering which focus in machine learning and big data analytics.
                        </div>
                        
                        <div className='text_black section_title' id="">
                            Education
                        </div>
                        <div className='text_black' id="">
                            <strong>Graduate: </strong> MSc in Information Engineering @ CUHK (2022)
                        </div>
                        <div className='text_black' id="">
                            <strong>Undergraduate: </strong> BEng in Information Engineering @ CUHK (2020)
                        </div>

                        <div className='text_black' id="">
                            <strong>Course: </strong> Programming with severe languages and Data Structure, 
                            Cross-platform Software Engineering, Network Software Design, Programming, Networking Protocols and System, 
                            Web Development and Security, Database, OS, Machine Learning, Reinforcement Learning, Big data Systems and Information Processing (Spark and NoSQL system), 
                            Information Security and Privacy
                        </div>

                    </div>
                </div>
            </div>

            <div id="pageitemLineFour" className='pageitemLine_content'>
                <div className="container col-12" id="section_title_news">
                    News
                </div>
                <div className="container col-12 news_item">
                    <div className='textcard'>
                        <div className='text_black'>
                            <div><strong>xxth Feb, 2023</strong></div>
                            <div>
                                Hello everyone, my personal website is launched today!
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container col-12 news_item">
                    <div className='textcard'>
                        <div className='text_black'>
                            <div><strong>4th Jul, 2022</strong></div>
                            <div>
                                I have left the Intelligent Design Technology Limited, 
                                and joined ATAL Technologies Limited as an assistant software engineer.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="pageitemLineFive" className='pageitemLine_content'>
                <div className="container col-12" id="section_title_project">
                    Personal projects
                </div>
                <div className="container col-12 project_item">
                    <div className='textcard'>
                        <div className='text_black row'>
                            <div className='col-12 col-lg-2 order-md-first order-last'>
                                {/* TC image */}
                                <div className='img_box container' id="">
                                    <img class="project_item_img" id="typhoon_picture" src={typhoon_picture} alt="typhoon_picture" />
                                </div>
                            
                            </div>
                            <div className='project_item_info col-12 col-lg-10 order-md-first order-last'>
                                <div>
                                    <h5><strong>Estimate the intensity of tropical cyclone via Convolutional Neural Networks (for Professional Meteorology, in process)</strong></h5>
                                </div>
                                <div className='project_item_content'>
                                    This project aims to estimate the intensity of tropical cyclones (TC) by using convolutional neural networks (CNN). The methodology is to use satellite imagery (IR or BD image) of the TC to estimate the strength of the tropical cyclone without direct observation. This will apply to the forecast of tropical cyclones to provide an accurate intensity estimation on the system in order to better forecast the risk by tropical cyclones, especially in wind and storm surge. Currently, the concept has been proven, and the construction of a suitable model is in progress. I will release the code when it is finished publicly.
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="container col-12 project_item">
                    <div className='textcard'>
                        <div className='text_black row' >
                            <div className='col-12 col-lg-2 order-md-first order-last' >
                                <div className='img_box container' id="project_item_img_web_box">
                                    <img class="project_item_img" id="project_item_img_web" src={full_stack} alt="full_stack" />
                                </div>
                                
                            </div> 
                            <div className='project_item_info col-12 col-lg-10 order-md-first order-last'>
                                <div>
                                    <h5><strong>Full-stack platform for Professional Meteorology (for Professional Meteorology, in process)</strong></h5>
                                </div>
                                <div className='project_item_content'>
                                    This project aims to create a full-stack platform for Professional Meteorology, including but not limited to a public website, a management platform, a database, and a corresponding server for APIs on cloud services to provide services via website. The solution is under construction now.
                                </div>
                            </div>
                        </div>
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
