const LOCAL_STORAGE_KEY = 'plantas';

export const getPlantas = async () => {
  const plantas = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  return plantas;
};

export const createPlanta = async (planta) => {
  const plantas = await getPlantas();
  plantas.push(planta);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(plantas));
};

export const updatePlanta = async (id, updatedPlanta) => {
  const plantas = await getPlantas();
  const index = plantas.findIndex(planta => planta.id === id);
  if (index !== -1) {
    plantas[index] = updatedPlanta;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(plantas));
  }
};

export const deletePlanta = async (id) => {
  const plantas = await getPlantas();
  const updatedPlantas = plantas.filter(planta => planta.id !== id);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedPlantas));
};

