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
                <Link to={`/`} className="link" onClick={() => setOpen(!isOpen)}>Home</Link>
                <Link to={`/about`} className="link" onClick={() => setOpen(!isOpen)}>Sobre</Link>
                {/* <Link to={`/skills`} className="link" onClick={() => setOpen(!isOpen)}>Skills</Link> */}
                <Link to={`/curriculum`} className="link" onClick={() => setOpen(!isOpen)}>Currículo</Link>
                <Link to={`/contact`} className="link" onClick={() => setOpen(!isOpen)}>Contato</Link>
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