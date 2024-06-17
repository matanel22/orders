import React, { useState } from "react";
import styled from "styled-components";

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
export const InputHF = ({
  name,
  value = "",
  onChange,
  onBlur,
  autoComplete = "on",
  disabled = false,
  inputRef,
  maxLength,
  type = "text",
  placeholder,
}: InputProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onBlur={onBlur}
    >
      {disabled && (
        <div className="w-full h-full bg-opacity-50 cursor-not-allowed absolute top-0 left-0 bg-gray-200"></div>
      )}
      <InputDegine
        data-cy={name}
        placeholder={placeholder}
        ref={inputRef}
        maxLength={maxLength}
        readOnly={disabled}
        type={type}
        autoComplete={autoComplete}
        className=""
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

    </div>
  );
};


export const InputDegine=styled.input`
  display: flex;
  flex-direction: column;
  /* padding: 10px 10px 8px; */
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
  padding: 17px;
  transition: 0.3s;
    &::placeholder {
      color: #ccc;
      opacity: 1;
    }
    &:focus-within {
    border-color: #8c7569;
    }
`
