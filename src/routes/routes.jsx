import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext'; 
import LoginPage from '../pages/loginPage/LoginPage'; 
import Dashboard from '../pages/dashboard/Dashboard'; 
import CadastroUsuario from '../pages/cadastroUsuario/CadastroUsuario';
import CadastroAnimal from '../pages/cadastroAnimal/CadastroAnimal';
import CadastroPlanta from '../pages/cadastroPlanta/CadastroPlanta';

const AppRoutes = () => (
  
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/usuario" element={<CadastroUsuario />} />
        <Route path="/animal" element={<CadastroAnimal />} />
        <Route path="/planta" element={<CadastroPlanta />} />    
        {/* <Route path="/locais" element={<ListagemLocais />} /> */}
      </Routes>
    </AuthProvider>
  
);

export default AppRoutes;
