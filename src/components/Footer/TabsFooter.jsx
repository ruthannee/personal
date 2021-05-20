import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Inicio from '../Home/Home';
import Sobre from '../About/About';
// import Habilidades from '../Skills/Skills';
import Curriculo from '../Curriculum/Curriculum';
import Contato from '../Contact/Contact';
import './TabsFooter.css';

function TabsFooter() {
    const [isOpen, setOpen] = useState(false);

    const Home = () => <Inicio/>;
    const About = () => <Sobre/>;
    // const Skills = () => <Habilidades/>;
    const Curriculum = () => <Curriculo/>;
    const Contact = () => <Contato/>;
    
    return (
        <div>
            <div className="links">
                <Link id="link" to={`/`} onClick={() => setOpen(!isOpen)}>Home</Link>
                <Link id="link" to={`/about`} onClick={() => setOpen(!isOpen)}>Sobre</Link>
                {/* <Link id="link" to={`/skills`} onClick={() => setOpen(!isOpen)}>Skills</Link> */}
                <Link id="link" to={`/curriculum`} onClick={() => setOpen(!isOpen)}>Currículo</Link>
                <Link id="link" to={`/contact`} onClick={() => setOpen(!isOpen)}>Contato</Link>
            </div>
            <div className="tabs">
                <Switch>
                    <Route exact path={`/`} component={Home} />
                    <Route exact path={`/about`} component={About} />
                    {/* <Route exact path={`/skills`} component={Skills} /> */}
                    <Route exact path={`/curriculum`} component={Curriculum} />
                    <Route exact path={`/contact`} component={Contact} />
                </Switch>
            </div>
        </div>
    )
}

export default TabsFooter;