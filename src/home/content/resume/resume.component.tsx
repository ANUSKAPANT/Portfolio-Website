import './resume.component.scss';
import resume from '../../../assets/anuskaresume.pdf';
import SectionHeaderComponent from "../sectionheader/sectionheader.component";

const ResumeComponent = () => {
    return(
        <>
            <SectionHeaderComponent sectionName={'Resume'}/>
            <div id="resume">
                <iframe src={`${resume}#view=fitH`}/>
            </div>
        </>
    );
}
export default ResumeComponent;