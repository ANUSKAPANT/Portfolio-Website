import * as React from  "react";
import ContentComponent from "./content/content";
import './home';
import Header from "./header/header";
import FooterComponent from "./footer/footer";

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