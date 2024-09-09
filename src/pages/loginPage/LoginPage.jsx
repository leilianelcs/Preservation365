import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';
import { useAuth } from '../../contexts/AuthContext';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    const { signIn } = useAuth();
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            if (!data.email || !data.password) {
                alert('Favor preencher todos os campos');
                return;
            }

            const isSuccess = await signIn(data);

            if (isSuccess) {
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
            <div className='image-container'>
                <img src="./images/logo-02.jpg" alt="Imagem de fundo" />
            </div>
            <div className='login-container'>
                <img className='logo' src="./images/logo-02.jpg" alt="Logo" />
                <div className='login-area'>
                    <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
                        <h1>Efetuar login</h1>
                        <div>
                            <label htmlFor="floatingInput">Email</label>
                            <input
                                type="email"
                                id="floatingInput"
                                placeholder="nome@exemplo.com"
                                {...register('email', { required: true })}
                            />
                        </div>
                        <div>
                            <label htmlFor="floatingPassword">Senha</label>
                            <input
                                type="password"
                                id="floatingPassword"
                                placeholder="Senha"
                                {...register('password', { required: true })}
                            />
                        </div>
                        <button type="submit">Entrar</button>
                        <p>
                            Ainda não tem cadastro? <Link to="/usuario">Cadastre-se</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;


