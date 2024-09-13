import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './plantaDetail.css';
import Sidebar from '../../components/sidebar/Sidebar';

const PlantaDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const plants = JSON.parse(localStorage.getItem('plants')) || [];
    const plant = plants.find(plant => plant.id === id);

    const handleDelete = () => {
        const updatedPlants = plants.filter(plant => plant.id !== id);
        localStorage.setItem('plants', JSON.stringify(updatedPlants));
        alert('Planta excluída com sucesso!');
        navigate('/dashboard');
    };

    const handleEdit = () => {
        navigate(`/editar/planta/${id}`);
    };

    if (!plant) {
        return <div>Planta não encontrada</div>;
    }

    return (
        <div className="detail-container">
            <Sidebar />
            <h2>Detalhes da Planta</h2>
            <p><strong>Nome:</strong> {plant.planta}</p>
            <p><strong>Habitat:</strong> {plant.habitat}</p>
            <p><strong>Descrição:</strong> {plant.descricao}</p>
            <button onClick={handleEdit}>Editar</button>
            <button onClick={handleDelete}>Excluir</button>
        </div>
    );
};

export default PlantaDetail;
