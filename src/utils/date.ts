export const formatIso = (isoDate: string) => {
  return new Date(isoDate).toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric"
  });
};
