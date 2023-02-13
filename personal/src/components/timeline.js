import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import './timeline.css';

// @mui package
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent, {timelineOppositeContentClasses,} from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
// import FastfoodIcon from '@mui/icons-material/Fastfood';
// import LaptopMacIcon from '@mui/icons-material/LaptopMac';
// import HotelIcon from '@mui/icons-material/Hotel';
// import RepeatIcon from '@mui/icons-material/Repeat';
// import Typography from '@mui/material/Typography';


import IconYTbox from './iconYT';

import React from "react";

function TimelineBlock() {
    return (
        <Timeline 
            // position="alternate"
            sx={{
                [`& .${timelineOppositeContentClasses.root}`]: {
                  flex: 0.0,
                },
              }}
        >
            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary">
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                        
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '25px', px: 2 }}>
                    {/* <Typography variant="h6" component="span">Eat</Typography>
                    <Typography>Because you need strength</Typography> */}
                    <div className="textcard">
                        <div className='timeline_title'>
                            Software Engineer @ Intelligent Design Technology Limited <IconYTbox />
                        </div>
                        <div className='timeline_details'>
                            <ul>
                                <li className='timeline_details_line'>
                                    Develop an full-stack application on their robot (android) platform to provide entertainment, news, communication and health training programme to elderly. 
                                </li>
                                <li className='timeline_details_line'>
                                    This product is already sold to multiple elderly organizations and receive positive feedback and additional orders.
                                </li>
                            </ul> 
                        </div>
                        <div className='timeline_details_time'>
                            From May 2021 to June 2022 (Intern and Full-time)
                        </div>
                    </div>
                </TimelineContent>
            </TimelineItem>

            <TimelineItem>
                <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    color="text.secondary">
                </TimelineOppositeContent>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                        
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ py: '25px', px: 2 }}>
                    {/* <Typography variant="h6" component="span">Eat</Typography>
                    <Typography>Because you need strength</Typography> */}
                    <div className="textcard">
                        <div className='timeline_title'>
                            Intern–Website Setup @ Lionrock Batteries Limited
                        </div>
                        <div className='timeline_details'>
                            <ul>
                                <li className='timeline_details_line'>
                                    Setup a website, which includes a frontend page for customers and a backend server and logistics platform, to provide a selling platform for their mask product. The webiste are still online for service now.
                                </li>
                            </ul> 
                        </div>
                        <div className='timeline_details_time'>
                            From July 2020 to August 2020
                        </div>
                    </div>
                </TimelineContent>
            </TimelineItem>
        
        </Timeline>
    );
}
  
export default TimelineBlock;