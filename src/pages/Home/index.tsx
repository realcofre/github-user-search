import Button from 'core/components/Button/Index';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Home = () => (
    <div className="home-container">
        <div className="home-content">
            <h1 className="home-title">Desafio do Capítulo 3, <br />Bootcamp DevSuperior</h1>
            <p className="home-text">Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.</p>
            <p className="home-text">Favor observar as instruções passadas no capítulo sobre a elaboração deste projeto.</p>
            <p className="home-text"> Este design foi adaptado a partir de Ant Design System for Figma, de Mateusz Wierzbicki: 
            <a href="mailto:antforfigma@gmail.com" className="home-link"> antforfigma@gmail.com</a></p>
            <div className="btn-start">
                <Link to="/search" style={{ textDecoration: 'none' }}>
                    <Button text="Começar" />
                </Link>
            </div>
        </div>
    </div>
);

export default Home;