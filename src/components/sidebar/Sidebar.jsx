import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { LogOut, Menu } from 'lucide-react';
import { useState } from 'react';
import './sidebar.css';

function Sidebar() {
    const { signOut } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <button className="sidebar-toggle" onClick={toggleSidebar} aria-label="Toggle Sidebar">
                <Menu size={24} />
            </button>
            <div className={`sidebar ${isOpen ? 'open' : ''}`} aria-expanded={isOpen}>
                <div className="logo-container">
                    <img className="logo" src="../public/images/logo-02.png" alt="Logo" />
                </div>
                <nav>
                    <Link to="/dashboard" onClick={handleLinkClick}>Home</Link>
                    <Link to="/usuario" onClick={handleLinkClick}>Dados Cadastrais</Link>
                    <Link to="/planta" onClick={handleLinkClick}>Cadastro de Plantas</Link>
                    <Link to="/animal" onClick={handleLinkClick}>Cadastro de Animais</Link>
                    <Link to="/lista" onClick={handleLinkClick}>Lista de Animais e Plantas</Link>
                </nav>
                <div className="logout-container">
                    <button className="btn btn-dark" onClick={signOut} aria-label="Sign Out">
                        <LogOut size={16} />
                        <span className="logout-text">Sair</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Sidebar;


