import { FormInputs } from "../formIndex/hookController";

// const comperForDate = (str: string) => {
//   const [day, month, year] = str.split("/").map(Number);
//   return new Date(year, month - 1, day);
// };

export const ALL_ORDERS: FormInputs[] = [
  {
    id: "1",
    eventType: "private",
    locationType: "tel Aviv",
    orderTime: "14:25",
    name: "Alice Johnson",
    items: [{ id: "1", name: "bkela", amount: 40 },{ id: "8", name: "fish", amount: 40 },{ id: "9", name: "no", amount: 40 }],
    statusId: { id: "1", name: "ממתין לאישור" },
    // orderDate: comperForDate("20/05/2023"),
  
  },
  {
    id: "2",
    orderTime: "15:25",
    name: "Bob Smith",
    eventType: "public",
    locationType: "jeruzalem",
    items: [{ id: "2", name: "koko", amount: 40 }],
    statusId: { id: "2", name: "מאושר" },
    // orderDate: comperForDate("20/05/2023"),
   
  },
  {
    id: "3",
    orderTime: "14:25",

    name: "Charlie Brown",
    eventType: "outside",
    locationType: "Kiryat Ono",
    items: [{ id: "3", name: "no", amount: 40 }],
    statusId: { id: "3", name: "בוטל" },
    // orderDate: comperForDate("20/05/2023"),
  },
];

export const EventType = [
  { id: "1", name: "private", comments: "אין" },
  { id: "2", name: "public", comments: "יש" },
  { id: "3", name: "outside", comments: "אין" },
  { id: "4", name: "front", comments: "יש" },
];

export const LocationType = [
  { id: "3", name: "tel Aviv", comments: "אין" },
  { id: "4", name: "netivot", comments: "יש" },
  { id: "5", name: "jeruzalem", comments: "יש" },
  { id: "6", name: "Kiryat Ono", comments: "יש" },
];

export const Items = [
  { id: "0", name: "no", eventTypeId: "1", locationTypeId: "3", comments: "יש" },
  { id: "1", name: "koko", eventTypeId: "2", locationTypeId: "4", comments: "אין" },
  { id: "3", name: "bkela", eventTypeId: "3", locationTypeId: "5", comments: "אין" },
  { id: "4", name: "fish", eventTypeId: "4", locationTypeId: "6", comments: "אין" },
];