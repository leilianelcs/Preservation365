import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './listaAnimais.css';
import Sidebar from '../sidebar/Sidebar';

const ListaAnimais = () => {
    const animals = JSON.parse(localStorage.getItem('animals')) || [];
    const navigate = useNavigate(); 

    const handleSubmit = () => {
        navigate(`/animal/novo`);
    };
   
    return (
        <div className="lista-animais-container">
            <Sidebar />
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
             <button onClick={handleSubmit}>Adicionar novo animal</button>
        </div>
    );
};

export default ListaAnimais;
