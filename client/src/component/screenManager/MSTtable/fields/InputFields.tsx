import { useEffect, useState } from "react";
import styled from "styled-components";
import { SelecDegine } from "../../../formIndex/fieldsTevel/SelectOpt";
import { TableText } from "./SelectFields";

interface IPropsInput {
  changeSelectValue: any;
  type: string;
  initial: string;
}

export const InputFields = ({
  changeSelectValue,
  type,
  initial,
}: IPropsInput) => {
  // const [value, setValue] = useState(initial);
  const handleBlur = () => {
    console.log("Input blurred", initial);
  };
  return (
    <TableText>
      <Input
        value={initial}
        type={type}
        onChange={({ target }) => {
          changeSelectValue(target.value);
          // setValue(target.value);
        }}
        onBlur={handleBlur}
      />
    </TableText>
  );
};
const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  width: 80px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
