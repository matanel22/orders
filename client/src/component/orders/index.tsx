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
import { ALL_ORDERS } from "../ArrData";
interface Person {
  id: string;
  name: string;
  age: number;
  occupation?: string;
}

// const orderDate = comperForDate("20/05/2023");

const AllOrders = ({ options, setOptions }: FormOptions) => {
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

      <OrderDeteils options={options} setOptions={setOptions} />
    </DefaultContainer>
  );
};

export default AllOrders;
