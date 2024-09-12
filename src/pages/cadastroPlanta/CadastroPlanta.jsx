import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useForm } from 'react-hook-form';
import Sidebar from '../../components/sidebar/Sidebar';
import './cadastroPlanta.css';

const CadastroPlanta = () => {
    const navigate = useNavigate(); 
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const existingPlants = JSON.parse(localStorage.getItem('plants')) || [];

            // Verifica se o nome da planta já existe
            const plantExists = existingPlants.some(plant => plant.planta === data.planta);
            if (plantExists) {
                alert('Nome da planta já cadastrado!');
                return;
            }

            // Verifica se o limite de 100 plantas foi atingido
            if (existingPlants.length >= 100) {
                alert('Você atingiu o limite de 100 plantas cadastradas!');
                return;
            }

            // Adiciona a nova planta ao armazenamento local
            existingPlants.push(data);
            localStorage.setItem('plants', JSON.stringify(existingPlants));

            alert('Planta cadastrada com sucesso!');
            navigate('/dashboard');
        } catch (error) {
            console.error('Erro ao cadastrar planta:', error);
            alert('Erro ao cadastrar planta. Por favor, tente novamente.');
        }
    };

    return (
        <div>
            <Sidebar />
            <h2>Cadastro de Plantas</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="planta">Nome da Planta:</label>
                    <input
                        id="planta"
                        {...register('planta', {
                            required: 'Nome da planta é obrigatório',
                            maxLength: {
                                value: 100,
                                message: 'Nome da planta não deve ultrapassar 100 caracteres'
                            }
                        })}
                    />
                    {errors.planta && <span role="alert">{errors.planta.message}</span>}
                </div>
                <div>
                    <label htmlFor="habitat">Habitat:</label>
                    <select id="habitat" {...register('habitat', { required: 'Habitat é obrigatório' })}>
                        <option value="">Selecione o habitat</option>
                        <option value="floresta">Floresta</option>
                        <option value="cerrado">Cerrado</option>
                        <option value="pantano">Pântano</option>
                        <option value="deserto">Deserto</option>
                    </select>
                    {errors.habitat && <span role="alert">{errors.habitat.message}</span>}
                </div>
                <div>
                    <label htmlFor="descricao">Descrição da planta:</label>
                    <textarea
                        id="descricao"
                        {...register('descricao', {
                            maxLength: {
                                value: 500,
                                message: 'Descrição não deve ultrapassar 500 caracteres'
                            }
                        })}
                    />
                    {errors.descricao && <span role="alert">{errors.descricao.message}</span>}
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroPlanta;
