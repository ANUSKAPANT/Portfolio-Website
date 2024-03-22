import * as React from  "react";
import ContentComponent from "./content/content.component";
import './home.component.scss';
import Header from "./header/header.component";
import FooterComponent from "./footer/footer.component";

const HomeComponent = () => {
        return (
            <>
                <Header/>
                <ContentComponent/>
                <FooterComponent/>
            </>
        );
}
export default HomeComponent;