import React from 'react';
import { Link } from 'react-router-dom';
import './listaPlantas.css';

const ListaPlantas = () => {
    const plants = JSON.parse(localStorage.getItem('plants')) || [];

    return (
        <div className="lista-plantas-container">
            <h2>Lista de Plantas</h2>
            {plants.length === 0 ? (
                <p>Nenhuma planta cadastrada.</p>
            ) : (
                <ul>
                    {plants.map(plant => (
                        <li key={plant.id}>
                            <Link to={`/planta/${plant.id}`}>{plant.planta}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ListaPlantas;
