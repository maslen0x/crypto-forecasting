import dayjs from "dayjs";

export const formatDate = (
  value: dayjs.ConfigType,
  { time } = { time: true }
) => {
  const format = time ? "HH:mm DD.MM.YYYY" : "DD.MM.YYYY";
  return dayjs(value).format(format);
};
