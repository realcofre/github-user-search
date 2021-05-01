import userEvent from '@testing-library/user-event';
import Button from 'core/components/Button/Index';
import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

type Props = {
    foto?: string;
    empresa?: string;
    site?: string;
    localidade?: string;
    membro_desde?: string;
    numero_repositorios?: number;
    numero_seguidores?: number;
    numero_seguindo?: number;
    url?: string;
}


const UserInfo = ({ foto, empresa, site, localidade, membro_desde, numero_repositorios, numero_seguidores, numero_seguindo, url }: Props) => (
    <div className="content-user-info">
        <div className="user-foto">
            <img src={foto} alt="avatar" className="user-img" />
            <a href={url} style={{ textDecoration: 'none' }}>
                <Button text="Ver perfil" />
            </a>
        </div>
        <div className="content-info">
            <div className="user-repositorios">
                <div className="user-numero">
                    Repositórios públicos:&nbsp;{numero_repositorios ? numero_repositorios : 0}
                </div>
                <div className="user-numero">
                    Sequidores:&nbsp;{numero_seguidores}
                </div>
                <div className="user-numero">
                    Seguindo:&nbsp;{numero_seguindo}
                </div>
            </div>
            <div className="user-infor">
                <h2 className="user-info-title">
                    Informações
                </h2>
                <div className="user-info-detalhe user-info-item">
                    <strong>Empresa:&nbsp;</strong> {empresa}
                </div>
                <div className="user-info-detalhe user-info-item">
                    <strong>Website/Blog:&nbsp;</strong> {site}
                </div>
                <div className="user-info-detalhe user-info-item">
                    <strong>Localidade:&nbsp;</strong> {localidade}
                </div>
                <div className="user-info-detalhe user-info-item">
                    <strong>Membro desde:&nbsp;</strong> {membro_desde}
                </div>
            </div>

        </div>
    </div>
);

export default UserInfo;