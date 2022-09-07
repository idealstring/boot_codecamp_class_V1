export const dateFormatter = (createdAt) => {
  let rawDate = new Date(createdAt);
  const yyyy = rawDate.getFullYear();
  const mm = String(rawDate.getMonth() + 1).padStart(2, "0");
  const dd = String(rawDate.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
};
