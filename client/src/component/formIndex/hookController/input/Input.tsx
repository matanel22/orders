import React from "react";
import { useController } from "react-hook-form";
import { Error } from "./Error";

interface IProps {
  name: string;
  type: string;
  label: string;
  control: any;
  validate?: any;
  defaultValue?: string | number;
}

const Input = ({
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
      <input
        type={type}
        {...{ onBlur, onChange, ref, value }}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        ref={ref}
        onBlur={onBlur}
        value={value}
        placeholder={label}
      />
    </>
  );
};

export default Input;
