import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useForm } from 'react-hook-form';
import Sidebar from '../../components/sidebar/Sidebar';

const CadastroUsuario = () => {
    const navigate = useNavigate(); 
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        try {
            navigate('/dashboard');
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
        }
    };

    return (
        <div>
             <Sidebar />
            <h2>Cadastro de Usuário</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="usuario">Nome Completo:</label>
                    <input id="usuario" placeholder="Nome completo"{...register('usuario', { required: true })} />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input id="email" placeholder="seu@email.com" {...register('email', { required: true })} />
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input id="password" placeholder="Senha"{...register('password', { required: true })} />
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroUsuario;

