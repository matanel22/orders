import React from "react";
import { useFormContext, useFieldArray, Controller } from "react-hook-form";
import { SelectField } from "./SelectOpt";
import { IPropsItems } from "../hookController";
import { InputNumberField } from "./InputNumberField";
import ButtonLoading from "../../UI/ButtonLoading";

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
                placeholder="Select a value"
                validate={{
                  required: (value: string) =>
                    value ? true : "This field is required",
                }}
              />
            )}
          />
          <InputNumberField
            name={`${name}[${index}].amount`}
            defaultValue={""}
            validate={{
              required: (value: string) =>
                value ? true : "This field is required",
            }}
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
          append({});
        }}
      >
        הוספת שורה
      </button>
    </div>
  );
};

export default DynamicSelectFields;
