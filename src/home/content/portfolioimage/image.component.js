import './image.component.scss';
import portFolioImage from '../../../assets/anuska.jpg';
import portFolioImage1 from '../../../assets/anuska.jpg';
import {useEffect, useState} from "react";
const PortfolioImage = () => {
    const [useImage, setImage] = useState('');
    const [windowHeight, setWindowHeight] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);
    let resizeWindow = () => {
        setWindowHeight(window.innerHeight);
        setWindowHeight(window.innerWidth);
    };
    useEffect(() => {
        resizeWindow();
        window.addEventListener('resize', resizeWindow);
        window.addEventListener('scroll', scroll);
        useImage!== '' && windowHeight <= 800 && windowWidth <=400 ? setImage(portFolioImage1) : setImage(portFolioImage);
        return () => {
            window.removeEventListener('resize', resizeWindow);
            window.addEventListener('scroll', scroll);
        }
    }, [windowHeight, windowWidth]);
    const scroll = () => {
        const currentScroll = window.scrollY;
        const header = document.querySelector('.image');
        if(currentScroll >= 400) {
            header?.classList.add('blur')
        } else{
            header?.classList.remove('blur')
        }
    }
    return(
        <div className="imageContent">
            <div className='row'>
            <div className="opening col-xs-12 col-md-8">
                <div className="aboutMeDesc">
                    <h1 className="titleHeader">
                        SOFTWARE ENGINEER.
                    </h1>
                    <p className="titleDescription">
                        Full stack developer skilled in creating elegant UIs, 
                        efficient databases and optimized backends. 
                        With 2 years of experience in dynamic web app development using HTML,
                        CSS, React Js, PostgreSQL, and Ruby on Rails, I
                        have also dived into C++ and Python projects during
                        my Master's in Computer Science. I am enthusiastic about tackling 
                        coding challenges and committed to continuous learning.
                    </p>
                   
                </div>
            </div>
            <div className="opening2 col-xs-12 col-md-4">
                <div className="imageBox">
                    <p className="nameAnuska">
                        ANUSKA PANT
                    </p>
                </div>
                <img className="image" id='image' src={useImage} alt="portfolioImage"/>
                    
                </div>
            </div>
        </div>
    );
}

export default  PortfolioImage;