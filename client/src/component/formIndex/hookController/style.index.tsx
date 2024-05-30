import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  direction: rtl;
  gap: 10px;
  padding: 20px;
  border-radius: 5px;
  background-color: #f4f4f4;

`;

export const SelectInput = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const SubmitButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
`;
export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
`;
