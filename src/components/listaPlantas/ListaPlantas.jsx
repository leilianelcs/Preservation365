import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './listaPlantas.css';
import Sidebar from '../sidebar/Sidebar';

const ListaPlantas = () => {
    const plants = JSON.parse(localStorage.getItem('plants')) || [];
    const navigate = useNavigate(); 

    const handleSubmit = () => {
        navigate(`/planta/nova`);
    };
   
    return (
        <div className="lista-plantas-container">
            <Sidebar />
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
            <button onClick={handleSubmit}>Adicionar nova planta</button>
        </div>
    );
};

export default ListaPlantas;
