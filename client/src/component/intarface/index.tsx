import { Dispatch } from "react";

export interface OrderIProps {
  id: number;
  customer: string;
  date: Date;
  branch: string;
  branch_id: number;
  order_type: string;
  status: string;
  priceNumber: number;
  event_id: string | null;
  customer_id: number;
  created_at: Date;
  updated_at: Date;
  notes: string;
  recurrence: number;
  source: string;
}
export interface DisplayProps<T> {
  setAllOrders: Dispatch<React.SetStateAction<OrderIProps[]>>;
  MorDetailOfOrder: T; // Single object of type T
}
export interface AddNewIpros {
  setOpenAddNewOrder: Dispatch<React.SetStateAction<boolean>>;

  setAllOrders: Dispatch<React.SetStateAction<OrderIProps[]>>;
  allOrders: OrderIProps[]; // Single object of type T
}
export interface IPropsAdddNewOrder {
  setOpenAddNewOrder: Dispatch<React.SetStateAction<boolean>>;
  openAddNewOrder: boolean; // Single object of type T
}
