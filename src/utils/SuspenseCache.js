const cache = {};

export const fetchWithCache = (key, fetcher) => {
    if (!cache[key]) {
      cache[key] = fetcher().then(
        data => {
          cache[key] = data;
          return data;
        },
        error => {
          cache[key] = error;
          throw error;
        }
      );
    }
    if (cache[key] instanceof Promise) {
      throw cache[key];
    }
    if (cache[key] instanceof Error) {
      throw cache[key];
    }
    return cache[key];
  };