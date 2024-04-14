import Axios from "axios";
import { buildStorage, setupCache } from "axios-cache-interceptor";

import { del, get, set } from "idb-keyval";

export const indexedDbStorage = buildStorage({
  async find(key) {
    const value = await get(key);

    if (!value) {
      return;
    }

    return JSON.parse(value);
  },

  async set(key, value) {
    await set(key, JSON.stringify(value));
  },

  async remove(key) {
    await del(key);
  },
});

export const axios = setupCache(Axios, { storage: indexedDbStorage });
