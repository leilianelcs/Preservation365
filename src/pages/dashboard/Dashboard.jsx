import React from 'react';
import Sidebar from '../../components/sidebar/Sidebar';
import './dashboard.css';
import ListaAnimais from '../../components/listaAnimais/ListaAnimais';
import ListaPlantas from '../../components/listaPlantas/ListaPlantas';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <Sidebar />
            <div className="content">
                <div className="header">
                    <h1>Dashboard</h1>
                    <img className="logo-dashboard" src="/images/logo-02.png" alt="Logo" />
                </div>
                <div>
                    <img 
                        className="fundo-dashboard" 
                        src="/images/img-planta-02.jpg" 
                        alt="Imagem decorativa de planta" 
                    />
                </div>
                <div className="listas">
                    <div className="lista-animais-container">
                        <ListaAnimais />
                    </div>
                    <div className="lista-plantas-container">
                        <ListaPlantas />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
