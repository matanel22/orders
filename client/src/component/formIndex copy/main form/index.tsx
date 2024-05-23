import React, { Dispatch, useEffect, useState } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";

// import SelectOpt from "./input/SelectOpt";
import { DefaultContainer } from "../../../defultContainer";
import { FormContainer, SubmitButton } from "./style.index";
import { isInt, required } from "../../validates";
import { TextField } from "../fieldsTevel/TextField";

import DynamicSelectFields from "../fieldsTevel/SelectHf";
import { SelectField } from "../fieldsTevel/SelectOpt";

export interface FormInputs {
  id: string;
  name: string;
  eventType: string;
  locationType: string;
  items: IPropsItems[];
  statusId: { id: string; name: string };
}
export interface FormOptions {
  options: FormInputs[];
  setOptions: Dispatch<React.SetStateAction<FormInputs[]>>;
}
export interface IPropsItems {
  id: string;
  name: string;
  amount?: number;
  eventTypeId?: string;
  loctionTypeId?: string;
  comments?: string;
  orderTime?: Date;
}
const eventType = [
  { id: "1", name: "private", comments: "אין" },
  { id: "2", name: "public", comments: "יש" },
  { id: "3", name: "outside", comments: "אין" },
  { id: "4", name: "front", comments: "יש" },
];
const loctionType = [
  { id: "3", name: "tel Aviv", comments: "אין" },
  { id: "4", name: "netivot", comments: "יש" },
  { id: "5", name: "jeruzalem", comments: "יש" },
  { id: "6", name: "Kiryat Ono", comments: "יש" },
];
export const Items: IPropsItems[] = [
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
const AppForm = ({ options, setOptions }: FormOptions) => {
  const methods = useForm<FormInputs>({
    mode: "onBlur",
    shouldUnregister: true,
    reValidateMode: "onChange",
    defaultValues: {
      id: "",
      name: "",
      eventType: "",
      locationType: "",
      items: [
        {
          id: "",
          name: "",
          loctionTypeId: "",
          eventTypeId: "",
          comments: "",
        },
      ],
      statusId: { id: "", name: "" },
    },
  });

  const {
    handleSubmit,
    watch,

    formState: { isSubmitting },
  } = methods;

  const [allItems, setAllItems] = useState(Items);

  const [selcted, setSelected] = useState(true);
  useEffect(() => {
    console.log(watch("eventType"), watch("locationType"));
  }, [watch("eventType"), watch("locationType")]);
  const onSubmit = (data: FormInputs) => {
    setOptions((prevOrders) => [...prevOrders, data]);
    console.log(data);
  };

  return (
    // <DefaultContainer background={true}>
    <FormProvider {...methods}>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <TextField
          name="name"
          placeholder={"שם הזמנה"}
          validate={{
            required: (value: string) => required(value),
          }}
        />
        <DynamicSelectFields name="items" options={allItems} />

        <SelectField
          options={eventType}
          name="eventType"
          defaultValue={""}
          validate={{
            required: (value: string) => required(value),
          }}
          placeholder="סוג אירוע"
        />
        <SelectField
          options={loctionType}
          name="locationType"
          defaultValue={""}
          validate={{
            required: (value: string) => required(value),
          }}
          placeholder="מקום אירוע"
        />

        <SubmitButton type="submit" disabled={isSubmitting}>
          submit
        </SubmitButton>
      </FormContainer>
    </FormProvider>
  );
};

export default AppForm;
