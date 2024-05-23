import React from "react";
import { useController } from "react-hook-form";

import { Error } from "../hookController/Error";
import { InputT } from "./InputT";

export interface InputProps {
  style?: React.CSSProperties;
  value?: string | number | undefined;
  onChange: (value: string | undefined) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  disabled?: boolean;
  className?: string;
  autoComplete?: "off" | "on";
  inputRef?: React.Ref<HTMLInputElement>;
  name: string;
  placeholder?: string;
  allowClear?: boolean;
  type?: string;
  maxLength?: number;
  defaultValue?: string;
}

type Props = Omit<InputProps, "onChange" | "inputRef" | "onBlur"> & {
  validate?: any;
  defaultValue?: undefined | string | number;
};

export const TimeCalender = ({
  name,
  validate,
  defaultValue,
  
  value,
  type,
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
      <InputT
        {...props}
        inputRef={ref}
        name={name}
        onBlur={onBlur}
        value={controlValue ?? ""}
        onChange={(value) => onChange(value)}
        type={type}
      />
      <Error name={name} />
    </div>
  );
};
