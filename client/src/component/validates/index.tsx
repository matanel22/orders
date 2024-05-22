import dayjs from "dayjs";

export const required = (value: string | undefined) => {
  if (value === undefined || !value || value.length === 0) {
    return "שדה זה הינו חובה";
  }
};
export const validDate = (
  value: string | undefined
  // LL: TranslationFunctions
) => {
  if (!dayjs(value, "YYYY-MM-DD", true).isValid()) {
    return false;
  }
};
export const isInt = (value: string) => {
  if (value) {
    if (
      Number(value) <= 0 ||
      !Number.isInteger(+value) ||
      String(value).includes(".") ||
      String(value).includes(",")
    ) {
      return false;
    }
  }
};
