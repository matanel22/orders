import { SubmitHandler, useForm } from "react-hook-form";
import { AddNewIpros, OrderIProps } from "../intarface";
import { ADD_NEW_ORDER } from "../intarface/ArrayOfProject";
import React from "react";
import { Box, Input, InputLabel, Modal, Typography } from "@mui/material";
import { addNewOrderStyle, style } from "../style/tableOrders.style";
import ButtonLoading from "../UI/ButtonLoading";
import CloseIcon from "@mui/icons-material/Close";
const AddNewOrder = ({
  setAllOrders,
  allOrders,
  setOpenAddNewOrder,
}: AddNewIpros) => {
  const [open, setOpen] = React.useState(true);
  const handleClose = () => setOpen(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<OrderIProps>({
    mode: "onChange",
    defaultValues: {
      customer: "",
      date: new Date(),
      branch: "",
      order_type: "",
      status: "ממתין לאישור",
      priceNumber: 0,
      notes: "",
      recurrence: 0,
      source: "",
    },
  });
  const findLargestValues = (orders: OrderIProps[]) => {
    let largestValues = {
      branch_id: -1,
      customer_id: -1,
      id: -1,
      recurrence: -1,
    };
    orders.forEach((order) => {
      largestValues.branch_id = Math.max(
        largestValues.branch_id,
        order.branch_id
      );
      largestValues.customer_id = Math.max(
        largestValues.customer_id,
        order.customer_id
      );
      largestValues.id = Math.max(largestValues.id, order.id);
      largestValues.recurrence = Math.max(
        largestValues.recurrence,
        order.recurrence
      );
    });
    return largestValues;
  };
  const registerPrj: SubmitHandler<OrderIProps> = async (data) => {
    const largestValues = findLargestValues(allOrders);
    data.branch_id = largestValues.branch_id + 1;
    data.customer_id = largestValues.customer_id + 1;
    data.id = largestValues.id + 1;
    data.recurrence = largestValues.recurrence + 1;
    console.log(data);
    setAllOrders((prev) => [...prev, data]);
    setOpen(false);
    setOpenAddNewOrder(false);
  };
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      onClose={handleClose}
    >
      <Box sx={addNewOrderStyle}>
        <CloseIcon
          onClick={() => {
            handleClose();
            setOpenAddNewOrder(false);
          }}
        />
        <form onSubmit={handleSubmit(registerPrj)}>
          {ADD_NEW_ORDER.map((field) => {
            return (
              <React.Fragment>
                <InputLabel htmlFor="my-input">{field.name} </InputLabel>
                <Input
                  id={`input-${field.register}`}
                  type={field.type}
                  {...register(field.register as keyof OrderIProps, {
                    required: true,
                  })}
                />
                <br />
                {errors[field.register as keyof OrderIProps] && (
                  <Typography variant="caption" color="error">
                    זהו שדה חובה
                  </Typography>
                )}
              </React.Fragment>
            );
          })}
          <ButtonLoading
            type="button"
            setOpen={setOpen}
            textButton="הוספת הזמנה"
          ></ButtonLoading>
        </form>
      </Box>
    </Modal>
  );
};
export default AddNewOrder;
