import database from '/database.json';

const LOCAL_STORAGE_USERS_KEY = 'usuarios';
const LOCAL_STORAGE_PLANTAS_KEY = 'plantas';
const LOCAL_STORAGE_ANIMAIS_KEY = 'animais';

export const initData = () => {
  const users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USERS_KEY));
  const plantas = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PLANTAS_KEY));
  const animais = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ANIMAIS_KEY));

  if (!users) {
    localStorage.setItem(LOCAL_STORAGE_USERS_KEY, JSON.stringify(database.usuarios));
  }

  if (!plantas) {
    localStorage.setItem(LOCAL_STORAGE_PLANTAS_KEY, JSON.stringify(database.plantas));
  }

  
  if (!animais) {
    localStorage.setItem(LOCAL_STORAGE_ANIMAIS_KEY, JSON.stringify(database.animais));
  }

};
