import { createJSONStorage } from 'zustand/middleware';

const safeLocalStorage = {
  getItem: (key: string): string | null => {
    try {
      return localStorage.getItem(key);
    } catch {
      return null;
    }
  },
  setItem: (key: string, value: string) => {
    try {
      localStorage.setItem(key, value);
    } catch (error) {
      console.warn(`[Storage] Could not save "${key}":`, error);
    }
  },
  removeItem: (key: string) => {
    try {
      localStorage.removeItem(key);
    } catch {
      // storage unavailable (private mode, blocked site data); nothing to remove
    }
  },
};

export const readLegacyJson = <T>(key: string): T | null => {
  const raw = safeLocalStorage.getItem(key);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return null;
  }
};

/**
 * localStorage-backed persist storage. When the store has never been saved under its new key,
 * `readLegacyState` can return data saved by the old hand-rolled localStorage code so users
 * keep what they had.
 */
export const createPersistStorage = <S>(readLegacyState: () => S | null) =>
  createJSONStorage<S>(() => ({
    getItem: (name) => {
      const value = safeLocalStorage.getItem(name);
      if (value !== null) return value;

      const legacyState = readLegacyState();
      return legacyState ? JSON.stringify({ state: legacyState, version: 0 }) : null;
    },
    setItem: safeLocalStorage.setItem,
    removeItem: safeLocalStorage.removeItem,
  }));
