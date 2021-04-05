export const getFormattedDate = (stringDate: string) => {
  const date = new Date(stringDate);
  const month = date.toLocaleString("default", { month: "long" });
  const day = date.getDate();
  const time = date.toLocaleTimeString("default", { timeStyle: "short" });
  const year = date.getFullYear();
  const preciseTime = date.toLocaleTimeString("default", { timeStyle: "long" })
  return [month, day, time, year, preciseTime];
};