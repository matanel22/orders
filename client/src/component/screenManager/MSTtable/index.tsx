import React, { Dispatch, ReactNode, useEffect, useState } from "react";
import { TableLine } from "./TableLine";
import styled from "styled-components";
import { MSButton } from "./MSButton";
import { InputFields } from "./fields/InputFields";
import { AddLineComponent } from "./fields/InputAddLine";
import OnClickOutsideModal from "../../modals";
export interface TableColumn {
  columnId: string;
  label: string;
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
}: MSTTableProps) => {
  const [mode, setMode] = useState("");
  const [inputValue, setInputValue] = useState();
  const [openHistoryModal, setOpenHistoryModal] = useState(false);
  const reset = () => {
    setValueSelect({});
  };
  return (
    <TableWrapper>
      <div>{headLine}</div>
      {children}
      <div style={{ width: "100%", height: "100%", overflow: "scroll" }}>
        <table>
          <thead style={{ position: "sticky", top: 0 }}>
            <tr>
              {tableHeadRow.map((column, index) => (
                <th key={index}>{column.label}</th>
              ))}
            </tr>
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
                />
              </React.Fragment>
            ))}
          </tbody>
        </table>

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
            editData={editData}
            AddLineText={textButton}
            handleAddLine={handleAddLine}
            type={"text"}
            setInputValue={setInputValue}
            inputValue={inputValue}
            setMode={setMode}
            valueSelect={valueSelect}
            setValueSelect={setValueSelect}
          />
        )}
      </div>
    </TableWrapper>
  );
};
const TableWrapper = styled.div`
  //   max-width: 1200px;
  //   max-height: 800px;
  width: 80%;
  height: 100%;
  background-color: #fffff;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 17px 34px;
  dispaly: flex;
  flex-dirction: colonm;
  margin: 0 auto;
  margin-top: 2rem;
`;
