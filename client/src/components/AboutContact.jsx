import React from 'react';
import './css/aboutcontact.css'
import Grid from '@material-ui/core/Grid'
import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';


const AboutContact = () => {
    return (
        <div id="elementThree">
            <Grid id="parentThree" container spacing={0}>
                <Grid item xs={12} md={10}>
                    <div id="aboutMe">
                        <img id="actualPhoto" src="https://lh3.googleusercontent.com/Fz02T9CnURYDJtrrmQ1-7Z5t8bm-uOVmuYUOFarkPa7ieS7t1rUbYDzCmM6u1otl4AxHATTcB51UBJjhzJ6BBJ6WKKarwCKqv_YmWKzTDzv3U0yvRwFE5E7pKYQQBKpgKOsrqd-PNi_9uZENLCMy8xBx3Qm8syexkPmacMoap9BV54ONB366heNdL11fYwM_8K99vIyef3CiVdhNLiBaN_XlhZLgY_Ljzy7XDwGhBlmi1rwbqEetwtjIaCbVS4IAnB90DHy56rfVeMWMnZFbjT-ltAkuYGhOb8I5LWYnM3CMy8DElhijDnCRieK6uJc4l7EOdr-iGrYXIgGP1GxdBbVEu6KGRH-z8kfmzCrjfNmXw4Cipoh2OpkPmp0HbPDrqMrP_HSjXOSGYtvXpmP31y3L0fp-uqPw5_JCidjKHJds9MgMZ9vdr01i7xqc-IG7qwXgcV4ZCDL9286z_WbW6t_9KWIZbeOCb0jfOewjvwvwBcJfmK5FwdwV5cSBhwhXJTKx5xqxLbAPSbv3L3YsD2fxDNuUiUzaEMvAS7iDMxxlKdKT0Fx9Hs___-fVuANGstdAWYZUUXAyFx1WChlxeuB59ISAQIL5Oq7kPQS6Wph03_lQ0JqdevlOVfuIHqlqpTjBRkk9ZlSXVjHjFp1xyd-1kFkDw68imUYUJispEgPfdNw1kUK0ItsFtWO7dA=w255-h193-no?authuser=0" />
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
