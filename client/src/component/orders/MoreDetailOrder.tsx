import React, { useEffect } from "react";

import { Column, ContainerMorDetail, style } from "../style/tableOrders.style";
import { DisplayProps, OrderIProps } from "../intarface";
import { Box, Input, Modal, Typography } from "@mui/material";
import { MOR_DETAIL } from "../intarface/ArrayOfProject";
import CloseIcon from "@mui/icons-material/Close";

const MoreDetailOrder: React.FC<DisplayProps<OrderIProps>> = ({
  MorDetailOfOrder,
}) => {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);

  return (
    <ContainerMorDetail>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        onClose={handleClose}
      >
        <Box sx={style}>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <div
              style={{
                width: "100px",
                textAlign: "center",
                borderRadius: "10px",
                backgroundColor:
                  MorDetailOfOrder.status === "מאושר"
                    ? "green"
                    : MorDetailOfOrder.status === "בוצע"
                    ? "dodgerblue"
                    : MorDetailOfOrder.status === "ממתין לאישור"
                    ? "deeppink"
                    : "inherit",
              }}
            >
              {MorDetailOfOrder.status}
            </div>
          </div>
          <CloseIcon
            onClick={() => {
              handleClose();
            }}
          />

          <div
            style={{
              display: "flex",
              padding: "1rem",
            }}
          >
            <Column>
              {MOR_DETAIL.map((order) => (
                <Typography
                  key={order.key}
                  id="modal-modal-title"
                  variant="h6"
                  component="div"
                >
                  <li>{order.key}</li>
                </Typography>
              ))}
            </Column>
            <Column>
              <Typography id="modal-modal-title" variant="h6" component="div">
                <div>
                  {new Date(MorDetailOfOrder.date).toLocaleDateString()}
                </div>
                <div>{MorDetailOfOrder.branch}</div>
                <div>{MorDetailOfOrder.order_type}</div>
                <div>{MorDetailOfOrder.customer}</div>
                <div>{MorDetailOfOrder.source}</div>
                <div>
                  {new Date(MorDetailOfOrder.created_at).toLocaleDateString()}
                </div>
                <div>{MorDetailOfOrder.notes}</div>
              </Typography>
            </Column>
          </div>
        </Box>
      </Modal>
    </ContainerMorDetail>
  );
};
export default MoreDetailOrder;
