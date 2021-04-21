import React from 'react';
import './styles.scss';

type Props = {
    text: string;
}

const Button = ({ text } : Props) => (
    
        <button className="btn-desafio">
            <p>{ text }</p>
        </button>
    
);

export default Button;