import React, { useState } from "react";

export interface InputProps {
  style?: React.CSSProperties;
  value?: string | number | undefined;
  onChange: (value: string | undefined) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: () => void;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
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
  defaultValue,
  onBlur,
  autoComplete = "on",
  disabled = false,
  inputRef,
  maxLength,
  type = "text",
  placeholder,
  allowClear = false,
  className,
  onKeyDown,
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

      <input
        data-cy={name}
        onKeyDown={onKeyDown}
        placeholder={placeholder}
        ref={inputRef}
        maxLength={maxLength}
        readOnly={disabled}
        role="search"
        type={type}
        autoComplete={autoComplete}
        className="border-none outline-none py-1 rtl:pr-2 ltr:pl-2 w-full"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
      {allowClear && isHover && !disabled && value ? (
        <div
          role="clear"
          onClick={(e) => {
            e.stopPropagation();
            onChange("");
          }}
          className="px-1 bg-white flex justify-center items-center"
        >
          {/* <AiOutlineCloseCircle className="text-gray-400 cursor-pointer hover:text-gray-700" /> */}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
