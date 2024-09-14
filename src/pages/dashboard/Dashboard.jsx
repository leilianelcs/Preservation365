import React, { useEffect, useState } from 'react';
import { getPlantas } from '../../services/plantasService';
import Sidebar from '../../components/sidebar/Sidebar';

const Dashboard = () => {
  const [plantas, setPlantas] = useState([]);

  useEffect(() => {
    const fetchPlantas = async () => {
      const plantas = await getPlantas();
      console.log(plantas);
      setPlantas(plantas);
    };
    fetchPlantas();
  }, []);

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className="dashboard-content">
        <h2>Dashboard</h2>
        <div>
          <h3>Plantas Cadastradas</h3>
          {plantas.map(planta => (
            <div key={planta.id}>
              <h4>{planta.planta}</h4>
              <p>{planta.habitat}</p>
              <p>{planta.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;



// import React, { useEffect, useState } from 'react';
// import { getPlantas } from '../../services/plantasService';
// import Sidebar from '../../components/sidebar/Sidebar';

// const Dashboard = () => {
//   const [plantas, setPlantas] = useState([]);

//   useEffect(() => {
//     const fetchPlantas = async () => {
//       const plantas = await getPlantas();
//       setPlantas(plantas);
//     };
//     fetchPlantas();
//   }, []);

//   return (
//     <div className="dashboard-container">
//       <Sidebar />
//       <div className="dashboard-content">
//         <h2>Dashboard</h2>
//         <div>
//           <h3>Plantas Cadastradas</h3>
//           {plantas.map(planta => (
//             <div key={planta.id}>
//               <h4>{planta.nome}</h4>
//               <p>{planta.habitat}</p>
//               <p>{planta.descricao}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;
