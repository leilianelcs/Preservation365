import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useForm } from 'react-hook-form';
import Sidebar from '../../components/sidebar/Sidebar';
import './cadastroAnimal.css';

const CadastroAnimal = () => {
    const navigate = useNavigate(); 
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [notification, setNotification] = useState('');

    const onSubmit = async (data) => {
        try {
            const existingAnimals = JSON.parse(localStorage.getItem('animals')) || [];

            // Verifica se o nome do animal já existe
            const animalExists = existingAnimals.some(animal => animal.nome === data.nome);
            if (animalExists) {
                setNotification('Nome do animal já cadastrado!');
                return;
            }

            // Verifica se o limite de 100 animais foi atingido
            if (existingAnimals.length >= 100) {
                setNotification('Você atingiu o limite de 100 animais cadastrados!');
                return;
            }

            // Captura o ID do usuário logado
            const loggedUserId = localStorage.getItem('loggedUserId'); // Certifique-se de que este valor esteja disponível

            // Gera um ID único para o novo animal e inclui o usuarioId
            const newAnimal = { ...data, id: Date.now().toString(), usuarioId: loggedUserId };

            // Adiciona o novo animal ao armazenamento local
            existingAnimals.push(newAnimal);
            localStorage.setItem('animals', JSON.stringify(existingAnimals));

            setNotification('Animal cadastrado com sucesso!');
            reset(); // Limpa o formulário
            navigate(`/animais`); // Redireciona para a lista de animais
        } catch (error) {
            console.error('Erro ao cadastrar animal:', error);
            setNotification('Erro ao cadastrar animal. Por favor, tente novamente.');
        }
    };

    return (
        <div>
            <Sidebar />
            <img className="logo" src="/images/logo-02.png" alt="Logo" />
            <h2>Cadastro de Animal</h2>
            {notification && <div aria-live="polite" className="notification">{notification}</div>}
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

