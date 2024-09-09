const LOCAL_STORAGE_KEY = 'locais';

export const getLocais = async () => {
  const locais = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  return locais;
};

export const createLocal = async (local) => {
  const locais = await getLocais();
  locais.push(local);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(locais));
};

export const updateLocal = async (id, updatedLocal) => {
  const locais = await getLocais();
  const index = locais.findIndex(local => local.id === id);
  if (index !== -1) {
    locais[index] = updatedLocal;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(locais));
  }
};

export const deleteLocal = async (id) => {
  const locais = await getLocais();
  const updatedLocais = locais.filter(local => local.id !== id);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedLocais));
};

