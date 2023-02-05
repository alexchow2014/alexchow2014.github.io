import './careers.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import React from "react";

// Components
import Footer from '../components/footer';
import NavScrollExample from '../components/nav';
import TimelineBlock from '../components/timeline';


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

            <div className="pageitemLine_content" id="">
                <div className="container col-12">
                    <div id="title_place">
                        Current Place
                    </div>

                    <div className="textcard">
                        <div className="row">
                            <div className="col-12 col-lg-4 order-md-first order-first" id="current_place_img">
                                <img src="https://picsum.photos/250" alt="profile" />
                            </div>
                            <div className="col-12 col-lg-8 order-md-last order-last fill-available" id="current_place_word">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </div>
                        </div>

                    </div>
                </div>

                
            </div>

            <div className="pageitemLine_content" id="">
                <div className='container col-12'>
                    <TimelineBlock />
                </div>
                
            </div>

            <div id="footer">
                <Footer />
            </div>

        </div> 

        
    );
}
  
export default CareerPage;