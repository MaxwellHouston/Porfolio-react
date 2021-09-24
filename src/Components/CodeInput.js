import React from 'react';
import ProjectData from '../Utility/projectData';

const CodeInput = (props) => {

    const project = props.project;
    const codeType = props.codeType;
    
    return (
        <div id="code-viewer" >
            {codeType === 'img' ? 
            <img src={project[codeType]} alt='website snapshot'  /> 
            : 
            <object data={!project[codeType] ? ProjectData.empty.txt : project[codeType] }>code</object> }
        </div>
        
           
    )
}

export default CodeInput;

    