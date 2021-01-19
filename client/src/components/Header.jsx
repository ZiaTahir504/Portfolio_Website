import React from 'react';
import './css/header.css';
import Grid from "@material-ui/core/Grid";

const Header = () => {
    return (
        <div id="elementOne">
            <Grid container id="headerParentContainer" spacing={0}>
                <Grid item xs={12} md={6}>
                    <header id="headerTextContainer">
                        <h1 id="myName">Hey, I'm Zia</h1>
                        <h3 id="myStatusOne">full time developer</h3>
                        <h3 id="myStatusTwo">part time doodler</h3>   
                    </header>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div id="imageContainer">
                        <img id="myDrawing" src="https://lh3.googleusercontent.com/BrjzJc0vpXhYE20z9R8YsUBJG4Y7Iw0ldur0NuksWc_BEU-6-k1H-R_uJQoryZpg4zx6hFvxp9pHDRoJFlfTb4OJjmQVnSHqExfxWPP1QEkK9ZNSqQdZmgLbQIOiuVgKEggAVBpeuVe3Mt5OZpKl9e7h2J9X5eNDtuERr8dafWSUO9BD2HcfSlSecaf_i-Q2XmrhGMsgX624HZEkbd-ncTLSNRFdFksCHFGIY6zDZG6tGQEABxyb7Z1hGzSkMixtATS41zG4wkLKR4fpporgu5LvQ3WpBw402nmecHI4o8gQVQP515MV4nFC7XFemPp_Cx8Q4mbj7_VMjYTyjm1kj3Gx3XYKtKH0nSUcaoHrxa38tAXyliqyOym48VNYQ3nBFWnjSq_H3Fte4QC_L_WojZK6HK5m7ZggQx7qEKRu64ZfVksL6gOaZmCE6cApyL-KB69DhxhlRDODIlIWmqtz6N581MRYxOHMn2YqQVUCC45YMZkx_vdTs89x1Lgwh_S3UHb6ANlOOkn1UW3xX2d98BoQJZOLoEEbnoVDQZql3PUZ-a4loay-hIrn3iUHSSYUu33z77FEXdR_TR-t6nVzFIpgUpCRVET4MAkre6PI04t1bWIXQMI5-qsZ-UAVbLPt6mToUY-AcrpMkKKVzsYjQ0lr9ozey0CJ8G7tKQ-6AtPB2mKbGXe_IjPvtKULLQ=w1005-h797-no?authuser=0"></img>
                    </div>
                </Grid>
            </Grid>
        </div> 
    ); 
}

export default Header;
