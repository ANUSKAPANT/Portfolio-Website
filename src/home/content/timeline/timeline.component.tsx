import './timeline.component.scss';
import timelineData from '../../../assets/timeline.json';
import TimelineItem from "./timelineitem/timelineitem.component";
import SectionHeaderComponent from "../sectionheader/sectionheader.component";


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