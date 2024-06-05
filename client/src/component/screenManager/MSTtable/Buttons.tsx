import styled from "styled-components";

interface IPropsButtons {
  type: "submit" | "reset" | "button";
  text: string;
  onClick: any;
}

export const Buttons = ({ type, text, onClick }: IPropsButtons) => {
  return (
    <ButtonDe type={type} onClick={onClick}>
      {text}
    </ButtonDe>
  );
};
const ButtonDe = styled.button`
  background-color: #007bff;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 12px;
  transition-duration: 0.4s;

  &:hover {
    background-color: white;
    color: black;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  &:active {
    background-color: #0056b3;
    color: white;
  }

  &:disabled {
    background-color: #e0e0e0;
    color: #a0a0a0;
    cursor: not-allowed;
  }
`;
