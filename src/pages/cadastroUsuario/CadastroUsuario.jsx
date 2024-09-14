import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import { useForm } from 'react-hook-form';
import './cadastroUsuario.css';

const validateCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]+/g, '');
    if (cpf.length !== 11) return false;
    let sum = 0;
    let remainder;
    for (let i = 1; i <= 9; i++) sum += parseInt(cpf.substring(i-1, i)) * (11 - i);
    remainder = (sum * 10) % 11;
    if ((remainder === 10) || (remainder === 11)) remainder = 0;
    if (remainder !== parseInt(cpf.substring(9, 10))) return false;
    sum = 0;
    for (let i = 1; i <= 10; i++) sum += parseInt(cpf.substring(i-1, i)) * (12 - i);
    remainder = (sum * 10) % 11;
    if ((remainder === 10) || (remainder === 11)) remainder = 0;
    if (remainder !== parseInt(cpf.substring(10, 11))) return false;
    return true;
};

const formatCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]/g, '');
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
};


const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
};

const CadastroUsuario = () => {
    const navigate = useNavigate(); 
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
            const userExists = existingUsers.some(user => user.cpf === data.cpf || user.email === data.email);
            if (userExists) {
                alert('CPF ou E-mail já cadastrado!');
                return;
            }

            existingUsers.push(data);
            localStorage.setItem('users', JSON.stringify(existingUsers));

            alert('Usuário cadastrado com sucesso!');
            navigate('/dashboard');
        } catch (error) {
            alert('Erro ao cadastrar usuário. Por favor, tente novamente.');
            console.error('Erro ao cadastrar usuário:', error);
        }
    };

    return (
        <div>
            <img className="logo" src="/images/logo-02.png" alt="Logo" />
            <h2>Cadastro de Usuário</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="usuario">Nome Completo:</label>
                    <input
                        id="usuario"
                        placeholder="Nome completo"
                        {...register('usuario', { required: 'Nome completo é obrigatório' })}
                    />
                    {errors.usuario && <span role="alert">{errors.usuario.message}</span>}
                </div>
                <div>
    <label htmlFor="cpf">CPF:</label>
    <input
        id="cpf"
        placeholder="CPF"
        {...register('cpf', {
            required: 'CPF é obrigatório',
            validate: validateCPF || 'CPF inválido',
            onChange: (e) => e.target.value = formatCPF(e.target.value)
        })}
    />
    {errors.cpf && <span role="alert">{errors.cpf.message}</span>}
</div>

                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        id="email"
                        placeholder="seu@email.com"
                        {...register('email', {
                            required: 'Email é obrigatório',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Email inválido'
                            }
                        })}
                    />
                    {errors.email && <span role="alert">{errors.email.message}</span>}
                </div>
                <div>
                    <label htmlFor="password">Senha:</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Senha"
                        {...register('password', {
                            required: 'Senha é obrigatória',
                            validate: validatePassword || 'Senha deve ter ao menos 8 caracteres, incluindo letras e números'
                        })}
                        aria-invalid={errors.password ? "true" : "false"}
                    />
                    {errors.password && <span role="alert">{errors.password.message}</span>}
                </div>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default CadastroUsuario;
