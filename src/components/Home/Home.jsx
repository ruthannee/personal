import React from "react";
import MeImg from "../../assets/me.png"
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faGithubAlt, faLinkedin, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";

const Home = () => (
  <div className="home">
    <img src={MeImg} alt="me" className="image"/>
    <h1 className="name">Ruth Anne</h1>

    <div className="icons">
        <a href='https://t.me/ruthanne' target="_blank" title="Telegram">
            <FontAwesomeIcon icon={faTelegramPlane}/>
        </a>
        <a href='https://github.com/ruthannee' target="_blank" title="Github">
            <FontAwesomeIcon icon={faGithubAlt} />
        </a>
        <a href='https://www.linkedin.com/in/anne-carvalho/' target="_blank" title="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href='https://open.spotify.com/user/anne.carvalho' target="_blank" title="Spotify">
            <FontAwesomeIcon icon={faSpotify} />
        </a>
    </div>

  </div>
);

export default Home;