import React from "react";
import './About.scss';

const About = () => (

    <div className="div-all">
        <h1 id="h1-title">Sobre</h1>
        <div className='div-left'>
        <p id="content">
            Meu nome é Ruth Anne, resido em Salvador-BA, tenho 26 anos e atualmente trabalho como desenvolvedora 
            front-end na <a id="ref" href="https://solutis.com.br/" rel="noopener noreferrer" target="_blank">Solutis Tecnologias</a>. 
            Sou tecnóloga em Análise e Desenvolvimento de Sistemas (2017) e bacharela em Engenharia de Software (2020), pela <a id="ref"
            href="https://www.ucsal.br/" rel="noopener noreferrer" target="_blank"> Universidade Católica do Salvador - UCSAL</a>.
        </p>
        <br/>
        <p id="content">
            Ainda na universidade, desenvolvi uma paixão pela área de Ciências de Dados, na qual tenho projetos e dedicação 
            no tempo livre, focando também em tecnologias que envolvam Machine Learning.
        </p>
        <br/>
        <p id="content">
            Sou uma pessoa bem organizada, proativa, detalhista, naturalmente curiosa e me empenho perpetuamente para melhorar 
            as minhas habilidades. Tenho dois gatos (Lunna e Kowalski), amo viajar e sou apaixonada por quadrinhos.
        </p>
        <br/>
        <p id="content">
            Caso eu possa te ajudar em algo, <a id="ref" rel="noopener noreferrer" href='/contact'>pode me chamar</a>!
        </p>
        </div>
    </div>
);

export default About;