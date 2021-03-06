import React from 'react';
import './css/projects.css'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from "@material-ui/core/styles";

import barkpoint from '../../assets/barkpoint2.png';
import babili from '../../assets/babili2.png';
import spooky from '../../assets/spookyworld.png';

const useStyles = makeStyles({
    actionArea: {
      "&:hover $focusHighlight": {
        opacity: 0
      }
    },
    focusHighlight: {}
  });

const Projects = () => {
    const classes = useStyles();
    return (  
        <div id="elementTwo">
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <div className="cardHolder">
                        <img src={spooky} className="projectImage"/>
                        <Card id="projectThree">
                            <CardContent className="textHolder">
                                <text className="projectTitle">Spooky World</text>
                                <br />
                                <text className="projectAbout">
                                    (Work in Progress) Database of horror movies, games, and other media. 
                                </text>
                                <br />
                                <text className="projectTools">
                                    mongoDb * express
                                    <br />
                                    react * node
                                </text>
                            </CardContent>
                            <CardActions>
                                <Button 
                                    style={{ color: 'white' }}
                                    variant="outlined"
                                    onClick={() => window.open('https://github.com/ZiaTahir504/Horror_Movies', '_blank')}
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
                            <CardContent>
                                <text className="projectTitle">Babili</text>
                                <br />
                                <text className="projectAbout">
                                    Practice conversational English in a variety of
                                    fun and accessibility focused ways.
                                </text>
                                <br />
                                <text className="projectTools">
                                    postgreSQL * express 
                                    <br />
                                    react native * node
                                </text>
                            </CardContent>
                            <CardActions>
                                <Button
                                    style={{ color: 'white' }}
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
                <Grid item xs={12} md={6}>
                    <div className="cardHolder">
                        <img src={barkpoint} className="projectImage"/>
                        <Card id="projectOne">
                            <CardContent className="textHolder">
                                <text className="projectTitle">Bark Point</text>
                                <br />
                                <text className="projectAbout">
                                    Find the perfect toy suited for your dogs
                                    personality along with a nearby park to play in.
                                </text>
                                <br />
                                <text className="projectTools">
                                    mongoDb * express
                                    <br />
                                    react * node
                                </text>
                            </CardContent>
                            <CardActions>
                                <Button 
                                    style={{ color: 'white' }}
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
            </Grid>
        </div>
    )
}

export default Projects;
