import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useForm } from 'react-hook-form';
import Sidebar from '../../components/sidebar/Sidebar';
import './cadastroAnimal.css'

const CadastroAnimal = () => {
    const navigate = useNavigate(); 
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            navigate('/dashboard');
        } catch (error) {
            console.error('Erro ao cadastrar local:', error);
        }
    };

    return (
        <div>
             <Sidebar />
            <h2>Cadastro de Animal</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="animal">Animal:</label>
                    <input id="animal" {...register('animal', { required: true })} />
                </div>
                <div>
                    <label htmlFor="habitat ">Habitat:</label>
                    <input id="habitat " {...register('habitat ', { required: true })} />
                </div>
                <div>
                    <label htmlFor="caracteristica">Características do animal:</label>
                    <input id="caracteristica" {...register('caracteristica', { required: true })} />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroAnimal;

