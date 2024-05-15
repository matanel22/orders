import React, { useEffect } from "react";
import { useForm, Controller, useController } from "react-hook-form";
import { SelectInput } from "../style.index";
// import { TextField } from "@material-ui/core"

interface IProps {
  control: any;
  name: string;
  type: string;
  defaultValue?: string | number;
  label: string;
  validate?: any;
  options: { id: string; name: string }[];
}

const SelectOpt = ({
  control,
  name,
  type,
  label,
  defaultValue,
  options,
  validate,
}: IProps) => {
  const {
    field: { onBlur, onChange, ref, value },
  } = useController({
    name,
    control,
    defaultValue: defaultValue || "",
    rules: { validate },
  });
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={name}
      render={({ field }) => (
        <SelectInput
          {...field}
          onBlur={field.onBlur}
          onChange={(e) => {
            field.onChange(e.target.value);
          }}
          value={field.value}
        >
          {options.map((opt) => {
            return (
              <option key={opt.id} value={opt.id}>
                {opt.name}
              </option>
            );
          })}
        </SelectInput>
      )}
    />
  );
};
export default SelectOpt;
