import * as React from "react";
import './content.component.scss';
import PortfolioImage from "./portfolioimage/image.component";
import ResumeComponent from "./resume/resume.component";
import TimelineComponent from "./timeline/timeline.component";
import MyworkComponent from "./mywork/mywork.component";
import SkillsComponent from "./skills/skills.component";

const ContentComponent = () => {
        return(
            <>
                <PortfolioImage/>
                <SkillsComponent />
                <MyworkComponent/>
                <TimelineComponent/>
                <ResumeComponent/>
            </>
        );
}

export default ContentComponent;