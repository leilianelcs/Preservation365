import React from 'react';
import '../../pages/SignUp/signUp.css';

const SignForm = () => {
    return (
        <form>
            {/* Campos do formulário de cadastro */}
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" required />
            </div>
            <div>
                <label htmlFor="password">Senha:</label>
                <input type="password" id="password" required />
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    );
};

export default SignForm;
