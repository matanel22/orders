export const required = (value: string | undefined) => {
  if (value === undefined || !value || value.length === 0) {
    return "זהו שדה חובה";
  }
};
