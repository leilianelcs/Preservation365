import React, { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';
import { api, fetchLocalidades, fetchLocationsByUser } from '../services/api';


export const AuthContext = createContext({
    user: null,
    signIn: async () => { },
    signOut: async () => { },
});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        const userLogged = localStorage.getItem('@preservation365:user');
        return userLogged ? JSON.parse(userLogged) : null; 
    });

    async function signIn({ email, password }) {
        try {
            if (!email || !password) {
                console.error('Email ou senha incorretos');
                return false;
            }

            const response = await api.get(`/users?email=${encodeURIComponent(email)}`);

            if (response.status !== 200) {
                console.error('Erro na resposta da API:', response.statusText);
                return false;
            }

            const data = response.data;

            if (data.length > 0) {
                const user = data[0];
                if (user.senha === password) { 
                    setUser(user); 
                    localStorage.setItem('@preservation365:user', JSON.stringify(user)); 

                    return true;
                } else {
                    console.warn('Senha incorreta');
                    return false;
                }
            } else {
                console.warn('Usuário não encontrado');
                return false;
            }
        } catch (error) {
            console.error('Erro na autenticação:', error);
            return false;
        }
    }

    function signOut() {
        setUser(null);
        localStorage.removeItem('@preservation365:user');
    }

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
