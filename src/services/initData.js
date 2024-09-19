import database from '/database.json';

const LOCAL_STORAGE_USERS_KEY = 'usuarios';
const LOCAL_STORAGE_PLANTAS_KEY = 'plantas';
const LOCAL_STORAGE_ANIMAIS_KEY = 'animais';

export const initData = () => {
  const users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_USERS_KEY));
  const plantas = JSON.parse(localStorage.getItem(LOCAL_STORAGE_PLANTAS_KEY));
  const animais = JSON.parse(localStorage.getItem(LOCAL_STORAGE_ANIMAIS_KEY));

  if (!users) {
    console.log('Inicializando usuários no localStorage...');
    localStorage.setItem(LOCAL_STORAGE_USERS_KEY, JSON.stringify(database.usuarios));
  } else {
    console.log('Usuários já existem no localStorage.');
  }

  if (!plantas) {
    console.log('Inicializando plantas no localStorage...');
    localStorage.setItem(LOCAL_STORAGE_PLANTAS_KEY, JSON.stringify(database.plantas));
  } else {
    console.log('Plantas já existem no localStorage.');
  }

  if (!animais) {
    console.log('Inicializando animais no localStorage...');
    localStorage.setItem(LOCAL_STORAGE_ANIMAIS_KEY, JSON.stringify(database.animais));
  } else {
    console.log('Animais já existem no localStorage.');
  }
};

