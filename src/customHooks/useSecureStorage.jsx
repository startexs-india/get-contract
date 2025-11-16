import { useState } from "react";
import { encryptData, decryptData } from "../utils/cryptoUtils";

export const useSecureStorage = (key, type = "local") => {
    const storage = type === "local" ? window.localStorage : window.sessionStorage;
    const getInitialValue = () => {
        const stored = storage.getItem(key);
        return stored ? decryptData(stored) : null;
    };

    const [value, setValueState] = useState(getInitialValue);

    const setValue = (newValue) => {
        let updatedValue;
        if (value && typeof value === "object" && !Array.isArray(value) && typeof newValue === "object" && !Array.isArray(newValue)) {
            updatedValue = { ...value, ...newValue };
        } else {
            updatedValue = newValue;
        }

        try {
            storage.setItem(key, encryptData(updatedValue));
            setValueState(updatedValue);
        } catch (err) {
            console.error("Set storage error:", err);
        }
    };

    const remove = () => {
        storage.removeItem(key);
        setValueState(null);
    };

    return [value, setValue, remove];
};
