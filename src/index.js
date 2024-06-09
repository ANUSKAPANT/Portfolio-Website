import * as React from "react";
import HomeComponent from "./home/home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {library} from "@fortawesome/fontawesome-svg-core";
import './index.css';
import ReactDOM from 'react-dom/client';

library.add(faLinkedinIn)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HomeComponent/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

