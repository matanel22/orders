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
    <div>
      {/* {openAddNewOrder && (
        <AddNewOrder
          setOpenAddNewOrder={setOpenAddNewOrder}
          allOrders={allOrders}
          setAllOrders={setAllOrders}
        />
      )} */}
      {/* <TableContainer
        sx={{
          direction: "rtl",
        }}
      >
        <Table aria-label="simple table">
          <TableHead>
            <TableRow
              sx={{
                bgcolor: "rgba(0, 128, 0, 0.3);",
                height: "0.1rem",
                "& th": {
                  fontSize: "1rem",
                },
              }}
            >
              {Order_Key.map((order) => (
                <TableCell align="right" key={order.key}>
                  {order.key}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody> */}
      <Card items={allOrders}></Card>

      {/* {allOrders.map((order, index: number) => (
              <TableRow
                key={order.id}
                onClick={() => handleRowClick(order, index)}
                style={{ cursor: "pointer" }}
                sx={{
                  border: "1px solid rgba(0, 128, 0, 0.3)",
                  "&:hover": {
                    zIndex: "1",
                    fontSize: "5rem",
                    cursor: "pointer",
                    backgroundColor: "rgba(0, 128, 0, 0.3)",
                  },
                }}
              >
                <TableCell sx={{ borderBottom: "none" }} align="right">
                  {order.customer}
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }} align="right">
                  {new Date(order.date).toLocaleDateString()}
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "none",
                    color:
                      order.status === "מאושר"
                        ? "green"
                        : order.status === "בוצע"
                        ? "dodgerblue"
                        : order.status === "ממתין לאישור"
                        ? "deeppink"
                        : "inherit",
                  }}
                  align="right"
                >
                  {order.status}
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }} align="right">
                  {order.branch}
                </TableCell>
                <TableCell sx={{ borderBottom: "none" }} align="right">
                  {order.priceNumber}
                </TableCell>
                <TableCell>
                  <ButtonArrow src={leftArrow} width={"20px"} />
                </TableCell>
                {showMoreDatail.stap && showMoreDatail.openIndex === index && (
                  <MoreDetailOrder
                    setAllOrders={setAllOrders}
                    MorDetailOfOrder={order}
                  ></MoreDetailOrder>
                )}
              </TableRow>
            ))} */}
      {/* </TableBody>
        </Table>
      </TableContainer> */}
    </div>
  );
};

export default OrderDeteils;
