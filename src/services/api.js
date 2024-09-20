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
 * Generic fetch function for different entities.
 * @param {string} entity - The entity to fetch (e.g., 'plantas', 'animais').
 * @param {string} [userId] - Optional user ID to fetch specific user's entities.
 * @returns {Promise<any>}
 */
async function fetchEntity(entity, userId) {
  const endpoint = userId ? `/${entity}?usuario=${encodeURIComponent(userId)}` : `/${entity}`;
  try {
    const response = await api(endpoint);
    return await response.json();
  } catch (error) {
    console.error(`Error fetching ${entity}:`, error);
    throw error;
  }
}

/**
 * Fetches all plants.
 * @returns {Promise<any>}
 */
export async function fetchPlantas() {
  return fetchEntity('plantas');
}

/**
 * Fetches plants associated with a specific user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<any[]>}
 */
export async function fetchPlantasByUser(userId) {
  return fetchEntity('plantas', userId);
}

/**
 * Fetches all animals.
 * @returns {Promise<any>}
 */
export async function fetchAnimais() {
  return fetchEntity('animais');
}

/**
 * Fetches animals associated with a specific user.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<any[]>}
 */
export async function fetchAnimaisByUser(userId) {
  return fetchEntity('animais', userId);
}
