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

            
            const plantExists = existingPlants.some(plant => plant.planta === data.planta);
            if (plantExists) {
                alert('Nome da planta já cadastrado!'); 
                return;
            }

            
            if (existingPlants.length >= 100) {
                alert('Você atingiu o limite de 100 plantas cadastradas!'); 
                return;
            }

            
            const loggedUserId = localStorage.getItem('loggedUserId'); 

            // Gera um ID único para a nova planta e inclui o usuarioId
            const newPlant = { ...data, id: Date.now().toString(), usuarioId: loggedUserId };

            
            existingPlants.push(newPlant);
            localStorage.setItem('plants', JSON.stringify(existingPlants));

            alert('Planta cadastrada com sucesso!'); 
            navigate(`/planta/${newPlant.id}`); 
        } catch (error) {
            console.error('Erro ao cadastrar planta:', error);
            alert('Erro ao cadastrar planta. Por favor, tente novamente.'); 
        }
    };

    return (
        <div>
            <Sidebar />
            <img className="logo" src="/images/logo-02.png" alt="Logo" />
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
                        aria-invalid={errors.planta ? "true" : "false"} 
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
                    <label htmlFor="descricao">Descrição da Planta:</label>
                    <textarea
                        id="descricao"
                        {...register('descricao', {
                            maxLength: {
                                value: 500,
                                message: 'Descrição não deve ultrapassar 500 caracteres'
                            }
                        })}
                        aria-invalid={errors.descricao ? "true" : "false"} 
                    />
                    {errors.descricao && <span role="alert">{errors.descricao.message}</span>}
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroPlanta;
