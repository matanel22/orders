import React from "react";
import { useFormContext, useFieldArray, Controller } from "react-hook-form";
import { SelectField } from "./SelectOpt";
import { IPropsItems } from "../hookController";
import { InputNumberField } from "./InputNumberField";
import ButtonLoading from "../../UI/ButtonLoading";
import { required } from "../../validates";
import styled from "styled-components";

export interface DynamicSelectFieldsProps {
  name: string;
  options: IPropsItems[];
}

const DynamicSelectFields = ({ name, options }: DynamicSelectFieldsProps) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  });

  return (
    <div>
      {fields.map((field, index) => (
        <div
          key={field.id}
          style={{ display: "flex" }}
          className="flex items-center"
        >
          <Controller
            name={`${name}[${index}].name`}
            control={control}
            // defaultValue={}
            render={({ field }) => (
              <SelectField
                {...field}
                options={options}
                placeholder="בחר פריט"
                validate={{
                  required: (value: string) => required(value),
                }}
              />
            )}
          />
          <div style={{paddingRight:"2rem"}}>
          <InputNumberField
            name={`${name}[${index}].amount`}
            defaultValue={""}
            validate={{
              required: (value: string) => (value ? true : "שדה זה הינו חובה"),
            }}
          />
          </div>
          <ButtonLoading
            textButton="x"
            type="button"
            onClick={() => {
              remove(index);
            }}
          />
        </div>
      ))}
      <ButtonDegine
        type="button"
        onClick={() => {
          append({});
        }}
      >
        הוספת שורה
      </ButtonDegine>
    </div>
  );
};

export default DynamicSelectFields;

export const ButtonDegine=styled.button`
  color: darken(#8c7569, 5%);
    font-family: "Nunito", sans-serif;
    font-size: 18px;
    cursor: pointer;
    border: 0;
    outline: 0;
    padding: 10px 40px;
    border-radius: 10px;
    background: rgb(255, 255, 255);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.16);
    transition: 0.3s;
    &:hover {
      border-color: rgba(113, 108, 150, 0.903);
      background: rgba(#fff, 0.8);
    }
`
