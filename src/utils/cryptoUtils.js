
// cryptoUtils.js
import CryptoJS from "crypto-js";

// Change this key for your app (keep it secret!)
const SECRET_KEY = "AVMUOGoJQI9Dt0yC0wqNYO9GxQnPN1YVPOjEbTg0PkQ";

/**
 * Encrypt any JSON-serializable data
 * @param data - object, array, string, number, boolean
 * @returns encrypted string
 */
export const encryptData = (data) => {
    try {
        return CryptoJS.AES.encrypt(JSON.stringify(data), SECRET_KEY).toString();
    } catch (err) {
        console.error("Encryption error:", err);
        return null;
    }
};

/**
 * Decrypt data encrypted with encryptData
 * @param cipher - encrypted string
 * @returns original value (object, array, string, etc.)
 */
export const decryptData = (cipher) => {
    try {
        const bytes = CryptoJS.AES.decrypt(cipher, SECRET_KEY);
        const decrypted = bytes.toString(CryptoJS.enc.Utf8);
        return JSON.parse(decrypted);
    } catch (err) {
        console.error("Decryption error:", err);
        return null;
    }
};
