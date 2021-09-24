import React, { useState } from "react";
import '../CSS/App.css';
import CodeInput from "./CodeInput";



const CodeViewer = (props) => {
    const [codeType, setCodeType] = useState('img');
    const project = props.project;

    const reset = () => {
        const img = document.getElementById('img-button');
        const html = document.getElementById('html-button');
        const css = document.getElementById('css-button');
        const script = document.getElementById('script-button');
        script.style.textDecoration = 'none';
        css.style.textDecoration = 'none';
        html.style.textDecoration = 'none';
        img.style.textDecoration = 'none';
    }

    const handleCodeChange = ({target}) => {
        let type = target.value;
        setCodeType(type);
        reset();
        target.style.textDecoration = 'underline #4266a1';
    }

    return(
        <div id="code-box">
                <div id="code-title">
                    <h2>Code Viewer</h2>
                </div>
                   <CodeInput project={project} codeType={codeType} />                
                <nav id="code-options">
                    <ul>
                        <li><button onClick={handleCodeChange} id="img-button" value='img'>Image</button></li>
                        <li><button onClick={handleCodeChange} id="html-button" value='html'>HTML</button></li>
                        <li><button onClick={handleCodeChange} id="css-button" value='css'>CSS</button></li>
                        <li><button onClick={handleCodeChange} id="script-button" value='js'>JS</button></li>
                    </ul>
                </nav>
        </div>
    )
}

export default CodeViewer;