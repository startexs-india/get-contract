import { API_BASE_URL } from "./config";
import { getAuthHeaders } from "./auth";

export async function callApi(endpoint, method = "GET", data = null) {
    try {
        // Normalize endpoint to avoid double slashes
        const normalizedEndpoint = endpoint.startsWith("/")
            ? endpoint.slice(1)
            : endpoint;

        const url = `${API_BASE_URL}/${normalizedEndpoint}`;

        const options = {
            method,
            headers: {
                "Content-Type": "application/json",
                ...getAuthHeaders(),
            },
        };

        // Only attach body if data exists AND method is not GET
        if (data && method !== "GET") {
            options.body = JSON.stringify(data);
        }

        const res = await fetch(url, options);

        // Handle non-200 responses
        if (!res.ok) {
            let errorMessage = `API Error: ${res.status}`;

            try {
                const errorData = await res.json();
                errorMessage += errorData?.message ? ` - ${errorData.message}` : "";
            } catch (_) {
                // ignore JSON parse error
            }

            throw new Error(errorMessage);
        }

        // Parse JSON safely
        const result = await res.json().catch(() => ({}));
        return result;

    } catch (error) {
        //console.error("❌ API Call Failed:", error.message);
        throw error;
    }
}
