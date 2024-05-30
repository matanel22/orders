import React, { CSSProperties, ReactNode, Ref, useState } from "react";
import styled from "styled-components";
// import { AiOutlineCloseCircle } from "react-icons/ai";
export interface InputNumberProps {
  style?: CSSProperties;
  value: number | undefined;
  onChange: (value: number | undefined) => void;
  onBlur: () => void;
  prefix?: ReactNode;
  suffix?: ReactNode;
  className?: string;
  inputRef?: Ref<HTMLInputElement>;
  name: string;
  placeholder?: string;
  allowClear?: boolean;
  [x: string]: any;
}

export const InputNumber = ({
  name,
  prefix,
  suffix,
  value,
  onChange,
  onBlur,
  inputRef,
  placeholder,
  allowClear = false,
  ...props
}: InputNumberProps) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      className="border rounded-sm flex border-gray-300 w-full transition hover:border-blue-400 focus-within:ring-1"
      onBlur={onBlur}
    >
      {prefix && (
        <div className="bg-white flex px-1 justify-center items-center">
          {prefix}
        </div>
      )}
      <InputNumberDegine
        {...props}
        placeholder={placeholder}
        ref={inputRef}
        type="number"
        name={name}
        className={"border-none rtl:pr-2 ltr:pl-2 outline-none py-1 w-full"}
        data-cy={name}
        value={value}
        onChange={(e) =>
          e.target.value
            ? onChange(Number(e.target.value))
            : onChange(undefined)
        }
      />
      {allowClear && isHover ? (
        <div className="bg-white flex px-1 justify-center items-center">
          {/* <AiOutlineCloseCircle className="cursor-pointer text-gray-400 hover:text-gray-700" /> */}
        </div>
      ) : (
        suffix && (
          <div className="bg-white flex px-1 justify-center items-center">
            {suffix}
          </div>
        )
      )}
    </div>
  );
};

export const InputNumberDegine=styled.input`
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 20px;
  transition: 0.3s;
  padding: 14px;
  font-family: inherit;
  font-size: inherit;
  font-weight: 100;
     
  &::placeholder {
      color: #ccc;
      opacity: 1;
    }
  &:focus-within {
    border-color: #8c7569;
    }
`