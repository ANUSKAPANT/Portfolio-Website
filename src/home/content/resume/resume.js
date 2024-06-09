import './resume.css';
import resume from '../../../assets/anuskaresume.pdf';
import SectionHeaderComponent from "../sectionheader/sectionheader";
import * as React from "react";

const ResumeComponent = () => {
    return(
        <>
            <SectionHeaderComponent sectionName={'Resume'}/>
            <div id="resume">
                <iframe title="resume" src={`${resume}#view=fitH`}/>
            </div>
        </>
    );
}
export default ResumeComponent;