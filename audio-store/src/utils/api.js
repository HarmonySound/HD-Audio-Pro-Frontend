// src/utils/api.js

import config from '../config/config';

export const fetchData = async (endpoint, options = {}) => {
  const url = `${config.apiBaseUrl}${endpoint}`;
  const controller = new AbortController();
  const { signal } = controller;
  const timeoutId = setTimeout(() => controller.abort(), config.timeout);

  for (let attempt = 0; attempt < config.retries; attempt++) {
    try {
      const response = await fetch(url, { ...options, signal });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      clearTimeout(timeoutId);
      const data = await response.json();
      return data;
    } catch (error) {
      if (attempt < config.retries - 1) {
        console.warn(`Retrying... (${attempt + 1}/${config.retries})`);
      } else {
        clearTimeout(timeoutId);
        throw error;
      }
    }
  }
};
