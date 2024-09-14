import React from 'react';
import { Link } from 'react-router-dom';
import './listaAnimais.css';

const ListaAnimais = () => {
    const animals = JSON.parse(localStorage.getItem('animals')) || [];

    return (
        <div className="lista-animais-container">
            <h2>Lista de Animais</h2>
            {animals.length === 0 ? (
                <p>Nenhum animal cadastrado.</p>
            ) : (
                <ul>
                    {animals.map(animal => (
                        <li key={animal.id}>
                            <Link to={`/animal/${animal.id}`}>{animal.nome}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ListaAnimais;
