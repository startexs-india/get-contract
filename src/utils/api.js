import { API_BASE_URL } from "./config";
import { getAuthHeaders } from "./auth";

export async function callApi(endpoint, method = "GET", data = null) {
    try {
        const options = {
            method,
            headers: {
                "Content-Type": "application/json",
                ...getAuthHeaders(),
            },
        };

        if (data) options.body = JSON.stringify(data);

        const res = await fetch(`${API_BASE_URL}/${endpoint}`, options);

        if (!res.ok) {
            let errorMessage = `API Error: ${res.status}`;
            try {
                const errorData = await res.json();
                if (errorData.message) {
                    errorMessage += ` - ${errorData.message}`;
                }
            } catch (_) {
            }
            throw new Error(errorMessage);
        }

        return await res.json();
    } catch (error) {
        console.error("API Call Failed:", error);
        throw error;
    }
}
