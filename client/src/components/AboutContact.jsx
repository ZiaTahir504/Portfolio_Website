import React from 'react';
import './css/aboutcontact.css'
import Grid from '@material-ui/core/Grid'
import { IconButton } from '@material-ui/core';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import TwitterIcon from '@material-ui/icons/Twitter';

import photo from '../../assets/photo.png';
import resume from '../../assets/resume.pdf';

const AboutContact = () => {
    return (
        <div id="elementThree">
            <div id="aboutMe">
                <Grid id="parentThree" container spacing={0}>
                    <Grid item xs={12} md={4}>
                        <img id="actualPhoto" src={photo} />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <text id="aboutMeText">
                            I'm a psychology student turned fullstack javascript developer.
                            <br />
                            Connecting with people is my passion, whether that be through
                            conversation or code.
                            <br />
                            I love art, humor, and horror movies!
                            <br />
                        </text>
                    </Grid>
                </Grid>
            </div>
            <div id="connect">
                <text id="letsConnect">let's connect</text>
                <div id="buttonsContainer">
                    <IconButton>
                        <GitHubIcon className="iconButton"
                            onClick={() => window.open('https://github.com/ZiaTahir504', '_blank')}
                        />
                    </IconButton> 
                    <IconButton>
                        <LinkedInIcon className="iconButton"
                            onClick={() => window.open('https://www.linkedin.com/in/maria-zia-tahir/', '_blank')}
                        />
                    </IconButton>
                    <IconButton>
                        <AccountBoxIcon className="iconButton" 
                            onClick={() => window.open(resume, '_blank')}
                        />
                    </IconButton>
                    <IconButton>
                        <EmailIcon className="iconButton"
                            onClick={() => location.href="mailto:mariatahir504@gmail.com"}
                            />
                    </IconButton>
                    <IconButton>
                        <TwitterIcon className="iconButton"
                            onClick={() => window.open('https://twitter.com/CodesZia', '_blank')}
                        />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default AboutContact;
