const BASE_URL = import.meta.env.VITE_BACKEND_URL;

export async function fetchDoctors() {
  try {
    const res = await fetch(`${BASE_URL}/api/doctor/list`);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("API fetch error:", error);
    return { success: false, message: "Failed to fetch doctors" };
  }
}
