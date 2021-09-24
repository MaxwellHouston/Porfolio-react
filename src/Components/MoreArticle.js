import React, { useEffect } from "react";


const MoreArticle = (props) => {

    const handleMoreClick = ({target}) => {
        props.handleProjectChange(target.value)
    }

    
    const moreArticles = (articles) => {
        const display = articles.map( (article) => {
            return <tr key={article.value}>
                    <td className="project">
                    <button
                    id={`more${article.value}`} 
                    onClick={handleMoreClick} 
                    value={article.value} >
                    {article.name}
                    </button>
                    </td>
                    <td>{article.html ? String.fromCharCode(215) : '-'}</td>
                    <td>{article.css ? String.fromCharCode(215) : '-'}</td>
                    <td>{article.js ? String.fromCharCode(215) : '-'}</td>
                   </tr>
        })
        return display   
    }


    useEffect(()=>{
        let id = `more${props.project.value}`;
        let selected = document.getElementById(id);
        if(!selected){
            return;
        }
        selected.style.color = 'red';
        return ()=>{
            selected.style.color = '#4266a1';
        }
    },[props.project])


    return(
        <article >
                <h1>More Projects</h1>
                <table id="project-table">
                    <thead>
                        <tr>
                            <th scope="col">Project Name</th>
                            <th scope="col">HTML</th>
                            <th scope="col">CSS</th>
                            <th scope="col">JS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {moreArticles(props.articles)}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colspan="4">Click project to display in Code Viewer</td>
                        </tr>
                    </tfoot>
                </table>
            </article>
    )
}


export default MoreArticle;


