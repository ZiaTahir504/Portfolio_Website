import React from 'react';
import './css/projects.css'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid'
import GitHubIcon from '@material-ui/icons/GitHub';

const Projects = () => {
    return (  
        <div id="elementTwo">
            <Grid container spacing={0}>
                <Grid item xs={12} md={6}>
                    <div className="cardHolder">
                        <img src={"https://lh3.googleusercontent.com/71QGfik012FiZqaFwCQeKELun4F6FJXqzE9FS0NBAR-LxgdUG5x287Vl9CHmjOcdP1_6rrDfa2rLonAycG1yCPxUSYoLetXkYF5wR9xcpvARaOkpRfa_rTJg8CRICQcBiQ3LkDAJuuRhDqJ3MmVswzP0Ww1VICL0AoeagTDx9dPqMBGQXRpems6lf_4yF4KriswqyDeCvOphOg3FdBTY-HoF2DQYg2fK2j0xYto4V-KsIULtQeGeRcy9VTzeBsUdjWcQuhKrNsqPnvCZLqKzsFoQrtLS3Vx_ajTCrIZCRKugztIQPY6OEgcita6MD3WlEPCJokzPdjUTB3rqpa3fu2WNSz9C55dABfSesOGzXpy8STB6hQoCUom-62634fFE1p8wwK-42L2XJ013esdC-iQNnc4wOyweEj0RNhOXEVL3gZ862PJZ8lzDO7Nf2xmWu7RgsRx1rKFGF9_E_UAK8yXA7XDuClwDJJuJnrcoQ6nSslkew1CyJEO6nmMGG73148FKzZBksUJId7A7-ibV6R4FurlH37qG_E5AfQdFIvtSU2oKjX61KFA3CMJsSseOSKK0t5ItAMHar8wh_qTn5nW0tFyiIUqqnQlfzwcntYK6FRUD3GJo2rbB73IT9F8RsgubVqy1MJUlIwYG0EIXEqdYTQzq0FejlREyXfb9ojNuyOQotfOHeGwS91rpBQ=s300-no?authuser=0"} className="projectImage"/>
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
                        <img src={"https://lh3.googleusercontent.com/4qbIPBuRFoYKthf7VRkU_SVtV3nnfLynX0Az7YENNvsYQCqC_zyCTzHpjbY-T0gZeNBE2lsS7fo4T-r2Y0YAz86JaMzWpyuVJj8I1qLAqhfR4ytZY22HIGgs7oiWOVcguVnZRunmodFdq4n8nOPnDpXrBiBCse7jjm3SHPAV01JMtinMvs7eI1izNGqSK5Gu-NjGlIGrOe2ZyPYZ8c-tsEZv_bwUH5L9iLERFJJBxvkKZGbNO3P8JZIRPbA5Cw-_3vYKQeVSnPe3Ovv9sxmjWiLk6R2OiBj3pkBrVKkZ8EOwlG_JzMmCiQkPdzxqbKM_D6VmPz1KINxenpmt-Qu-wD0-eEnnRbaX5Jrm80PMgTcnYXxiuP2ubUjbImRpe8LyKjGPsD2C1ILgvsv5ZoSatCUz9zJ2bgiDBRo-tqR4QtaHlFOxJnOwGofaqnQka3wAL8jduGA38I1Xtf6GRkuOEDL_40zqEzemsMe7hiaP9gjjJWVmWYDjSqzPdCp5Ox_ufk-80COJeWHGRvJJcpsHD48BLUOlI_sJQCTwf-dugmTMjvVYbAim81RFhN7eCzxOU7Y3rtGNMG_yl2XqFLccTErp98fwcfJDb1D4bdlmyqHdl-mK50zInyvI0l2huOGpdqqRmjhJe6D_cPnchvedoLaYtKE6rjS0XLiHw2PbttOmTdhresxbreWfqd34mg=s300-no?authuser=0"} className="projectImage"/>
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
