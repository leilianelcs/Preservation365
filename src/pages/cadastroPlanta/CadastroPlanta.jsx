import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useForm } from 'react-hook-form';
import Sidebar from '../../components/sidebar/Sidebar';

const CadastroPlanta = () => {
    const navigate = useNavigate(); 
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            navigate('/dashboard');
        } catch (error) {
            console.error('Erro ao cadastrar planta:', error);
        }
    };

    return (
        <div>
             <Sidebar />
            <h2>Cadastro de Plantas</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="planta">Nome da Planta:</label>
                    <input id="planta" {...register('planta', { required: true })} />
                </div>
                <div>
                    <label htmlFor="habitat">Habitat:</label>
                    <input id="habitat" {...register('habitat', { required: true })} />
                </div>
                <div>
                    <label htmlFor="descricao">Descrição da planta:</label>
                    <input id="descricao" {...register('descricao', { required: true })} />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroPlanta;

