const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export async function fetchDoctors() {
  try {
    const response = await fetch(`${BASE_URL}/api/doctor/list`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch doctors:', error);
    return { success: false, message: 'Failed to fetch doctors' };
  }
}
