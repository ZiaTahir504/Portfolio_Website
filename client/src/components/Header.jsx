import React from 'react';
import './css/header.css';
import myPhoto from '../../assets/myPhoto.png';

const Header = () => {
    return (
        <div id="headerParentContainer">
            <header id="headerTextContainer">
                <h1 id="myName">Hey, I'm Zia</h1>
                <h3 id="myStatus">full time developer<br/>part time doodler</h3>
            </header>
            <div id="imageContainer">
                <img id="myPhoto" src={myPhoto}></img>
            </div>
        </div>
    ); 
}

export default Header;
