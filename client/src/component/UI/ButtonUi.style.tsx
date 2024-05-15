import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

// Define props type for the Button component
interface ButtonProps {
  isLoading: boolean;
  type: string;
}

// Styled button component
export const Button = styled.button<ButtonProps>`
  background-color: ${({ isLoading }) =>
    isLoading ? "#ccc" : "darkolivegreen"};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: ${({ isLoading }) => (isLoading ? "not-allowed" : "pointer")};
  transition: background-color 0.3s ease;
  margin-buttom: 1rem;

  &:hover {
    background-color: ${({ isLoading }) =>
      isLoading ? "#ccc" : "#darkolivegreen"};
  }

  /* Loading animation */
  &:after {
    content: "";
    width: 20px;
    height: 20px;
    border: 2px solid #fff;
    border-top-color: #007bff;
    border-radius: 50%;
    display: ${({ isLoading }) => (isLoading ? "inline-block" : "none")};
    animation: ${spin} 1s linear infinite;
    margin-left: 5px;
    vertical-align: middle;
  }
`;
