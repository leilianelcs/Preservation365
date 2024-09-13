import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Sidebar from '../../components/sidebar/Sidebar';
import './editarAnimal.css';

const EditarAnimal = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [animal, setAnimal] = useState(null);

    useEffect(() => {
        const animals = JSON.parse(localStorage.getItem('animals')) || [];
        const animalToEdit = animals.find(animal => animal.id === id);
        if (animalToEdit) {
            setAnimal(animalToEdit);
            setValue('nome', animalToEdit.nome);
            setValue('habitat', animalToEdit.habitat);
            setValue('caracteristicas', animalToEdit.caracteristicas);
        }
    }, [id, setValue]);

    const onSubmit = (data) => {
        try {
            const animals = JSON.parse(localStorage.getItem('animals')) || [];
            const updatedAnimals = animals.map(animal => animal.id === id ? { ...animal, ...data } : animal);
            localStorage.setItem('animals', JSON.stringify(updatedAnimals));
            alert('Animal atualizado com sucesso!');
            navigate(`/animal/${id}`);
        } catch (error) {
            console.error('Erro ao atualizar animal:', error);
            alert('Erro ao atualizar animal. Por favor, tente novamente.');
        }
    };

    if (!animal) {
        return <div>Animal não encontrado</div>;
    }

    return (
        <div>
            <Sidebar />
            <h2>Editar Animal</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="nome">Nome do Animal:</label>
                    <input
                        id="nome"
                        {...register('nome', {
                            required: 'Nome do animal é obrigatório',
                            maxLength: {
                                value: 100,
                                message: 'Nome do animal não deve ultrapassar 100 caracteres'
                            }
                        })}
                    />
                    {errors.nome && <span role="alert">{errors.nome.message}</span>}
                </div>
                <div>
                    <label htmlFor="habitat">Habitat:</label>
                    <select id="habitat" {...register('habitat', { required: 'Habitat é obrigatório' })}>
                        <option value="">Selecione o habitat</option>
                        <option value="floresta">Floresta</option>
                        <option value="cerrado">Cerrado</option>
                        <option value="savana">Savana</option>
                        <option value="pantano">Pântano</option>
                        <option value="deserto">Deserto</option>
                    </select>
                    {errors.habitat && <span role="alert">{errors.habitat.message}</span>}
                </div>
                <div>
                    <label htmlFor="caracteristicas">Características do Animal:</label>
                    <textarea
                        id="caracteristicas"
                        {...register('caracteristicas', {
                            maxLength: {
                                value: 500,
                                message: 'Características não devem ultrapassar 500 caracteres'
                            }
                        })}
                    />
                    {errors.caracteristicas && <span role="alert">{errors.caracteristicas.message}</span>}
                </div>
                <button type="submit">Salvar</button>
            </form>
        </div>
    );
};

export default EditarAnimal;
