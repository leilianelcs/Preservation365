/**
 * Centralized fetch function for API calls.
 * @param {string} endpoint 
 * @param {RequestInit} init 
 * @returns {Promise<Response>}
 */
export async function api(endpoint, init) {
  const url = `${process.env.REACT_APP_API_URL}${endpoint}`; // Use uma variável de ambiente
  try {
    const response = await fetch(url, init);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response;
  } catch (error) {
    console.error('Fetch error:', error);
    throw error; // Re-throw the error after logging it
  }
}

/**
 * Fetches all plants.
 * @returns {Promise<any>}
 */
export async function fetchPlantas() {
  const response = await api('/plantas');
  return response.json();
}

/**
 * Fetches plants associated with a specific user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<any[]>}
 */
export async function fetchPlantasByUser(userId) {
  const response = await api(`/plantas?usuario=${encodeURIComponent(userId)}`);
  return response.json();
}


/**
 * Fetches all plants.
 * @returns {Promise<any>}
 */
export async function fetchAnimais() {
  const response = await api('/animais');
  return response.json();
}

/**
 * Fetches plants associated with a specific user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<any[]>}
 */
export async function fetchAnimaisByUser(userId) {
  const response = await api(`/animais?usuario=${encodeURIComponent(userId)}`);
  return response.json();
}
