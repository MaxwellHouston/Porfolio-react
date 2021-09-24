import React, { useState, useEffect } from 'react';
import '../CSS/App.css';
import CodeViewer from './CodeViewer';
import Article from './Article';
import Nav from './Nav';
import ProjectData from '../Utility/projectData';
import MoreArticle from './MoreArticle';


const App = () => {
  const [project, setProject] = useState(ProjectData.about);
  const [moreArticles, setMoreArticles] = useState([]);
  const [mainArticles, setMainArticles] = useState([]);

  const handleProjectChange = (project) => {
    setProject(ProjectData[project]);
  }

  
  const getArticles = () => {
    let moreArray = [];
    let mainArray = [];
    for(const obj in ProjectData){
      if(ProjectData[obj].section === 'more'){
        moreArray.push(ProjectData[obj]);
      } else if(ProjectData[obj].section === 'main'){
        mainArray.push(ProjectData[obj])
      }
    }
    mainArray[4] = ProjectData.more;
    setMoreArticles(moreArray);
    setMainArticles(mainArray);
  }
  
  useEffect(()=>{getArticles()},[])

  return (
    <div className='body'>
      <Nav project={project} handleProjectChange={handleProjectChange} mainArticles={mainArticles} />
      {project.section === 'main' ? 
      <Article project={project} handleProjectChange={handleProjectChange} />
      : 
      <MoreArticle articles={moreArticles} project={project} handleProjectChange={handleProjectChange} />
      }
      <CodeViewer project={project}/>
    </div>
  );
}

export default App;
