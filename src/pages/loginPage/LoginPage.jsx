import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';
import { useForm } from 'react-hook-form';

const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
};

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            // Busca os usuários cadastrados no localStorage
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
            // Verifica se o usuário existe e se a senha está correta
            const user = existingUsers.find(user => user.email === data.email && user.password === data.password);

            if (user) {
                // Simulação de login bem-sucedido
                alert('Bem-vindo!');
                navigate('/dashboard');
            } else {
                alert('Email ou senha inválidos!');
            }
        } catch (error) {
            alert('Erro ao efetuar o login');
            console.error('Error during sign in process:', error);
        }
    };

    return (
        <div className='login-page'>
            <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                <img className='logo-login' src="/images/logo-02.png" alt="Logo" />
                <h1>Efetuar login</h1>
                <div>
                    <label htmlFor="floatingInput">Email:</label>
                    <input
                        type="email"
                        id="floatingInput"
                        placeholder="nome@exemplo.com"
                        {...register('email', { required: 'Email é obrigatório' })}
                        aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email && <span role="alert">{errors.email.message}</span>}
                </div>
                <div>
                    <label htmlFor="floatingPassword">Senha:</label>
                    <input
                        type="password"
                        id="floatingPassword"
                        placeholder="Senha"
                        {...register('password', {
                            required: 'Senha é obrigatória',
                            validate: validatePassword || 'Senha deve ter ao menos 8 caracteres, incluindo letras e números'
                        })}
                        aria-invalid={errors.password ? "true" : "false"}
                    />
                    {errors.password && <span role="alert">{errors.password.message}</span>}
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Lembrar-me
                    </label>
                </div>
                <button type="submit">Entrar</button>
                <p>
                    Ainda não tem cadastro? <Link to="/cadastro">Cadastre-se</Link>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;
