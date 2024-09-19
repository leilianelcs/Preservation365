import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';
import { useForm } from 'react-hook-form';

const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(password);
};

const clearLocalStorage = () => {
    localStorage.clear();
    alert('LocalStorage limpo!');
};

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
            const user = existingUsers.find(user => user.email === data.email && user.password === data.password);

            if (user) {
                if (data.rememberMe) {
                    localStorage.setItem('rememberedUser', JSON.stringify(user));
                }
                alert('Bem-vindo!');
                navigate('/dashboard');
            } else {
                alert('Email ou senha inválidos!');
            }
        } catch (error) {
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
                        autoComplete="email" // Adicionado
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
                            validate: {
                                validatePassword: value => validatePassword(value) || 'Senha deve ter ao menos 8 caracteres, incluindo letras e números'
                            }
                        })}
                        aria-invalid={errors.password ? "true" : "false"}
                        autoComplete="current-password" // Adicionado
                    />
                    {errors.password && <span role="alert">{errors.password.message}</span>}
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value="remember-me"
                        id="flexCheckDefault"
                        {...register('rememberMe')}
                    />
                    <label className="form-check-label" htmlFor="flexCheckDefault">
                        Lembrar-me
                    </label>
                </div>
                <button type="submit">Entrar</button>
                <p>
                    Ainda não tem cadastro? <Link to="/cadastro">Cadastre-se</Link>
                </p>
            </form>
            <button className="clear-button" onClick={clearLocalStorage}>
                Limpar LocalStorage
            </button>
        </div>
    );
};

export default LoginPage;
