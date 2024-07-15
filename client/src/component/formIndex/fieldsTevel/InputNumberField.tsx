import React from "react";
import { Controller, useController } from "react-hook-form";
// import { Error } from "../Error";
import { InputNumber, InputNumberProps } from "./InputNumber";
import { Error } from "../hookController/Error";

type Props = Omit<
  InputNumberProps,
  "onChange" | "value" | "inputRef" | "onBlur"
> & {
  validate?: any;
  defaultValue?: undefined | string | number;
};

export const InputNumberField = ({
  name,
  validate,
  defaultValue,
  prefix,
  suffix,
  value,
  ...props
}: Props) => {
  const {
    field: { onBlur, onChange, ref, value: controlValue },
  } = useController({
    name,
    rules: { validate },
    defaultValue: defaultValue || value,
  });

  
  return (
    <div className="flex flex-col">
     
          <InputNumber
            {...props}
            inputRef={ref}
            name={name}
            suffix={suffix}
            prefix={prefix}
            onBlur={onBlur}
            value={controlValue ?? ""}

            onChange={(value) => onChange(value)}
          />
        
      

      <Error name={name} />
    </div>
  );
};
