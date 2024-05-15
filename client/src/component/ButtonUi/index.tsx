import React, { ReactNode } from "react";

interface IPropsButtonUI {
  size?: "small" | "medium" | "large" | "extra-small";
  loading?: boolean;
  onClick?: () => void;
  buttonType?: "button" | "reset" | "submit";
  type?: "regular" | "ghost";
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
    <button type={buttonType} onClick={onClick}>
      {name}
    </button>
  );
};

export default ButtonUI;
