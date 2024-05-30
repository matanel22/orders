import React, { Dispatch, useEffect, useState } from "react";
import { FormProvider, useFieldArray, useForm } from "react-hook-form";

// import SelectOpt from "./input/SelectOpt";
import { DefaultContainer } from "../../../defultContainer";
import { FormContainer, SubmitButton } from "./style.index";
import { isInt, required } from "../../validates";
import { TextField } from "../fieldsTevel/TextField";

import DynamicSelectFields from "../fieldsTevel/SelectHf";
import { SelectField } from "../fieldsTevel/SelectOpt";
import ButtonUI from "../../ButtonUi";
import DateCalender from "../fieldsTevel/DateCalender";
import { useNavigate } from "react-router-dom";

export interface FormInputs {
  id: string;
  name: string;
  eventType: string;
  locationType: string;
  items: IPropsItems[];
  statusId: { id: string; name: string };
  orderDate?: Date;
  orderTime?: string;

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
          // amount: 0,
          loctionTypeId: "",
          eventTypeId: "",
          comments: "",
        },
      ],
      statusId: { id: "", name: "" },
    },
  });
  const nav = useNavigate();
  const {
    handleSubmit,
    watch,
    control,
    formState: { isSubmitting,isValid },
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
    <DefaultContainer background={true}>

    <FormProvider {...methods}>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <h1 style={{textAlign:"center"}}>יצירת הזמנה</h1>
        <TextField
          name="name"
          placeholder={"שם הזמנה"}
          validate={{
            required: (value: string) => required(value),
          }}
        />
        <div style={{display:"flex"}}>
      
        <TextField
          name="orderTime"
          placeholder={"שעת הזמנה"}
          type={"time"}
          validate={{
            required: (value: string) => required(value),
          }}
        />
       
        <div style={{paddingRight:"1rem"}}>
         <DateCalender
         label=""
          name="orderDate"
          placeholder={"תאריך הזמנה"}
          type={"date"}
          validate={{
            required: (value: string) => required(value),
          }}
        />
        </div>
        </div>
    

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
    <DynamicSelectFields name="items" options={allItems} />
        <ButtonUI  type="submit" disabled={!isValid}name="הוסף הזמנה">
        
        </ButtonUI>
      </FormContainer>
    </FormProvider>
    
    </DefaultContainer>

  );
};

export default AppForm;
