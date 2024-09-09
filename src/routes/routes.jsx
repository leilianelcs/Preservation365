import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext'; 
import LoginPage from '../pages/loginPage/LoginPage'; 
import Dashboard from '../pages/dashboard/Dashboard'; 
import CadastroLocal from '../pages/cadastroLocal/CadastroLocal'; 
import ListagemLocais from '../pages/listagemLocais/ListagemLocais'; 
import CadastroUsuario from '../pages/cadastroUsuario/CadastroUsuario';

const AppRoutes = () => (
  
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/local" element={<CadastroLocal />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/usuario" element={<CadastroUsuario />} />
        <Route path="/locais" element={<ListagemLocais />} />
      </Routes>
    </AuthProvider>
  
);

export default AppRoutes;
