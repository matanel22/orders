import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
} from "@mui/material";
import TableRow from "@mui/material/TableRow";
import jsonData from "../jsonData/data.json";
import {
  ButtonArrow,
  Container,
  DefultContainer,
} from "../style/tableOrders.style";
import { IPropsAdddNewOrder, OrderIProps } from "../intarface";
import leftArrow from "../../svg/leftArrow.svg";

import MoreDetailOrder from "./MoreDetailOrder";
import { Order_Key } from "../intarface/ArrayOfProject";
import AddNewOrder from "./addNewOrder";
import axios from "axios";
import Card from "../Cards";
import { DefaultContainer } from "../../defultContainer";
import AppForm from "../formIndex/hookController";
import SearchComponent from "../header/search";

const OrderDeteils = ({
  setOpenAddNewOrder,
  openAddNewOrder,
}: IPropsAdddNewOrder) => {
  const jsonDataString = JSON.stringify(jsonData, null, 2);
  const tempJsonData = JSON.parse(jsonDataString); // Parse the JSON string back to an object
  const tempArray = tempJsonData.data.results;
  const [showMoreDatail, setShowMoreDetail] = useState({
    stap: false,
    openIndex: 0,
  });
  const [allOrders, setAllOrders] = useState<OrderIProps[]>(tempArray);
  // useEffect(()=>{
  // const url="http://localhost:3001/api/sendData"
  // axios.get(url).then(({data})=>{
  // console.log(data);
  // setAllOrders(data.results)

  // })
  // },[])
  const handleRowClick = (order: OrderIProps, index: number) => {
    setShowMoreDetail({
      ...showMoreDatail,
      stap: !showMoreDatail.stap,
      openIndex: index,
    });
  };

  return (
    <div style={{backgroundColor:"red",height:"50vh",width:"80vw",margin:"0 auto"}}>
    <h1 style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Items</h1>
    </div>
  );
};

export default OrderDeteils;
