import React from 'react';
// import { Link } from 'react-router-dom';
// import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";
import room1 from '../assets/pictures/room1.jpg';
import manali from '../assets/pictures/manali1.jpg';    
import shimla from '../assets/pictures/shimla1.jpg';
import bonfire from '../assets/pictures/bonfire1.jpg';
// import diwali from '../assets/pictures/diwali1.jpeg';
import speaker from '../assets/pictures/speaker1.jpg';
import stadium from '../assets/pictures/cricket-stadium1.jpg';
import cycletrack1 from '../assets/pictures/cycletrack1.jpg';
import cycletrack2 from '../assets/pictures/cycletrack2.jpg';
import warangalgate from '../assets/pictures/warangalgate1.jpg';
import hungry from '../assets/pictures/hungry.jpeg';
import bball from '../assets/pictures/basketball1.jpeg';

function HomePage() {
  return (
    <div className='mt-2 flex flex-col max-sm:w-[90%] lg:w-full mx-auto'>
        <p className='lg:text-6xl lg:ml-64 lg:py-8 lg:w-[50%] max-sm:text-3xl'>Hi, I'm a software engineer and have a passion for music, basketball and photography.</p>
        <p className='lg:text-3xl lg:ml-64 mb-8 pl-1'><i>Inspired by big dreams and dank memes.</i></p>
        <div className='flex flex-col justify-evenly'>
            <img src={room1} className='py-1' alt="Room" />
            <div className='flex lg:flex-row max-sm:flex-col'>
                <img src={manali} className='lg:w-[50%] lg:h-[50%] lg:pr-1 py-1' alt="Manali" />
                <img src={shimla} className='lg:w-[50%] lg:h-[50%] lg:pl-1 py-1' alt="Shimla" />
            </div>
            <div className='flex lg:flex-row max-sm:flex-col justify-evenly'>
                <img src={cycletrack1} className='lg:w-[33%] lg:h-[33%] lg:pr-1 py-1' alt="Cycling Track" />
                <img src={cycletrack2} className='lg:w-[33%] lg:h-[33%] py-1' alt="Cycling Track" />
                <img src={warangalgate} className='lg:w-[33%] lg:h-[33%] lg:pl-1 py-1' alt="Warangal Gate Mock" />
            </div>
            <div className='flex lg:flex-row max-sm:flex-col'>
                <img src={bonfire} className='lg:w-[50%] lg:h-[50%] lg:pr-1 py-1' alt="Bonfire" />
                <img src={speaker} className='lg:w-[50%] lg:h-[915px] lg:pr-1 py-1' alt="Me speaking" />
            </div>
            <div className='flex lg:flex-row max-sm:flex-col'>
                <img src={bball} className='lg:w-[50%] lg:h-[50%] lg:pr-1 py-1' alt="Basketball" />
                <img src={stadium} className='lg:w-[50%] lg:h-[545px] lg:pr-1 py-1' alt="Cricket Stadium" />
            </div>
            <img src={hungry} className='py-2' alt="Stay Hungry Stay Foolish" />
        </div>
    </div>
  )
}

export default HomePage;

/*

<div class="relative p-5">
                        <div class="mt-40">
                            <div class="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0">
                                <div class="p-2">
                                    <p class="text-lg text-white">
                                        Welcome to GeeksforGeeks.
                                    </p>
                                    <button class="px-4 py-2 text-sm 
                                            text-white bg-green-600">
                                        Visit site
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>


<VerticalTimeline>
                {timelineContent.map((element) => {
                    let isWorkIcon = element.icon === "work";
                    let showButton =
                        element.buttonText !== undefined &&
                        element.buttonText !== null &&
                        element.buttonText !== "";

                    return (
                        <VerticalTimelineElement
                            key={element.key}
                            date={element.date}
                            dateClassName="date"
                            //  iconstyle={workIconStyles}
                            //   icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">{element.title}</h3>
                            <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                            <p id="description">{element.description}</p>
                            {showButton && ( 
                                <a className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`} href="/">{element.buttonText}</a>
                            )}
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
*/