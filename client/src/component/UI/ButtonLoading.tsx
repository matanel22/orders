import React, { Dispatch, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Button } from "./ButtonUi.style";

// Define keyframes for the loading animation

interface IPropsButton {
  textButton: string;
  setOpen: Dispatch<React.SetStateAction<boolean>>;
}
const ButtonLoading = ({ textButton, setOpen }: IPropsButton) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      //   setOpen(false);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div>
      <Button type="submit" isLoading={isLoading} onClick={handleClick}>
        {isLoading ? "Loading..." : textButton}
      </Button>
    </div>
  );
};

export default ButtonLoading;
