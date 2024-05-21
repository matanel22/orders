import React, { forwardRef } from "react";
import { useController } from "react-hook-form";
import { IPropsItems } from "../hookController";
import { Error } from "../hookController/Error";

export interface SelectOption {
  label: string;
  value: string | number;
}

export interface SelectFieldProps {
  name: string;
  options: IPropsItems[];
  validate?: any;
  defaultValue?: string | number;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export const SelectField = forwardRef<HTMLSelectElement, SelectFieldProps>(
  (
    { name, options, validate, defaultValue, placeholder, className, disabled },
    ref
  ) => {
    const {
      field: { onChange, onBlur, value },
    } = useController({
      name,
      rules: { validate },
      defaultValue: defaultValue || "",
    });

    return (
      <div className="flex flex-col">
        <select
          name={name}
          ref={ref}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={className}
          disabled={disabled}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>
        <Error name={name} />
      </div>
    );
  }
);
