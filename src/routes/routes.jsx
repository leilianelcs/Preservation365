import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from '../contexts/AuthContext'; 
import LoginPage from '../pages/loginPage/LoginPage'; 
import Dashboard from '../pages/dashboard/Dashboard'; 
import CadastroUsuario from '../pages/cadastroUsuario/CadastroUsuario';
import CadastroAnimal from '../pages/cadastroAnimal/CadastroAnimal';
import CadastroPlanta from '../pages/cadastroPlanta/CadastroPlanta';
import AnimalDetail from '../pages/animalDetalhes/AnimalDetail';
import EditarAnimal from '../pages/editarAnimal/EditarAnimal';
import PlantaDetail from '../pages/detalhePlanta/PlantaDetail';
import EditarPlanta from '../pages/editarPlanta/EditarPlanta';

const AppRoutes = () => (
  
    <AuthProvider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cadastro" element={<CadastroUsuario />} />
        <Route path="/animal/novo" element={<CadastroAnimal />} />
        <Route path="/planta/nova" element={<CadastroPlanta />} />    
        {/* <Route path="/plantas" element={<ListaPlantas />} /> */}
        <Route path="/planta/:id" element={<PlantaDetail />} />
        {/* <Route path="/animais" element={<ListaAnimais />} /> */}
        <Route path="/animal/:id" element={<AnimalDetail />} />
        <Route path="/editar/animal/:id" element={<EditarAnimal />} /> 
        <Route path="/editar/planta/:id" element={<EditarPlanta />} /> 
      </Routes>
    </AuthProvider>
  
);

export default AppRoutes;