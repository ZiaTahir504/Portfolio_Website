import React from 'react';
import './css/header.css';
import Grid from "@material-ui/core/Grid";
import { IconButton } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';

import myDrawing from "../../assets/version2.png";

const Header = () => {
    return (
        <div id="elementOne">
            <Grid container id="headerParentContainer" spacing={0}>
                <Grid item xs={12} md={6}>
                    <header id="headerTextContainer">
                        <h1 id="myName">Hey, I'm Zia</h1>
                        <h3 id="myStatusOne">full-time developer</h3>
                        <h3 id="myStatusTwo">part-time doodler</h3>   
                    </header>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div id="imageContainer">
                        <img id="myDrawing" src={myDrawing}></img>
                    </div>
                </Grid>
            </Grid>
        </div> 
    ); 
}

export default Header;
