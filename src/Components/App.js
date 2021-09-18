import React, { useState } from 'react';
import '../CSS/App.css';
import CodeViewer from './CodeViewer';
import Article from './Article';
import Nav from './Nav';
import ProjectData from '../Utility/projectData';


const App = () => {
  const [project, setProject] = useState(ProjectData.about)
  

  return (
    <div className='body'>
      <Nav project={project} />
      <Article project={project}/>
      <CodeViewer project={project}/>
    </div>
  );
}

export default App;
