import { FormInputs } from "../formIndex/hookController";

const comperForDate = (str: string) => {
  const [day, month, year] = str.split("/").map(Number);
  return new Date(year, month - 1, day);
};

export const ALL_ORDERS: FormInputs[] = [
  {
    id: "1",
    name: "Alice Johnson",
    eventType: "ביחידה",
    locationType: "Engineer",
    items: [{ id: "1", name: "נעליים", amount: 40 },{ id: "2", name: "סנדלים", amount: 50 }],
    statusId: { id: "1", name: "ממתין לאישור" },
    // orderDate: comperForDate("20/05/2023"),
    orderTime: "14:25",
  },
  {
    id: "2",
    name: "Bob Smith",
    eventType: "ביחידה",
    locationType: "Engineer",
    items: [{ id: "2", name: "סנדלים", amount: 40 }],
    statusId: { id: "2", name: "מאושר" },
    // orderDate: comperForDate("20/05/2023"),
    orderTime: "14:25",
  },
  {
    id: "3",
    name: "Charlie Brown",
    eventType: "ביחידה",
    locationType: "Engineer",
    items: [{ id: "3", name: "מגפיים", amount: 40 }],
    statusId: { id: "3", name: "בוטל" },
    // orderDate: comperForDate("20/05/2023"),
    orderTime: "14:25",
  },
];
