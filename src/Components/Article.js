import React from "react";
import '../CSS/App.css';


const Article = (props) => {
    const project = props.project;
    return project.article;    
}

export default Article;