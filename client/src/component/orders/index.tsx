import React, { useState } from "react";

import OrderDeteils from "./OrderDeteils";

import {
  ButtonUi,

  HeaderWarper,

} from "../style/tableOrders.style";

import { DefaultContainer } from "../../defultContainer";
import SearchComponent from "../header/search";

import AppForm, {

  FormOptions,

} from "../formIndex/hookController";
import { useNavigate } from "react-router-dom";

import { TableColumn } from "../screenManager/MSTtable";

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
        handleLineChange={heandleLineChange}
      />
    </DefaultContainer>
  );
};

export default AllOrders;
