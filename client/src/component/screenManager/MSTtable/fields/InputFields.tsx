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
  const [value, setValue] = useState(initial);

  return (
    <TableText>
      <input
        value={value}
        type={type}
        onChange={({ target }) => {
          changeSelectValue(target.value);
          setValue(target.value);
        }}
      />
    </TableText>
  );
};
