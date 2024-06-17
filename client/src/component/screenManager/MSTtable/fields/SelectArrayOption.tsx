import { useEffect, useState } from "react";
import styled from "styled-components";
import { SelecDegine } from "../../../formIndex/fieldsTevel/SelectOpt";

interface IPropsSelect {
  changeSelectValue: any;
  options: any;
  initial: string;
}

export const SelectArrayOption = ({
  changeSelectValue,
  options,
  initial,
}: IPropsSelect) => {
  const [value, setValue] = useState(initial);

  return (
    <TableText>
      <SelecDegine
        value={value}
        onChange={({ target }) => {
          setValue(target.value);
          //   changeSelectValue(target.value);
        }}
      >
        {value ? <option>{value}</option> : ""}
        {options.length > 0
          ? options.map((opt: any, index: number) => {
              return (
                <option value={opt.name} key={index}>
                  {opt.name}
                </option>
              );
            })
          : ""}
      </SelecDegine>
    </TableText>
  );
};

export const TableText = styled.td`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 21px;
  text-align: right;
  // padding: 10px 7px;
  border-bottom: 3px solid #dadada;
`;
