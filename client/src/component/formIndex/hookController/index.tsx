import React, { Dispatch, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { DefaultContainer } from "../../../defultContainer";
import { FormContainer, SubmitButton } from "./style.index";
import { isInt, required } from "../../validates";
import { TextField } from "../fieldsTevel/TextField";
import DynamicSelectFields from "../fieldsTevel/SelectHf";
import { SelectField } from "../fieldsTevel/SelectOpt";
import ButtonUI from "../../ButtonUi";
import DateCalender from "../fieldsTevel/DateCalender";
import { useNavigate } from "react-router-dom";
import { Line, TableColumn } from "../../screenManager/MSTtable";
import { EventType, Items, LocationType } from "../../ArrData";
import { watch } from "fs";


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
  handleDelete?: (id: string) => void;
  handleLineChange?: any;
  handleAddLine?: any;
  tableHeadRow?: TableColumn[];
  options: FormInputs[];
  setOptions: Dispatch<React.SetStateAction<FormInputs[]>>;
  line?: Line;
}

export interface IPropsItems {
  id: string;
  name: string;
  amount?: number;
  eventTypeId?: string;
  locationTypeId?: string;
  comments?: string;
}

const AppForm = ({ options, setOptions, line }: FormOptions) => {
  const [allItems, setAllItems] = useState(Items);
  const navigate = useNavigate();
  const methods = useForm<FormInputs>({
    mode: "onBlur",
    shouldUnregister: true,
    reValidateMode: "onChange",

  });
  const { handleSubmit,watch, reset, formState: { isValid } } = methods;

  useEffect(() => {
    
 
    reset(line);
  }, [reset, line]);

  const onSubmit = (data: FormInputs) => {
    const foundLocation = LocationType.find(loc => loc.id === data.locationType);
    const foundEvent = EventType.find(eve => eve.id === data.eventType);
    if (foundLocation) data.locationType = foundLocation.name;
    if (foundEvent) data.eventType = foundEvent.name;
    data.statusId = { id: "1", name: "טרם אושר" };
    
    navigate("/");
  };

  return (
    <DefaultContainer background={true}>
      <FormProvider {...methods}>
        <FormContainer onSubmit={handleSubmit(onSubmit)}>
          
          <div style={{ display: "flex" }}>
          <TextField
            name="name"
            type="text"
            placeholder="שם הזמנה"
            validate={{
              required: (value: string) => required(value),
            }}
          />
            <TextField
              name="orderTime"
              type="time"
              placeholder="שעת הזמנה"
              validate={{
                required: (value: string) => required(value),
              }}
            />
            {/* <div style={{ paddingRight: "1rem" }}>
              <DateCalender
                name="orderDate"
                placeholder="תאריך הזמנה"
                validate={{
                  required: (value: string) => required(value),
                }}
              />
            </div> */}
          </div>
          <SelectField
            options={EventType}
            name="eventType"
            defaultValue=""
            validate={{
              required: (value: string) => required(value),
            }}
            placeholder="סוג אירוע"
          />
          <SelectField
            options={LocationType}
            name="locationType"
            defaultValue=""
            validate={{
              required: (value: string) => required(value),
            }}
            placeholder="מקום אירוע"
          />
          <DynamicSelectFields name="items" options={allItems} />
          <ButtonUI type="submit" disabled={!isValid} name="הוסף הזמנה" />
        </FormContainer>
      </FormProvider>
    </DefaultContainer>
  );
};

export default AppForm;
