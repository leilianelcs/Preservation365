
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
  * @returns {Promise<any>}
 */
export async function fetchPlantas() {
  const response = await api('/plantas');
  if (!response.ok) {
    throw new Error('Failed to fetch plantas');
  }
  return response.json();
}

/**
 * Fetches plants associated with a specific user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<any[]>}
 */
export async function fetchPlantasByUser(userId) {
  const response = await api(`/plantas?usuario=${encodeURIComponent(userId)}`);
  if (!response.ok) {
    throw new Error('Failed to fetch plants for user');
  }
  return response.json();
}


