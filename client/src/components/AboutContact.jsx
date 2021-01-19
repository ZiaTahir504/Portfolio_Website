import React from 'react';
import './css/aboutcontact.css'
import Grid from '@material-ui/core/Grid'
import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';


// import myPhoto from '../../assets/myphoto.png';

const AboutContact = () => {
    return (
        <div id="elementThree">
            <Grid id="parentThree" container spacing={0}>
                <Grid item xs={12} md={10}>
                    <div id="aboutMe">
                        <img id="actualPhoto" src="https://ibb.co/V2xqGv1" />
                        <text id="aboutMeText">
                            I'm a psychology student turned fullstack javascript developer.
                            <br />
                            Connecting with people is my passion, whether that be through
                            conversation or code.
                            <br />
                            I love art, humor, and horror movies!
                        </text>
                    </div>
                </Grid>
            </Grid>
            <div id="connect">
                <text id="letsConnect">let's connect</text>
                <div id="buttonsContainer">
                    <IconButton>
                        <GitHubIcon 
                            style={{ color: 'white' }}
                            onClick={() => window.open('https://github.com/ZiaTahir504', '_blank')}
                        />
                    </IconButton> 
                    <IconButton>
                        <LinkedInIcon 
                            style={{ color: 'white' }} 
                            onClick={() => window.open('https://www.linkedin.com/in/zia-tahir-814a01203/', '_blank')}
                        />
                    </IconButton>
                    <IconButton>
                        <TwitterIcon 
                            style={{ color: 'white' }} />
                    </IconButton>
                    <IconButton>
                        <EmailIcon 
                            style={{ color: 'white' }} 
                            onClick={() => location.href="mailto:mariatahir504@gmail.com"}
                            />
                    </IconButton>
                </div>
            </div>
        </div>
    )
}

export default AboutContact;
