import React from 'react';
import './css/projects.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import projectOneImage from '../../assets/barkpoint.png';
import projectTwoImage from '../../assets/logo.png';

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
        <div id="cardsContainer">
            <div id="cardOneHolder">
                <Card id="projectOne">
                    <CardActionArea>
                        <CardMedia
                            className="projectImage"
                            image={projectOneImage}
                        />
                        <CardContent>
                            <text className="projectTitle">Bark Point</text>
                            <br />
                            <text className="projectAbout">About Bark Point</text>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button>repo on github</Button>
                    </CardActions>
                </Card>
            </div>
            <div id='cardTwoHolder'>
                <Card id="projectTwo">
                    <CardActionArea>
                        <CardMedia
                            className="projectImage"
                            image={projectTwoImage}
                        />
                        <CardContent>
                            <text className="projectTitle">Babili</text>
                            <br />
                            <text className="projectAbout">About Babili</text>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button>repo on github</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    )
}

export default Projects;
