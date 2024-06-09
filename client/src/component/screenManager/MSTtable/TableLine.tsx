import React, { Dispatch, ReactNode, useEffect, useState } from "react";
import { InputFields } from "./fields/InputFields";
import { MSButton } from "./MSButton";
import { Line, TableColumn } from ".";
import { SelectFields } from "./fields/SelectFields";

interface TableLineProps {
  headLine?: any;
  tableHeadRow: TableColumn[];
  line: Line;
  editData: any;
  heandleLineChange: (id: string, newLine: Line) => void;
  heandleDelete: (id: string) => void;
  heandleAddLine: (newLine: Line) => void;
  searchValue: string;
  setCancel?: Dispatch<React.SetStateAction<boolean | undefined>>;
  cancel?: boolean | undefined;
  children?: ReactNode;
}

export const TableLine = ({
  headLine,
  tableHeadRow,
  line,
  editData,
  heandleLineChange,
  heandleDelete,
  searchValue,
  children,
  setCancel,
  cancel,
}: TableLineProps) => {
  const [mode, setMode] = useState<string | null>("");

  return (
    <tr>
      {mode === ""
        ? tableHeadRow.map((column, index) => (
            <td key={index}>{line[column.columnId]}</td>
          ))
        : editData.map((field: any, index: number) => (
            <React.Fragment key={index}>
              <InputFields
                initial={line[field.name]}
                type={"text"}
                changeSelectValue={(newValue: string) => {
                  const newLine = { ...line, [field.name]: newValue };
                  heandleLineChange(line.id, newLine);
                }}
              />
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setCancel?.(true);
                    setMode("");
                  }}
                >
                  {"cancel"}
                </button>
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setCancel?.(false);
                    setMode("");
                  }}
                >
                  {"edit"}
                </button>
              </div>
            </React.Fragment>
          ))}

      {mode !== "edit" ? (
        <td>
          <MSButton
            style={{ marginRight: "5px" }}
            variable=""
            width=""
            onClick={() => {
              setMode("edit");
            }}
            text="עדכן"
          />
        </td>
      ) : (
        ""
      )}
    </tr>
  );
};
