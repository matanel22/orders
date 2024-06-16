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
  handleAddLine: (newLine: Line) => void;
  searchValue: string;

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
  handleAddLine,
}: TableLineProps) => {
  const [mode, setMode] = useState<string | null>("");

  return (
    <tr>
      {mode === "" ? (
        tableHeadRow.map((column, index) => (
          <td key={index}>{line[column.columnId]}</td>
        ))
      ) : (
        <>
          {editData.map((field: any, index: number) => (
            <React.Fragment key={index}>
              {field.edit === "input" ? (
                <InputFields
                  initial={line[field.name]}
                  type={"text"}
                  changeSelectValue={(newValue: string) => {
                    const newLine = { ...line, [field.name]: newValue };
                    heandleLineChange(line.id, newLine);
                  }}
                />
              ) : (
                <SelectFields
                  initial={line[field.name]}
                  changeSelectValue={(newValue: string) => {
                    const newLine = { ...line, [field.name]: newValue };
                    heandleLineChange(line.id, newLine);
                  }}
                  options={field.options}
                />
              )}
            </React.Fragment>
          ))}
          <div>
            <button
              type="button"
              onClick={() => {
                setMode("");
              }}
            >
              {"ביטול"}
            </button>
          </div>
          <div>
            <button
              type="button"
              onClick={() => {
                setMode("");
              }}
            >
              {"שמירה"}
            </button>
          </div>
        </>
      )}

      {mode !== "edit" ? (
        <td>
          <MSButton
            style={{ marginRight: "5px" }}
            variable="LITE"
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
