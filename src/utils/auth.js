// src/utils/auth.js

// Get token from localStorage
export function getToken() {
    const data = localStorage.getItem("data");
    if (!data) return null;
    return JSON.parse(data).authToken;
}

// Create Authorization header (Bearer)
export function getAuthHeaders() {
    const token = getToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
}
