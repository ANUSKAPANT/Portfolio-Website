import * as React from "react";
import './content.css';
import PortfolioImage from "./portfolioimage/image";
import ResumeComponent from "./resume/resume";
import TimelineComponent from "./timeline/timeline";
import MyworkComponent from "./mywork/mywork";
import SkillsComponent from "./skills/skills";

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