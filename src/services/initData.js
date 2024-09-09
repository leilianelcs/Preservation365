import database from '/database.json';

const LOCAL_STORAGE_USERS_KEY = 'usuarios';
const LOCAL_STORAGE_LOCAIS_KEY = 'locais';

export const initData = () => {
  const users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USERS_KEY));
  const locais = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LOCAIS_KEY));

  if (!users) {
    localStorage.setItem(LOCAL_STORAGE_USERS_KEY, JSON.stringify(database.usuarios));
  }

  if (!locais) {
    localStorage.setItem(LOCAL_STORAGE_LOCAIS_KEY, JSON.stringify(database.locais));
  }
};
