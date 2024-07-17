import React from 'react';
import { Link } from 'react-router-dom';
// import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
// import "react-vertical-timeline-component/style.min.css";

function HomePage() {
  return (
    <div className='sm:p-1 mt-2 flex flex-col w-full'>
        Hello
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