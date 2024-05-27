import React, { ReactNode } from "react";
import { SubmitButton } from "../formIndex/hookController/style.index";

interface IPropsButtonUI {
  size?: "small" | "medium" | "large" | "extra-small";
  loading?: boolean;
  onClick?: () => void;
  buttonType?: "button" | "reset" | "submit";
  type?:string;
  disabled?: boolean;
  danger?: boolean;
  name?: string;
  disabledTooltip?: string;
  className?: string;
  notRounded?: boolean;
  children?: ReactNode;
}

const ButtonUI = ({
  onClick,
  loading,
  size,
  buttonType,
  disabled,
  name,
  children,
}: IPropsButtonUI) => {
  return (
    <SubmitButton disabled={disabled} type={buttonType} onClick={onClick}>
      {name}
    </SubmitButton>
  );
};

export default ButtonUI;
