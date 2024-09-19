import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './animalDetail.css';
import Sidebar from '../../components/sidebar/Sidebar';

const AnimalDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const animals = JSON.parse(localStorage.getItem('animals')) || [];
    const animal = animals.find(animal => animal.id === id);
    const loggedUserId = localStorage.getItem('loggedUserId'); // ID do usuário logado

    const handleDelete = () => {
        if (animal.usuarioId !== loggedUserId) { // Verifica se o usuário é o proprietário
            alert('Você não tem permissão para excluir este animal.');
            return;
        }

        const confirmDelete = window.confirm('Tem certeza que deseja excluir este animal?');
        if (confirmDelete) {
            const updatedAnimals = animals.filter(animal => animal.id !== id);
            localStorage.setItem('animals', JSON.stringify(updatedAnimals));
            alert('Animal excluído com sucesso!');
            navigate('/animais'); 
        }
    };

    const handleEdit = () => {
        navigate(`/editar/animal/${id}`);
    };

    const handleSubmit = () => {
        navigate(`/animal/novo`);
    };

    if (!animal) {
        return <div>Animal não encontrado</div>;
    }

    return (
        <div className="detail-container">
            <Sidebar />
            <h2>Detalhes do Animal</h2>
            <p><strong>Nome:</strong> {animal.nome}</p>
            <p><strong>Habitat:</strong> {animal.habitat}</p>
            <p><strong>Características:</strong> {animal.caracteristicas}</p>
            <button onClick={handleEdit} aria-label="Editar animal">Editar</button>
            <button onClick={handleDelete} aria-label="Excluir animal">Excluir</button>
            <button onClick={handleSubmit} aria-label="Adicionar novo animal">Adicionar novo animal</button>
        </div>
    );
};

export default AnimalDetail;

