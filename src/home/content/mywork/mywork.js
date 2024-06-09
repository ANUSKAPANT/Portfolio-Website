import "./mywork.css";
import card1 from "../../../assets/slackbot-main.png";
import card3 from "../../../assets/leaveCalender.png";
import card2 from "../../../assets/cybersec.png";
import card4 from "../../../assets/softwareComp2.png";
import card6 from "../../../assets/rni.png";
import card7 from "../../../assets/recipes.png";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { faExternalLinkSquare } from "@fortawesome/free-solid-svg-icons/faExternalLinkSquare";
import { useState } from "react";
import SectionHeaderComponent from "../sectionheader/sectionheader";

const MyworkComponent = () => {
  const [isOver, setOver] = useState(false);
  const [cardNumber, setCardNumber] = useState("");
  const card = document.querySelector(`.card${cardNumber}`);

  if(card && cardNumber !== "" && isOver) card.classList.add(`cardHover${cardNumber}`);
  else if(card) card.classList.remove(`cardHover${cardNumber}`);
  
  return (
    <>
      <SectionHeaderComponent sectionName={"Projects"} />
      <div id="projects" className="projects row">
      <Card className="card7 col-xs-12 col-md-5 col-lg-5 my-3">
          <CardTitle className="opacity cardTitle">
            Recipe Book
          </CardTitle>
          <CardBody className="opacity cardBody">
            <div className="tech">Angular, BootStrap, Firebase, Github</div>
            This application is a comprehensive recipe management tool that lets users create, read, update, and delete recipes. It leverages Firebase for database management and hosting and also incorporates Firebase authentication for user access control. Additionaly, it employs Angular features such as services, guards, interceptors and modules to ensure a robust and modular architecture.{" "}
          </CardBody>
          <FontAwesomeIcon
            className="button"
            icon={faExternalLinkSquare}
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://arecipe-book.web.app/recipes";
            }}
          />
          <CardImg
            className="opacity cardImage"
            src={card7}
            onMouseOver={() => {
              setCardNumber("7");
              return setOver(true);
            }}
            onMouseOut={() => {
              setCardNumber("7");
              setOver(false);
            }}
          />
        </Card>
        <Card className="card1 col-xs-12 col-md-5 col-lg-5 my-3">
          <CardTitle className="opacity cardTitle">
            Happy News Retrieval
          </CardTitle>
          <CardBody className="opacity cardBody">
            <div className="tech">Python, Flask, Neural Network, Heroku, Github Pages</div>
            This tool implemented as a slack bot fetches real-time "happy" news
            from Twitter and News API, tailoring content to users' profiles.
            Users can also search for specific categories of happy news. The
            recommendation system continually improves and personalizes
            suggestions based on user interactions, such as category selection
            and clicks, ensuring a more customized experience over time.{" "}
          </CardBody>
          <FontAwesomeIcon
            className="button"
            icon={faExternalLinkSquare}
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                " https://anuskapant.github.io/happynewsretrieval/";
            }}
          />
          <CardImg
            className="opacity cardImage"
            src={card1}
            onMouseOver={() => {
              setCardNumber("1");
              return setOver(true);
            }}
            onMouseOut={() => {
              setCardNumber("1");
              setOver(false);
            }}
          />
        </Card>
        <Card className="card2 col-xs-12 col-md-5 col-lg-5 my-3">
          <CardTitle className="opacity cardTitle">
            {" "}
            Cybersecurity Certificate Tracker
          </CardTitle>
          <CardBody className="opacity cardBody">
            <div className="tech">ReactJS, Ruby on Rails, BootStrap, PostgreSQL, Heroku, Github</div>
            This application, tailored for Texas A&M University's cybersecurity
            department, efficiently manages certificates. Its standout feature
            is the seamless creation of standardized records from diverse CSV
            files supplied by various vendors.
          </CardBody>
          <FontAwesomeIcon
            className="button"
            icon={faExternalLinkSquare}
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://cybersec-cert-tracker.onrender.com/dashboard";
            }}
          />
          <CardImg
            src={card2}
            className="opacity cardImage"
            onMouseOver={() => {
              setCardNumber("2");
              return setOver(true);
            }}
            onMouseOut={() => {
              setCardNumber("2");
              setOver(false);
            }}
          />
        </Card>
        <Card className="card3 col-xs-12 col-md-5 col-lg-5 my-3">
          <CardTitle className="opacity cardTitle">
            Leave Management Utility
          </CardTitle>
          <CardBody className="opacity cardBody">
            <div className="tech">ReactJS, Ruby on Rails, BootStrap, PostgreSQL, Github</div>
            A human resource application designed to manage leave requests. It
            offers two distinct user perspectives: one for administrators and
            another for employees. From the employee perspective, users can
            create leave requests, specifying their desired time off. On the
            admin side, the application provides comprehensive record-keeping
            capabilities for all leave requests. Admins have the authority to
            review and make decisions on each request, either approving or
            rejecting them.
          </CardBody>
          <FontAwesomeIcon
            className="button"
            icon={faExternalLinkSquare}
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://leave-management-utility-nsng.onrender.com/admin/dashboard";
            }}
          />
          <CardImg
            className="opacity cardImage"
            src={card3}
            onMouseOver={() => {
              setCardNumber("3");
              return setOver(true);
            }}
            onMouseOut={() => {
              setCardNumber("3");
              setOver(false);
            }}
          />
        </Card>
        <Card className="card4 col-xs-12 col-md-5 col-lg-5 my-3">
          <CardTitle className="opacity cardTitle">
            Software Company Website
          </CardTitle>
          <CardBody className="opacity cardBody">
            <div className="tech">GatsbyJS, CSS, Render</div>
            I developed a dynamic and visually captivating blueprint of a
            software engineering company website using GatsbyJS. This project
            showcases the expertise and capabilities of a software engineering
            firm, providing a sleek and interactive platform to engage with
            potential clients, showcase their portfolio, and attract employees.
          </CardBody>
          <FontAwesomeIcon
            className="button"
            icon={faExternalLinkSquare}
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://business-website-j0zn.onrender.com/";
            }}
          />
          <CardImg
            src={card4}
            className="opacity cardImage"
            onMouseOver={() => {
              setCardNumber("4");
              return setOver(true);
            }}
            onMouseOut={() => {
              setCardNumber("4");
              setOver(false);
            }}
          />
        </Card>
        <Card className="card6 col-xs-12 col-md-5 col-lg-5 my-3">
          <CardTitle className="opacity cardTitle">
            Realtime Network Intrusion Detection and Network Traffic
            Visualization
          </CardTitle>
          <CardBody className="opacity cardBody">
            <div className="tech">Python, DJango, Keras, Scikit Learn, Neural Network</div>
            This system captures the packets traversing through the network in
            realtime and detects the intrusions via a trained neural network.
            The admin is then notified of the intrusions. The admin dashboard
            also consists of detailed visualization of the traffic. I built the
            neural network model required to detect the attacks from normal
            network traffic, which upon being trained with standard dataset
            accurately detected the attacks with an accuracy of 80% on real-time
            datasets.
          </CardBody>
          <FontAwesomeIcon
            className="button"
            icon={faExternalLinkSquare}
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://github.com/ANUSKAPANT/Realtime-Network-Intrusion-Detection";
            }}
          />
          <CardImg
            src={card6}
            className="opacity cardImage"
            onMouseOver={() => {
              setCardNumber("6");
              return setOver(true);
            }}
            onMouseOut={() => {
              setCardNumber("6");
              setOver(false);
            }}
          />
        </Card>
        <Card className="card col-xs-12 col-md-5 col-lg-5 my-3">
          <CardTitle className="opacity cardTitle">
            Unix Based Operating System
          </CardTitle>
          <CardBody className="opacity cardBody">
            <div className="tech">C++</div>
            Designed and implemented the building blocks of a UNIX based
            Operating System namely threads, the process subsystem and
            synchronization primitives. Implemented Virtual memory management
            which involved implementation of process address space, page fault
            handling, stack management and system calls. Implemented a simple
            file system and kernel-level thread scheduling mechanisms.
          </CardBody>
          <FontAwesomeIcon
            className="button"
            icon={faExternalLinkSquare}
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://github.com/ANUSKAPANT/Unix-Operating-System";
            }}
          />
        </Card>
        <Card className="card col-xs-12 col-md-5 col-lg-5 my-3">
          <CardTitle className="opacity cardTitle">
            Network Optimization Through Maximum Bandwith Paths
          </CardTitle>
          <CardBody className="opacity cardBody">
            <div className="tech">C++</div>
            Implemented algorithms for random graph generation. Dijkstra and
            Kruskal’s algorithm were implemented to find the maximum bandwidth
            path in the network for a given source and destination nodes.
          </CardBody>
          <FontAwesomeIcon
            className="button"
            icon={faExternalLinkSquare}
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://github.com/ANUSKAPANT/CSCE-629-Network-Optimization";
            }}
          />
        </Card>
      </div>
    </>
  );
};
export default MyworkComponent;
