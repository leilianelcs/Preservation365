import React, { useEffect, useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import './listaPlantas.css';
import Sidebar from '../sidebar/Sidebar';

const PlantaItem = ({ plant }) => (
    <li key={plant.id}>
        <Link to={`/planta/${plant.id}`}>{plant.planta}</Link>
    </li>
);

const ListaPlantas = () => {
    const [plants, setPlants] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        try {
            const storedPlants = JSON.parse(localStorage.getItem('plants')) || [];
            setPlants(storedPlants);
        } catch (error) {
            console.error('Erro ao ler os dados do localStorage:', error);
        }
    }, []);

    const handleSubmit = () => {
        navigate(`/planta/nova`);
    };

    return (
        <div className="lista-plantas-container">
            <Sidebar />
            <h2>Lista de Plantas</h2>
            {plants.length === 0 ? (
                <p>
                    Nenhuma planta cadastrada. 
                    <button onClick={handleSubmit} aria-label="Adicionar nova planta">Adicionar nova planta</button>
                </p>
            ) : (
                <ul>
                    {plants.map(plant => (
                        <PlantaItem key={plant.id} plant={plant} />
                    ))}
                </ul>
            )}
            {plants.length > 0 && (
                <button onClick={handleSubmit} aria-label="Adicionar nova planta">Adicionar nova planta</button>
            )}
        </div>
    );
};

export default ListaPlantas;
