import React, { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import Input from "./input/Input";
import ArrayInput from "./input/ArrayInput";
import SelectOpt from "./input/SelectOpt";
import { DefaultContainer } from "../../../defultContainer";
import { FormContainer, SubmitButton } from "./style.index";
import { required } from "../../validates";

interface FormInputs {
  id: string;
  firstName: string;
  eventType: string;
  loctionType: string;
  items: { name: string; amount: number }[];
  statusId: { id: string; name: string };
}
interface IPropsItems {
  id: string;
  name: string;
  eventTypeId: string;
  loctionTypeId: string;
  comments: string;
  orderTime?: Date;
}
const eventType = [
  { id: "", name: "יש לבחור", comments: "" },

  { id: "1", name: "private", comments: "אין" },
  { id: "2", name: "public", comments: "יש" },
  { id: "3", name: "outside", comments: "אין" },
  { id: "4", name: "front", comments: "יש" },
];
const loctionType = [
  { id: "", name: "יש לבחור", comments: "" },

  { id: "3", name: "tel Aviv", comments: "אין" },
  { id: "4", name: "netivot", comments: "יש" },
  { id: "5", name: "jeruzalem", comments: "יש" },
  { id: "6", name: "Kiryat Ono", comments: "יש" },
];
const Items: IPropsItems[] = [
  {
    id: "",
    name: "יש לבחור",
    eventTypeId: "",
    loctionTypeId: "",
    comments: "",
  },
  {
    id: "0",
    name: "no",
    eventTypeId: "1",
    loctionTypeId: "4",
    comments: "יש",
  },
  {
    id: "1",
    name: "koko",
    eventTypeId: "2",
    loctionTypeId: "3",
    comments: "אין",
  },
  {
    id: "3",
    name: "bkela",
    loctionTypeId: "3",
    eventTypeId: "1",
    comments: "אין",
  },
  {
    id: "4",
    name: "fish",
    loctionTypeId: "4",
    eventTypeId: "2",
    comments: "אין",
  },
];
const AppForm = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    defaultValues: {
      eventType: "",
      loctionType: "",
      statusId: { name: "ממתין לאישור", id: "1" },
      items: [{ amount: 0, name: "" }],
    },
  });
  const [orders, setOrders] = useState<FormInputs[]>([]);
  const [allItems, setAllItems] = useState(Items);

  const [selcted, setSelected] = useState(true);
  const onSubmit = (data: FormInputs) => {
    setOrders((prevOrders) => [...prevOrders, data]);
    console.log(data);
  };

  useEffect(() => {
    if (watch("eventType") && watch("loctionType")) {
      setSelected(false);
      const newItems = allItems.filter((item) => {
        console.log(
          item.eventTypeId === watch("eventType") &&
            item.loctionTypeId === watch("loctionType")
        );

        return (
          item.eventTypeId === watch("eventType") &&
          item.loctionTypeId === watch("loctionType")
        );
      });
    } else {
      setSelected(true);
    }
  }, [watch("eventType"), watch("loctionType")]);
  return (
    <DefaultContainer background={true}>
      {errors.loctionType && <p>cmskamc</p>}
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <ArrayInput
          control={control}
          name="items"
          type="text"
          label="פריטים"
          options={allItems}
          selcted={selcted}
        />
        <SelectOpt
          control={control}
          name="eventType"
          type="text"
          label="סוג אירוע"
          options={eventType}
        />
        <SelectOpt
          control={control}
          name="loctionType"
          type="text"
          label="מיקום אירוע"
          options={loctionType}
        />
        <Input
          control={control}
          name="loctionType"
          type="date"
          label="שעת הזמנה"
        />

        <SubmitButton type="submit">submit</SubmitButton>
      </FormContainer>
    </DefaultContainer>
  );
};

export default AppForm;
