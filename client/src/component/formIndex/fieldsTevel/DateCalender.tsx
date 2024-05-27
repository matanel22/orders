import React from "react";
import { useController, useForm, useFormContext } from "react-hook-form";

interface IProps {
  name: string;
  type: string;
  label: string;
  placeholder:string;
 // Use correct type for control
  validate?: any;
  defaultValue?: string | number; // Adjust the type of defaultValue
}

const DateCalender = ({
  
  name,
  type,
  label,
  validate,
  defaultValue,
  placeholder
}: IProps) => {
  const {control} = useFormContext()
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
         placeholder={placeholder}
      />
    </>
  );
};

export default DateCalender;
