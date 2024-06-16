import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { SelecDegine } from "../../../formIndex/fieldsTevel/SelectOpt";

interface IPropsSelect {
  changeSelectValue: any;
  options: any;
  initial: string;
  mode?: string;
  field?: any;
  setValueSelect?: any;
  valueSelect?: any;
  handleChange?: any;
}

export const SelectFields = ({
  changeSelectValue,
  options,
  initial,
  mode,
  field,
  valueSelect,
  setValueSelect,
  handleChange,
}: IPropsSelect) => {
  const [value, setValue] = useState(initial);

  return (
    <TableText>
      {mode !== "ADD" ? (
        <SelecDegine
          value={value}
          onChange={({ target }) => {
            setValue(target.value);

            changeSelectValue(target.value);
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
      ) : (
        <React.Fragment>
          <SelecDegine
            value={valueSelect[field.name] || ""}
            onChange={(event) => {
              handleChange(event, field.name);
            }}
          >
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
        </React.Fragment>
      )}
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
