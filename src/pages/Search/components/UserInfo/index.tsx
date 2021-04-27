import React from 'react';
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
}


const UserInfo = ({foto, empresa, site, localidade, membro_desde, numero_repositorios, numero_seguidores, numero_seguindo}: Props) => (
    <div className="row">
        <div className="user-foto">
            <img src={foto} alt=""/>
        </div>
        <div className="user-repositorios">
            <div className="user-numero-repositorios">
                Repositórios públicos: {numero_repositorios ? numero_repositorios : 0}
            </div>
            <div className="user-seguidores">
                Sequidores: {numero_seguidores}
            </div>
            <div className="user-seguindo">
                Seguindo: {numero_seguindo}
            </div>
        </div>
        <div className="user-infor">
            <h2 className="user-info-title">
                Informações
            </h2>
            <div className="user-info-detalhe">
                Empresa: {empresa}
            </div>
            <div className="user-info-detalhe">
                Website/Blog: {site}
            </div>
            <div className="user-info-detalhe">
                Localidade: {localidade}
            </div>
            <div className="user-info-detalhe">
                Membro desde: {membro_desde}
            </div>

        </div>
    </div>
);

export default UserInfo;