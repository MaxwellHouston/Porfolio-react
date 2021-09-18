import React, { useState } from "react";
import '../CSS/App.css';
import ProjectData from "../Utility/projectData";


const CodeViewer = (props) => {
    const [codeType, setCodeType] = useState('img')
    const project = props.project

    return(
        <div id="code-box">
                <div id="code-title">
                    <h2>Code Viewer</h2>
                </div>
                <div id="code-viewer">
                   <div class="img page" id='img'>
                   <object data={project.img}>html</object>
                   </div>
                   <div class="html page" id="html">
                       <object data={project.html}>html</object>
                   </div>
                   <div class="css page" id="css">
                       <object data={project.css}>css</object>
                   </div>
                   <div class="js page" id="js">
                       <object data={project.js}>js</object>
                   </div>
                </div>
                <nav id="code-options">
                    <ul>
                        <li><button id="img-button" type="button">Image</button></li>
                        <li><button id="html-button" type="button">HTML</button></li>
                        <li><button id="css-button" type="button">CSS</button></li>
                        <li><button id="script-button" type="button">JS</button></li>
                    </ul>
                </nav>
        </div>
    )
}

export default CodeViewer;