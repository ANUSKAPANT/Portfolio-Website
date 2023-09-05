import * as React from "react";
import HomeComponent from "./home/home.component";
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import {library} from "@fortawesome/fontawesome-svg-core";
library.add(faLinkedinIn)

const container = document.getElementById('root');

const root = createRoot(container!);
root.render(<HomeComponent/>);
