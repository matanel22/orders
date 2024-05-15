import React, { useEffect, useState } from "react";
import {
  Control,
  Controller,
  FieldValues,
  useController,
  useFieldArray,
} from "react-hook-form";
import { InputField, SelectInput } from "../style.index";
import ButtonLoading from "../../../UI/ButtonLoading";
import Input from "./Input";
import { required } from "../../../validates";

interface item {
  // id: string;
  name: string;
  amount: number;
}

interface IProps {
  control: any;
  name: string;
  type: string;
  label: string;
  defaultValue?: string | number;
  selcted: boolean;

  // selectedValue: string;

  options: { id: string; name: string }[];
}

const ArrayInput = ({
  control,
  name,
  type,
  label,
  selcted,
  options,

  defaultValue,
}: // selectedValue,
IProps) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  });

  return (
    <>
      {fields.map((field, index) => (
        <div style={{ display: "flex" }} key={index}>
          <Controller
            name={`items.${index}.name`}
            control={control}
            // defaultValue={field.name}
            render={({ field }) => (
              <SelectInput {...field}>
                {options.map((b, index) => (
                  <option disabled={selcted} key={b.id} value={b.id}>
                    {b.name}
                  </option>
                ))}
              </SelectInput>
            )}
          />
          <Controller
            name={`items.${index}.amount`}
            control={control}
            disabled={selcted}
            // defaultValue={field.amount}
            render={({ field }) => (
              <Input
                label=""
                control={control}
                defaultValue={""}
                {...field}
                type="number"
                validate={{
                  required: (value: string) => required(value),
                }}
              />
            )}
          />
          <ButtonLoading
            textButton="x"
            type="button"
            onClick={() => {
              remove(index);
            }}
          />
        </div>
      ))}

      <button
        type="button"
        onClick={() => {
          append({ name: "", amount: 0 });
        }}
      >
        הוספת שורה
      </button>
    </>
  );
};

export default ArrayInput;
