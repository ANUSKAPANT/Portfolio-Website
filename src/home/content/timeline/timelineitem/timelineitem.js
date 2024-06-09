import './timelineitem.css';
import * as React from "react";

const TimelineItem = ({data}) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={data.category.style}>
                {data.category.institution}
            </span>
            <span className="subtag" style={data.category.style}>
                {data.category.tag}
            </span>
            <time style={data.category.style}>{data.date}</time>
            <p className="dataText">{data.text}</p>
            {/* {data.link && (
                <a className="links"
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )} */}
            <span className="circle" />
        </div>
    </div>
);

export default  TimelineItem;