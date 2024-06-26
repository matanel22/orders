import React, { useEffect, useState } from "react";

import jsonData from "../jsonData/data.json";

import { IPropsAdddNewOrder, OrderIProps } from "../intarface";

import SearchComponent from "../header/search";

import { ModalDegine } from "./modal";

import DeteilsCard from "../Cards/DetailsCard";
import styled from "styled-components";
import { FormOptions } from "../formIndex/hookController";
import { ORDERS_FOOD } from ".";

const OrderDeteils = ({ tableHeadRow, options, setOptions }: FormOptions) => {
  const jsonDataString = JSON.stringify(jsonData, null, 2);
  const tempJsonData = JSON.parse(jsonDataString);
  const tempArray = tempJsonData.data.results;
  const [showMoreDatail, setShowMoreDetail] = useState({
    stap: false,
    openIndex: 0,
  });

  const handleRowClick = (order: OrderIProps, index: number) => {
    setShowMoreDetail({
      ...showMoreDatail,
      stap: !showMoreDatail.stap,
      openIndex: index,
    });
  };

  return (
    <ModalDegine>
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
            <div style={{ height: "100%" }}>
              <DeteilsCard tableHeadRow={ORDERS_FOOD} line={order} />
            </div>
          </div>
        );
      })}
    </ModalDegine>
  );
};

export default OrderDeteils;

export const Span = styled.span`
  font-size: 1.2rem;
`;
