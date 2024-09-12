import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useForm } from 'react-hook-form';
import Sidebar from '../../components/sidebar/Sidebar';
import './cadastroAnimal.css';

const CadastroAnimal = () => {
    const navigate = useNavigate(); 
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const existingAnimals = JSON.parse(localStorage.getItem('animals')) || [];

            // Verifica se o nome do animal já existe
            const animalExists = existingAnimals.some(animal => animal.nome === data.nome);
            if (animalExists) {
                alert('Nome do animal já cadastrado!');
                return;
            }

            // Verifica se o limite de 100 animais foi atingido
            if (existingAnimals.length >= 100) {
                alert('Você atingiu o limite de 100 animais cadastrados!');
                return;
            }

            // Adiciona o novo animal ao armazenamento local
            existingAnimals.push(data);
            localStorage.setItem('animals', JSON.stringify(existingAnimals));

            alert('Animal cadastrado com sucesso!');
            navigate('/dashboard');
        } catch (error) {
            console.error('Erro ao cadastrar animal:', error);
            alert('Erro ao cadastrar animal. Por favor, tente novamente.');
        }
    };

    return (
        <div>
            <Sidebar />
            <h2>Cadastro de Animal</h2>
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
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroAnimal;
