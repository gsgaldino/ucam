import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../components/Header';
import ModulesSection from '../components/ModulesSection';
import Footer from '../components/Footer';

import heroe from '../../assets/heroe.jpg';

import './styles.css';
import './responsive.css';

export default function Homepage() {
  const gestaoContent = () => (
    <div className="Container">
      <Link to="/formacao-gerente-agil">Gerente Ágil</Link>
      <Link to="/formacao-digital-agile-thinking">Digital & Agile Thinking</Link>
      <Link to="/formacao-empreendedorismo-digital">Empreendedorismo Digital</Link>
    </div>
  )

  return (
    <div className="Homepage">
      <Header />

      <div className="Section">

        <div className="container">
          <div className="Modality">
            <span>100% online</span>
          </div>
          <h1>Bootcamps</h1>
          <p>Bootcamp é uma modalidade de ensino voltada para o aprendizado intensivo e imersivo do aluno sobre uma determinada área. Dessa forma, os participantes aprimoram suas habilidades ao colocar em prática os seus conhecimentos em dinâmicas em grupo e na solução de problemas.</p>

          <p>Além disso, os bootcamps preparam o profissional para o mercado de trabalho em um curto período de tempo. Outra vantagem da modalidade, é que não há restrições para se inscrever em um programa.</p>

          <h1>Conheça nossos cursos!</h1>
        </div>
        <div className="container">
          <img src={heroe} alt="Heroe" title="Heroe" />
        </div>
      </div>

      <ModulesSection
        title="Gestão e Inovação"
        content={gestaoContent()}
      />

      <Footer />
    </div>
  )
}
