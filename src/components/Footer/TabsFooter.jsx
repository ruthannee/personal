import React, { useState } from 'react';
import { NavLink, Switch, Route } from 'react-router-dom';
import Inicio from '../Home/Home';
import Sobre from '../About/About';
// import Habilidades from '../Skills/Skills';
import Curriculo from '../Curriculum/Curriculum';
import Contato from '../Contact/Contact';
import './TabsFooter.scss';

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
                <NavLink id="link" exact to={`/`} onClick={() => setOpen(!isOpen)} activeClassName="activeClass">Home</NavLink>
                <NavLink id="link" to={`/about`} onClick={() => setOpen(!isOpen)} activeClassName="activeClass">Sobre</NavLink>
                {/* <NavLink id="link" to={`/skills`} onClick={() => setOpen(!isOpen)} activeClassName="activeClass">Skills</NavLink> */}
                <NavLink id="link" to={`/curriculum`} onClick={() => setOpen(!isOpen)} activeClassName="activeClass">Currículo</NavLink>
                <NavLink id="link" to={`/contact`} onClick={() => setOpen(!isOpen)} activeClassName="activeClass">Contato</NavLink>
            </div>
            <div className="tabs">
                <Switch className="ov-hidden">
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