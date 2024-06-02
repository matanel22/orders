import React from "react";
import { useController, useForm, useFormContext } from "react-hook-form";
import styled from "styled-components";

interface IProps {
  name: string;
  type: string;
  label: string;
  placeholder: string;

  validate?: any;
  defaultValue?: string | number;
}

const DateCalender = ({
  name,
  type,
  label,
  validate,
  defaultValue,
  placeholder,
}: IProps) => {
  const { control } = useFormContext();
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
      <InputDateDegine
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

export const InputDateDegine = styled.input`
  display: flex;
  flex-direction: column;

  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 19px;
  transition: 0.3s;
  &::placeholder {
    color: #ccc;
    opacity: 1;
  }
  &:focus-within {
    border-color: #8c7569;
  }
`;
