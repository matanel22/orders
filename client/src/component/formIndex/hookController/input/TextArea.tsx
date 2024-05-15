import React from "react";
import { useForm, Controller, useController } from "react-hook-form";

import { Error } from "./Error";
interface IProps {
  control: any;
  name: string;
  type: string;
  label: string;
  validate?: any;
  defaultValue?: string | number;
}
const TextArea = ({
  control,
  name,
  type,
  label,
  validate,
  defaultValue,
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
    <>
      <Controller
        name={name}
        control={control}
        defaultValue=""
        render={({ field }) => (
          <textarea
            {...{ onBlur, onChange, ref, value }}
            onChange={(e) => {
              onChange(e.target.value);
            }}
            ref={ref}
            onBlur={onBlur}
            value={value}
            placeholder={label}
          />
        )}
      />
      {/* <Error name={name} /> */}
    </>
  );
};
export default TextArea;
