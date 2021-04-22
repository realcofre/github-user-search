import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'core/components/Button/Index';
import { makeRequest } from 'core/utils/request';
import './styles.scss';
import InfoLoader from './components/Loaders/InfoLoader';
import ImageLoader from './components/Loaders/ImageLoader';
import { User } from 'core/types/UserInfo/UserInfo';

const Search = () => {

    const [userName, setUserName] = useState("");
    const [user, setUser] = useState<User>()
    const [isLoading, setIsLoading] = useState(false)


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()

        setIsLoading(true);
        makeRequest({ url: `/users/${userName}` })
            .then(response => {
                setUser(response.data)})
            .finally(() => {
                setIsLoading(false);
            },)
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="search-container">
                    <div className="search-content">
                        <div className="row">
                            <h1 className="search-title">Encontre um perfil Github</h1>
                        </div>
                        <div className="row">
                            <input
                                placeholder="Usuário Github"
                                value={userName}
                                name="username"
                                type="text"
                                className="search-input"
                                onChange={(e) => {
                                    setUserName(e.target.value)
                                }}
                            />
                        </div>
                        <div className="row">
                            <Button text="Encontrar" />
                        </div>
                    </div>

                </div>
            </form>
                <div className="info-container">
                    <div className="info-content">
                        <div className="user-info">
                            <ImageLoader />
                            <InfoLoader />
                        </div>
                    </div>
                    
                </div>
                
            


            
        </>
    )
}

export default Search;