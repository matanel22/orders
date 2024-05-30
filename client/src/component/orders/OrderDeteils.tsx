import React, { useEffect, useState } from "react";

import jsonData from "../jsonData/data.json";

import { IPropsAdddNewOrder, OrderIProps } from "../intarface";


import SearchComponent from "../header/search";
import { ALL_ORDERS } from ".";
import { ModalDegine } from "./modal";

import DeteilsCard from "../Cards/DetailsCard";
import styled from "styled-components";

const OrderDeteils = ({
  setOpenAddNewOrder,
  openAddNewOrder,
}: IPropsAdddNewOrder) => {
  const jsonDataString = JSON.stringify(jsonData, null, 2);
  const tempJsonData = JSON.parse(jsonDataString); 
  const tempArray = tempJsonData.data.results;
  const [showMoreDatail, setShowMoreDetail] = useState({
    stap: false,
    openIndex: 0,
  });
  const [allOrders, setAllOrders] = useState(ALL_ORDERS);

  const handleRowClick = (order: OrderIProps, index: number) => {
    setShowMoreDetail({
      ...showMoreDatail,
      stap: !showMoreDatail.stap,
      openIndex: index,
    });
  };

  return (
    <ModalDegine> 
       <SearchComponent items={allOrders} state={setAllOrders}/>

      {allOrders.map((order)=>{ 

      return ( <div key={order.id} style={{height: "30vh", boxShadow: "0 8px 16px 0 rgba(0,0,0,0.2)",backgroundColor:"#6cba65",width:"80vw",margin:"0 auto",direction:"rtl",marginTop:"1rem",borderRadius:"1rem" }}>
       <div style={{height:"100%"}}>
        <DeteilsCard
          id={order.id}
          name={order.name}
          eventType={order.eventType}
          locationType={order.locationType}
          statusId={order.statusId}
          orderDate={order.orderDate}
          orderTime={order.orderTime}
          items={order.items}
        />
        </div>
        </div>
        
        
     
   
  
)
    })}

  </ModalDegine>
  )
};

export default OrderDeteils;

export const Span=styled.span`
  font-size: 1.2rem;
`
