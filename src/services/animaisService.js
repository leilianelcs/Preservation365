const LOCAL_STORAGE_KEY = 'animais';

export const getAnimais = async () => {
  const animais = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  return animais;
};

export const createAnimal = async (animal) => {
  const animais = await getAnimais();
  animais.push(animal);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(animais));
};

export const updateAnimal = async (id, updatedAnimal) => {
  const animais = await getAnimais();
  const index = animais.findIndex(animal => animal.id === id);
  if (index !== -1) {
    animais[index] = updatedAnimal;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(animais));
  }
};

export const deleteAnimal = async (id) => {
  const animais = await getAnimais();
  const updatedAnimais = animais.filter(animal => animal.id !== id);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updatedAnimais));
};

