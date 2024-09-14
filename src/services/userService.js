const LOCAL_STORAGE_KEY = 'usuarios';

export const getUsers = async () => {
  const users = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];
  return users;
};

export const createUser = async (user) => {
  const users = await getUsers();
  users.push(user);
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(users));
};
