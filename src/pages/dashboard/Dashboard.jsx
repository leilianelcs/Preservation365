import React, { useEffect, useState } from 'react';
import { getLocais } from '../../services/localService';
import Sidebar from '../../components/sidebar/Sidebar';

const Dashboard = () => {
  const [locais, setLocais] = useState([]);

  useEffect(() => {
    const fetchLocais = async () => {
      const locais = await getLocais();
      setLocais(locais);
    };
    fetchLocais();
  }, []);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h2>Dashboard</h2>
        <div>
          <h3>Locais Cadastrados</h3>
          {locais.map(local => (
            <div key={local.id}>
              <h4>{local.nome}</h4>
              <p>{local.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
