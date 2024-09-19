import React from 'react';
import { useForm } from 'react-hook-form';
import '../../pages/SignUp/signUp.css';

export const SignUpForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = existingUsers.find(user => user.email === data.email);
            if (userExists) {
                alert('Email já cadastrado!');
                return;
            }

            existingUsers.push(data);
            localStorage.setItem('users', JSON.stringify(existingUsers));
            alert('Cadastro realizado com sucesso!');
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error);
            alert('Erro ao cadastrar. Tente novamente.');
        }
    };

    return (
        <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    id="name"
                    {...register('name', { required: 'Nome é obrigatório' })}
                    autoComplete="name" 
                />
                {errors.name && <span role="alert">{errors.name.message}</span>}
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    {...register('email', { required: 'Email é obrigatório' })}
                    autoComplete="email" 
                />
                {errors.email && <span role="alert">{errors.email.message}</span>}
            </div>
            <div>
                <label htmlFor="password">Senha:</label>
                <input
                    type="password"
                    id="password"
                    {...register('password', {
                        required: 'Senha é obrigatória',
                        minLength: { value: 8, message: 'A senha deve ter pelo menos 8 caracteres' }
                    })}
                    autoComplete="new-password" 
                />
                {errors.password && <span role="alert">{errors.password.message}</span>}
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    );
};
