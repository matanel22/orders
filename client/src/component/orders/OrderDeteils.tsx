import React, { useEffect, useState } from "react";

import jsonData from "../jsonData/data.json";

import { IPropsAdddNewOrder, OrderIProps } from "../intarface";

import SearchComponent from "../header/search";

import { ModalDegine } from "./modal";

import DeteilsCard from "./DetailsCard";
import styled from "styled-components";
import { FormOptions } from "../formIndex/hookController";
import { ORDERS_FOOD } from ".";

const OrderDeteils = ({
  tableHeadRow,
  options,
  setOptions,
  handleDelete,
  heandleLineChange,
  handleAddLine,
}: FormOptions) => {
  return (
    <div>
      {options.map((order) => {
        return (
          <div
            key={order.id}
            style={{
              boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",
              width: "80vw",
              margin: "0 auto",
              direction: "rtl",
              marginTop: "1rem",
              borderRadius: "1rem",
            }}
          >
            <DeteilsCard
              handleAddLine={handleAddLine}
              heandleLineChange={heandleLineChange}
              handleDelete={handleDelete}
              tableHeadRow={ORDERS_FOOD}
              line={order}
              options={options}
              setOptions={setOptions}
            />
          </div>
        );
      })}
    </div>
  );
};

export default OrderDeteils;

export const Span = styled.span`
  font-size: 1.2rem;
`;
