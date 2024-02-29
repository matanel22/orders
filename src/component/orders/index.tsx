import React, { useState } from "react";

import OrderDeteils from "./OrderDeteils";
import { AppBar } from "@mui/material";
import {
  ButtonUi,
  DefultContainer,
  HeaderWarper,
  SearchOrder,
} from "../style/tableOrders.style";

const AllOrders = () => {
  const [openAddNewOrder, setOpenAddNewOrder] = useState(false);

  return (
    <DefultContainer>
      <HeaderWarper>
        <ButtonUi
          onClick={() => {
            setOpenAddNewOrder(true);
          }}
        >
          הזמנה חדשה
        </ButtonUi>
        <SearchOrder placeholder="חיפוש" type="text" />
      </HeaderWarper>
      <OrderDeteils
        openAddNewOrder={openAddNewOrder}
        setOpenAddNewOrder={setOpenAddNewOrder}
      />
      ;
    </DefultContainer>
  );
};

export default AllOrders;
