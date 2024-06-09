import './timeline.css';
import timelineData from '../../../assets/timeline.json';
import TimelineItem from "./timelineitem/timelineitem";
import SectionHeaderComponent from "../sectionheader/sectionheader";
import * as React from "react";


const TimelineComponent = () => {
    return(
        <>
            <SectionHeaderComponent sectionName={'Timeline'}/>
            <div id="timeline" className="timeline-container">
                {timelineData.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        </>
    );
}

export default TimelineComponent;