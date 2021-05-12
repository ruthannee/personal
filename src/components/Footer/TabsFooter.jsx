import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Sobre from '../About/About';
import Habilidades from '../Skills/Skills';
import Curriculo from '../Curriculum/Curriculum';
import Contato from '../Contact/Contact';
import './TabsFooter.css';

function TabsFooter() {
    const [isOpen, setOpen] = useState(false);

    const About = () => <Sobre/>;
    const Skills = () => <Habilidades/>;
    const Curriculum = () => <Curriculo/>;
    const Contact = () => <Contato/>;
    
    return (
        <div>
            <div className="links">
                <Link to={`/`} className="link" onClick={() => setOpen(!isOpen)}>Home</Link>
                <Link to={`/about`} className="link" onClick={() => setOpen(!isOpen)}>About</Link>
                <Link to={`/skills`} className="link" onClick={() => setOpen(!isOpen)}>Skills</Link>
                <Link to={`/curriculum`} className="link" onClick={() => setOpen(!isOpen)}>Curriculum</Link>
                <Link to={`/contact`} className="link" onClick={() => setOpen(!isOpen)}>Contact</Link>
            </div>
            <div className="tabs">
                <Switch>
                    <Route path={`/about`} component={About} />
                    <Route path={`/skills`} component={Skills} />
                    <Route path={`/curriculum`} component={Curriculum} />
                    <Route path={`/contact`} component={Contact} />
                </Switch>
            </div>
        </div>
    )
}


export default TabsFooter;