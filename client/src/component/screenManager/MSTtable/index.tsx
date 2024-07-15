import React, { Dispatch, ReactNode, useEffect, useState } from "react";
import { TableLine } from "./TableLine";
import styled from "styled-components";
import { MSButton } from "./MSButton";
import { InputFields } from "./fields/InputFields";
import { AddLineComponent } from "./fields/InputAddLine";
import OnClickOutsideModal from "../../modals";
import { SelectOption } from "./fields/MultySelect";
export interface TableColumn {
  columnId: string;
  label: string;
  type?: string;
}
export interface Line {
  id: string;
  [key: string]: any; // This allows for additional properties of any type
}
interface MSTTableProps {
  headLine: any;
  tableHeadRow: TableColumn[];
  lines: Line[];
  editData: any;
  heandleLineChange: (id: string, newLine: Line) => void;
  handleDelete: (id: string) => void;
  handleAddLine: any;
  searchValue: string;
  children?: ReactNode;
  textButton: string;
  setValueSelect?: any;
  valueSelect?: any;
  setOptions?: any;
  setValueOpt?: any;
  valueOpt?: any;
  array?: SelectOption[];
  saveOriginalState?: () => void;
  cancelChanges?: () => void;
}

export const MSTTable = ({
  headLine,
  tableHeadRow,
  lines,
  editData,
  heandleLineChange,
  handleDelete,
  searchValue,
  handleAddLine,
  children,
  textButton,
  valueSelect,
  setValueSelect,
  setOptions,
  setValueOpt,
  valueOpt,
  array,
  saveOriginalState,
  cancelChanges,
}: MSTTableProps) => {
  const [mode, setMode] = useState("");
  const [inputValue, setInputValue] = useState();

  return (
    <TableWrapper>
      <div>{headLine}</div>
      {children}

      <Table>
        <thead>
          <TableRow>
            {tableHeadRow.map((column, index) => (
              <TableHeader key={index}>{column.label}</TableHeader>
            ))}
          </TableRow>
        </thead>

        <tbody>
          {lines.map((line, index) => (
            <React.Fragment key={index}>
              <TableLine
                key={line.id}
                tableHeadRow={tableHeadRow}
                editData={editData}
                headLine={headLine}
                handleAddLine={handleAddLine}
                handleDelete={handleDelete}
                heandleLineChange={heandleLineChange}
                line={line}
                searchValue={searchValue}
                setValueOpt={setValueOpt}
                valueOpt={valueOpt}
                array={array}
                cancelChanges={cancelChanges}
                saveOriginalState={saveOriginalState}
              />
            </React.Fragment>
          ))}
        </tbody>
      </Table>

      {mode !== "ADD_LINE" ? (
        <MSButton
          style={{ marginRight: "5px" }}
          variable="miniLITE"
          text={textButton}
          width="65px"
          onClick={() => {
            setMode("ADD_LINE");
          }}
        />
      ) : (
        <AddLineComponent
          heandleLineChange={heandleLineChange}
          setOptions={setOptions}
          editData={editData}
          AddLineText={textButton}
          handleAddLine={handleAddLine}
          type={"text"}
          setInputValue={setInputValue}
          inputValue={inputValue}
          setMode={setMode}
          valueSelect={valueSelect}
          setValueSelect={setValueSelect}
          setValueOpt={setValueOpt}
          valueOpt={valueOpt}
          array={array}
        />
      )}
    </TableWrapper>
  );
};

const TableWrapper = styled.div`
  width: 80%;
  height: 100%;
  background-color: #ffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 17px 34px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 2rem;
`;

export const Table = styled.table`
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 1em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
`;
export const TableHeader = styled.th`
  background-color: #009879;
  color: #ffffff;
  text-align: left;

  padding: 8px;
`;

export const TableRow = styled.tr`
  border-bottom: 1px solid #dddddd;

  &:nth-of-type(even) {
    background-color: #f3f3f3;
  }

  &:hover {
    background-color: #f1f1f1;
  }
`;
export const TableCell = styled.td`
  padding: 12px 15px;
`;
