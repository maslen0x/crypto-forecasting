import dayjs from "dayjs";

export const formatDate = (value: dayjs.ConfigType) => {
  return dayjs(value).format("HH:mm DD.MM.YYYY");
};
