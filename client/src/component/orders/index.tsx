import React, { useState } from "react";

import OrderDeteils from "./OrderDeteils";
import { AppBar } from "@mui/material";
import {
  ButtonUi,
  DefultContainer,
  HeaderWarper,
  SearchOrder,
} from "../style/tableOrders.style";
import Card from "../Cards";
import { DefaultContainer } from "../../defultContainer";
import SearchComponent from "../header/search";
import { ResultItem, ResultsList } from "../header/search/style.index";
import AppForm, {
  FormInputs,
  FormOptions,
  Items,
} from "../formIndex/hookController";
import { useNavigate } from "react-router-dom";
interface Person {
  id: string;
  name: string;
  age: number;
  occupation?: string;
}


const comperForDate=(str:string)=>{
  const [day, month, year] = str.split('/').map(Number);
  return new Date(year, month - 1, day); 
}
// const orderDate = comperForDate("20/05/2023");
export const ALL_ORDERS: FormInputs[] = [
  {
    id: "1",
    name: "Alice Johnson",
    eventType: "ביחידה",
    locationType: "Engineer",
    items: [{ id: "1", name: "נעליים", amount: 40 }],
    statusId: { id: "1", name: "ממתין לאישור" },
    orderDate : comperForDate("20/05/2023"),
    orderTime:"14:25"
  },
  {
    id: "2",
    name: "Bob Smith",
    eventType: "ביחידה",
    locationType: "Engineer",
    items: [{ id: "2", name: "סנדלים", amount: 40 }],
    statusId: { id: "2", name: "מאושר" },
    orderDate : comperForDate("20/05/2023"),
    orderTime:"14:25"
  },
  {
    id: "3",
    name: "Charlie Brown",
    eventType: "ביחידה",
    locationType: "Engineer",
    items: [{ id: "3", name: "מגפיים", amount: 40 }],
    statusId: { id: "3", name: "בוטל" },
    orderDate:comperForDate("20/05/2023"),
    orderTime:"14:25"
  },
];
const AllOrders = () => {
  const nav = useNavigate();
  const [openAddNewOrder, setOpenAddNewOrder] = useState(false);
  const [searchResults, setSearchResults] = useState(ALL_ORDERS);
  const [allOrders, setOllOrders] = useState();
  return (
    <DefaultContainer background={true}>
      <HeaderWarper>
        <ButtonUi
          onClick={() => {
            setOpenAddNewOrder(true);
            nav("/test");
          }}
        >
          הזמנה חדשה
        </ButtonUi>
      </HeaderWarper>
      {/* <SearchComponent items={searchResults} state={setSearchResults} /> */}
      {/* <Card options={searchResults} /> */}

      {/* <ResultsList>
        {searchResults.map((result) => (
          <ResultItem key={result.id}>
            {result.name} - {result.occupation}
          </ResultItem>
        ))}
      </ResultsList> */}

      <OrderDeteils
        openAddNewOrder={openAddNewOrder}
        setOpenAddNewOrder={setOpenAddNewOrder}
      />
    </DefaultContainer>
  );
};

export default AllOrders;
