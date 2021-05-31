import React from "react";
import MeImg from "../../assets/me.png"
import './Home.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpotify, faGithubAlt, faTelegramPlane, faHackerrank } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { LinkedinBrandIcon, DatacampBrandIcon } from '@datacamp/waffles-icons';
import CustomScrollbar from '../CustomScrollbar/CustomScrollbar';

const Home = () => (
    <CustomScrollbar>
        <div className="home">
            <img src={MeImg} alt="me" className="image" />

            <h1 className="name">Ruth Anne</h1>

            <h4 className="dev">/developer</h4>

            <div className="icons">
                <a rel="noopener noreferrer" href='https://t.me/ruthanne/' target="_blank" title="Telegram">
                    <FontAwesomeIcon icon={faTelegramPlane} />
                </a>
                <a rel="noopener noreferrer" href='https://github.com/ruthannee/' target="_blank" title="Github">
                    <FontAwesomeIcon icon={faGithubAlt} />
                </a>
                <a rel="noopener noreferrer" href='https://www.linkedin.com/in/anne-carvalho/' target="_blank" title="LinkedIn">
                    <LinkedinBrandIcon size={30} />
                </a>
                <a rel="noopener noreferrer" href='https://www.datacamp.com/profile/annecarvalho' target="_blank" title="Datacamp">
                    <DatacampBrandIcon size={30} />
                </a>
                <a rel="noopener noreferrer" href='https://www.hackerrank.com/anne_carvalho' target="_blank" title="HackerRank">
                    <FontAwesomeIcon icon={faHackerrank} />
                </a>
                <a rel="noopener noreferrer" href='https://open.spotify.com/user/anne.carvalho/' target="_blank" title="Spotify">
                    <FontAwesomeIcon icon={faSpotify} />
                </a>
                <a rel="noopener noreferrer" href='/contact' title="Email">
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
        </div>
    </CustomScrollbar>
);

export default Home;