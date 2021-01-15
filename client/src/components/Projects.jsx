import React from 'react';
import './css/projects.css'
// import { IconButton } from '@material-ui/core';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import LinkedInIcon from '@material-ui/icons/LinkedIn';
// import GitHubIcon from '@material-ui/icons/GitHub';

// <nav id="navButtonsContainer">
//                 <div id ="buttons">
//                      <IconButton>
//                          <TwitterIcon />
//                      </IconButton>
//                      <IconButton>
//                          <LinkedInIcon />
//                      </IconButton>
//                      <IconButton>
//                          <GitHubIcon />
//                      </IconButton>
//                 </div>
//             </nav>   

const Projects = () => {
    return (  
        <div id="projectsContainer">   
            <h2>Projects</h2>
            <div id="projectOne">
                <header id="projectOneHeader">
                    <img id="projectOneIcon" />
                    <h3>Bark Point</h3>
                </header>
                <img id="projectOneExample" />
                <div id="projectOneAboutContainer">
                    <text></text>
                </div>
            </div>
            <div id="projectTwo">
                <header id="projectTwoHeader">
                    <img id="projectTwoIcon" />
                    <h3>Babili</h3>
                </header>
                <img id="projectTwoExample" />
                <div id="projectTwoAboutContainer">
                    <text></text>
                </div>
            </div>
        </div>
    )
}

export default Projects;
