import Button from 'core/components/Button/Index';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Search = () => (
    <div className="search-container">
        <div className="search-content">
            <div className="row">
                <h1 className="search-title">Encontre um perfil Github</h1>
            </div>
            <div className="row">
                <input
                    placeholder="Usuário Github"
                    //value={}
                    name="username"
                    type="text"
                    className="search-input"
                //onChange={}
                />
            </div>
            <div className="row">
            <Link to="/search" style={{ textDecoration: 'none' }}>
                <Button text="Encontrar" />
            </Link>
            </div>
        </div>

    </div>
);

export default Search;