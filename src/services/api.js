// api.js

/**
 * 
 * @param {string} endpoint 
 * @param {RequestInit} init 
 * @returns {Promise<Response>}
 */
export function api(endpoint, init) {
  const url = 'http://localhost:5173' + endpoint;
  return fetch(url, init);
}

/**
 * Fetches the localidade data from the JSON file.
 * @returns {Promise<any>}
 */
export async function fetchLocalidades() {
  const response = await api('/locais');
  if (!response.ok) {
    throw new Error('Failed to fetch localidades');
  }
  return response.json();
}

/**
 * Fetches locations associated with a specific user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<any[]>}
 */
export async function fetchLocationsByUser(userId) {
  const response = await api(`/locais?usuario=${encodeURIComponent(userId)}`);
  if (!response.ok) {
    throw new Error('Failed to fetch locations for user');
  }
  return response.json();
}


