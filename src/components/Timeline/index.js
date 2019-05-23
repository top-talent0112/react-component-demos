import React from 'react';
import data from './data';
import './style.css';

const TimelineItem = ({ data }) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: data.category.color }}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.text}</p>
            {data.link && (
                <a
                    href={data.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {data.link.text}
                </a>
            )}
            <span className="circle" />
        </div>
    </div>
);

const Timeline = () =>
    data.length > 0 && (
        <div>
            <h3>TimeLine Demo</h3>
            <div className="timeline-container">
                {data.map((data, idx) => (
                    <TimelineItem data={data} key={idx} />
                ))}
            </div>
        </div>
    );

export default Timeline;