export const getFromLS = (name) => {
  const lsItem = localStorage.getItem(name);

  if (!lsItem) return;

  return JSON.parse(lsItem);
};

export const saveToLS = (name, data) => localStorage.setItem(name, JSON.stringify(data));
