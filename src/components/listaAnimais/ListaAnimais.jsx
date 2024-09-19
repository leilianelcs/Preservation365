import React, { useEffect, useState } from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import './listaAnimais.css';
import Sidebar from '../sidebar/Sidebar';

const AnimalItem = ({ animal }) => (
    <li key={animal.id}>
        <Link to={`/animal/${animal.id}`}>{animal.nome}</Link>
    </li>
);

const ListaAnimais = () => {
    const [animals, setAnimals] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        try {
            const storedAnimals = JSON.parse(localStorage.getItem('animals')) || [];
            setAnimals(storedAnimals);
        } catch (error) {
            console.error('Erro ao ler os dados do localStorage:', error);
        }
    }, []);

    const handleSubmit = () => {
        navigate(`/animal/novo`);
    };

    return (
        <div className="lista-animais-container">
            <Sidebar />
            <h2>Lista de Animais</h2>
            {animals.length === 0 ? (
                <p>
                    Nenhum animal cadastrado. 
                    <button onClick={handleSubmit} aria-label="Adicionar novo animal">Adicionar novo animal</button>
                </p>
            ) : (
                <ul>
                    {animals.map(animal => (
                        <AnimalItem key={animal.id} animal={animal} />
                    ))}
                </ul>
            )}
            {animals.length > 0 && (
                <button onClick={handleSubmit} aria-label="Adicionar novo animal">Adicionar novo animal</button>
            )}
        </div>
    );
};

export default ListaAnimais;
