import React, { useState } from "react";

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

export const InputT = ({
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
        type={type}
        autoComplete={autoComplete}
        className="border-none outline-none py-1 rtl:pr-2 ltr:pl-2 w-full"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />

    </div>
  );
};
