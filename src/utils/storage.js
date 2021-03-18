const storage = {
  get(key) {
    try {
      return JSON.parse(window.localStorage.getItem(key));
    } catch (error) {
      console.error(`Error parsing storage item "${key}".`);
      return null;
    }
  },

  set(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value));
  },
};

export { storage };
