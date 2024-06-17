import React, { forwardRef } from "react";
import { useController } from "react-hook-form";
import { IPropsItems } from "../hookController";
import { Error } from "../hookController/Error";
import styled from "styled-components";

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
      <div>
        <SelecDegine
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
        </SelecDegine>
        <Error name={name} />
      </div>
    );
  }
);
const border = "#ccc";
const borderFocus = "#010101";
const bookingGreen = "#28a745";
const borderRadius = (radius: any) => `
  border-radius: ${radius};
`;

// Mixin for transition
const transition = (trans: any) => `
  transition: ${trans};
`;
export const SelecDegine = styled.select`
  padding: 10px;
  font-size: 14px;
  border: 1px solid ${border};

  width: 110px;
  margin-bottom: 18px;
  color: #888;
  font-family: "Lato", "sans-serif";
  font-size: 16px;
  font-weight: 300;
  ${borderRadius("2px")}
  ${transition("all .3s")}

    &:focus, &:hover {
    outline: none;
    border-color: ${borderFocus};
    + label {
      color: ${bookingGreen};
      cursor: text;
    }
  }
`;
