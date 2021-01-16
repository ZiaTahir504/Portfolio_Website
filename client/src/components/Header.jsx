import React from 'react';
import './css/header.css';

import myPhoto from '../../assets/myPhoto.png';

const Header = () => {
    return (
        <div id="elementOne">
            <div id="headerParentContainer">
                <header id="headerTextContainer">
                    <h1 id="myName">Hey, I'm Zia</h1>
                    <h3 id="myStatusOne">full time developer</h3>
                </header>
                <div id="imageContainer">
                    <img id="myPhoto" src={myPhoto}></img>
                </div>
            </div>
            <h3 id="myStatusTwo">part time doodler</h3>   
        </div> 
    ); 
}

export default Header;
