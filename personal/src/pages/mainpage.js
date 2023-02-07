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
                            I am working at ATAL Technologies Limited as an assistant software enginner, where 
                            I participated varies projects, including lampposts with IoT and Automated Clearance System 
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
