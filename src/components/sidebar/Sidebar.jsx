import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { LogOut, Menu } from 'lucide-react';
import { useState } from 'react';
import './sidebar.css';

function Sidebar() {
    const { signOut } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    const handleSignOut = () => {
        signOut();
        navigate('/login'); 
    };

    return (
        <>
            <button className="sidebar-toggle" onClick={toggleSidebar} aria-label="Toggle Sidebar">
                <Menu size={24} />
            </button>
            <div className={`sidebar ${isOpen ? 'open' : ''}`} aria-expanded={isOpen}>
                <div className="logo-container">
                    <img className="logo-sidebar" src="/images/logo-02.png" alt="Logo" />
                </div>
                <nav>
                    <Link to="/dashboard" onClick={handleLinkClick}>Home</Link>
                    <Link to="/cadastro" onClick={handleLinkClick}>Cadastro de Usuários</Link>
                    <Link to="/planta/nova" onClick={handleLinkClick}>Cadastro de Plantas</Link>
                    <Link to="/animal/novo" onClick={handleLinkClick}>Cadastro de Animais</Link>
                    <Link to="/animais" onClick={handleLinkClick}>Lista de Animais</Link>
                    <Link to="/plantas" onClick={handleLinkClick}>Lista de Plantas</Link>
                </nav>
                <div className="logout-container">
                    <button className="btn" onClick={handleSignOut} aria-label="Sign Out">
                        <LogOut size={16} />
                        <span className="logout-text">Sair</span>
                    </button>
                </div>
            </div>
        </>
    );
}

export default Sidebar;
