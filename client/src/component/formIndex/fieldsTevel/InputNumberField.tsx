import React from "react";
import { Controller } from "react-hook-form";
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
  ...props
}: Props) => {
  return (
    <div className="flex flex-col">
      <Controller
        name={name}
        defaultValue={defaultValue}
        rules={{ validate }}
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <InputNumber
            {...props}
            inputRef={ref}
            name={name}
            suffix={suffix}
            prefix={prefix}
            onBlur={onBlur}
            value={value}
            onChange={(value) => onChange(value)}
          />
        )}
      />

      <Error name={name} />
    </div>
  );
};
