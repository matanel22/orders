import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";

interface Props {
  name: string;
  style?: React.CSSProperties;
}

export const Error = ({ name, style }: Props) => {
  return (
    <ErrorMessage
      name={name}
      as={
        <div
          className="text-red-500 font-bold whitespace-normal"
          style={style}
        />
      }
    />
  );
};
