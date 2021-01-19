import React from 'react';
import './css/projects.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import GitHubIcon from '@material-ui/icons/GitHub';

import barkpoint from '../../assets/barkpoint.png';
import babili from '../../assets/babili.png';

const Projects = () => {
    return (  
        <div id="elementTwo">
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <div className="cardHolder">
                        <img src={barkpoint} className="projectImage"/>
                        <Card id="projectOne">
                            <CardActionArea>
                                <CardContent className="textHolder">
                                    <text className="projectTitle">Bark Point</text>
                                    <br />
                                    <text className="projectAbout">
                                        Find the perfect toy suited to your dogs
                                        personality and a nearby park to play in.
                                    </text>
                                    <br />
                                    <text className="projectTools">
                                        mongoDb * express
                                        <br />
                                        react * node
                                    </text>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button 
                                    variant="outlined"
                                    onClick={() => window.open('https://github.com/Bajamen/BarkPoint', '_blank')}
                                    startIcon={<GitHubIcon />}
                                >
                                    repo
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className='cardHolder'>
                        <img src={babili} className="projectImage"/>
                        <Card id="projectTwo">
                            <CardActionArea>
                                <CardContent>
                                    <text className="projectTitle">Babili</text>
                                    <br />
                                    <text className="projectAbout">
                                        Practice English in a variety of
                                        fun and accessibility focused ways.
                                    </text>
                                    <br />
                                    <text className="projectTools">
                                        postgreSQL * express 
                                        <br />
                                        react native * node
                                    </text>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button
                                    variant="outlined"
                                    onClick={() => window.open('https://github.com/CSL-CodingAsASecondLanguage/Babili', '_blank')}
                                    startIcon={<GitHubIcon />}
                                >
                                    repo
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Projects;
