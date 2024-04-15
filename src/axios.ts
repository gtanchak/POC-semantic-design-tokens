import Axios from "axios";
import { buildStorage, setupCache } from "axios-cache-interceptor";
import { clear, del, get, set } from "idb-keyval";

const CACHE_TTL = 60 * 60 * 1000;

const indexedDbStorage = buildStorage({
  async find(key) {
    const storedItem = await get(key);

    if (!storedItem) {
      return null;
    }

    const { value, timestamp } = storedItem;
    if (!timestamp || Date.now() - timestamp > CACHE_TTL) {
      return null;
    }

    return value;
  },

  async set(key, value) {
    await set(key, { value, timestamp: Date.now() });
  },

  async remove(key) {
    await del(key);
  },
});

export const axios = setupCache(Axios, { storage: indexedDbStorage });

export async function clearCache() {
  await clear();
}
