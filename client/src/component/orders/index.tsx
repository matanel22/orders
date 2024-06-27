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
import { TableColumn } from "../screenManager/MSTtable";

// name: string;
// eventType: string;
// locationType: string;
// items: IPropsItems[];
// statusId: { id: string; name: string };
// orderDate?: Date;
// orderTime?: string;
export const ORDERS_FOOD: TableColumn[] = [
  {
    label: "שם הזמנה",
    columnId: "name",
  },
  {
    label: "סוג אירוע",
    columnId: "eventType",
  },
  {
    label: "מיקום אירוע",
    columnId: "locationType",
  },
  {
    label: "סטטוס",
    columnId: "statusId.name",
  },
  {
    label: "זמן הזמנה",
    columnId: "orderDate",
  },
  {
    label: "שעת הזמנה",
    columnId: "orderTime",
  },
  {
    label: "פריטים",
    columnId: "items",
    type: "arr",
  },
];

const AllOrders = ({ options, setOptions }: FormOptions) => {
  const nav = useNavigate();
  const [openAddNewOrder, setOpenAddNewOrder] = useState(false);
  const handleDelete = (id: string) => {
    const delRow = options.filter((row) => {
      return row.id !== id;
    });
    setOptions(delRow);
  };

  const heandleLineChange = (_id: string, obj: object) => {
    console.log(obj);

    const updatedOptions = options.map((opt) => {
      if (opt.id === _id) {
        return { ...opt, ...obj };
      }
      return opt;
    });
    setOptions(updatedOptions);
  };
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
        <SearchComponent items={options} state={setOptions} />
      </HeaderWarper>
      <OrderDeteils
        options={options}
        setOptions={setOptions}
        handleDelete={handleDelete}
        heandleLineChange={heandleLineChange}
      />
    </DefaultContainer>
  );
};

export default AllOrders;
