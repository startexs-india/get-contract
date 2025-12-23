import { API_BASE_URL } from "./config";
import { getAuthHeaders } from "./auth";

export async function callApi(endpoint, method = "GET", data = null) {
    try {
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

        if (data && method !== "GET") {
            options.body = JSON.stringify(data);
        }

        const res = await fetch(url, options);

        // 🚨 HANDLE UNAUTHORIZED (TOKEN EXPIRED)
        if (res.status === 401) {
            // Clear stored auth (adjust if you use cookies)
            localStorage.removeItem("data");

            // Redirect to admin login
            window.location.replace("/admin");

            // Stop further execution
            throw new Error("Session expired. Redirecting to login...");
        }

        // Handle other errors
        if (!res.ok) {
            let errorMessage = `API Error: ${res.status}`;

            try {
                const errorData = await res.json();
                if (errorData?.message) {
                    errorMessage += ` - ${errorData.message}`;
                }
            } catch (_) { }

            throw new Error(errorMessage);
        }

        return await res.json();

    } catch (error) {
        throw error;
    }
}
