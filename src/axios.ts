import Axios from "axios";
import { buildStorage, setupCache } from "axios-cache-interceptor";
import { clear, del, get, set } from "idb-keyval";

const CACHE_TTL = 60 * 60 * 1000; // 1 hour in milliseconds

const indexedDbStorage = buildStorage({
  async find(key) {
    const storedItem = await get(key);

    if (!storedItem) {
      return null;
    }

    const { value, timestamp } = storedItem;
    if (!timestamp || Date.now() - timestamp > CACHE_TTL) {
      // If data is not found or expired, return null
      return null;
    }

    return value;
  },

  async set(key, value) {
    // Store value along with timestamp
    await set(key, { value, timestamp: Date.now() });
  },

  async remove(key) {
    await del(key);
  },
});

export const axios = setupCache(Axios, { storage: indexedDbStorage });

// Function to clear cache
export async function clearCache() {
  await clear();
}
