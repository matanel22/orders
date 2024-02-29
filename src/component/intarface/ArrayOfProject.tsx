export const Order_Key = [
  { key: "שם לקוח" },
  { key: "תאריך הספקה" },
  { key: "סטטוס" },
  { key: "סניף" },
  { key: "מחיר" },
  { key: "" },
];
export const MOR_DETAIL = [
  { key: "תאריך הספקה" },
  { key: "סניף" },
  { key: "סוג הזמנה" },
  { key: "מקור הזמנה" },
  { key: "תאריך יצירה" },

  { key: "שעה" },
  { key: "הערות" },
];
export const Style_Status = [
  { status: "בוצע", backgC: "green" },
  { status: "ממתין לאישור", backgC: "red" },
  { status: "מאושר", backgC: "blue" },
];
export const ADD_NEW_ORDER = [
  { name: "תאריך הספקה", type: "date", register: "date" },
  { name: "שם לקוח", type: "text", register: "customer" },
  { name: "סוג הזמנה", type: "text", register: "order_type" },
  { name: "סניף", type: "text", register: "branch" },
  { name: "מחיר", type: "number", register: "priceNumber" },
  { name: "הערות", type: "text", register: "notes" },
];
