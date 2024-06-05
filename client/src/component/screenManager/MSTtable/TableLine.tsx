import React, { ReactNode, useEffect, useState } from "react";
import { InputFields } from "./fields/InputFields";
import { Buttons } from "./Buttons";
import { Line, TableColumn } from ".";
import { SelectFields } from "./fields/SelectFields";

interface TableLineProps {
  headLine?: any;
  tableHeadRow: TableColumn[];
  line: Line;
  editData: any;
  heandleLineChange: (id: string, newLine: Line) => void;
  heandleDelete: (id: string) => void;
  heandleAddLine: () => void;
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
              {/* <SelectFields
                changeSelectValue={heandleLineChange}
                options={field}
              /> */}

              <InputFields
                initial={line[field.name]}
                type={"text"}
                changeSelectValue={(newValue: any) => {
                  const newLine = { ...line, [field.name]: newValue };
                  heandleLineChange(line.id, newLine);
                }}
              />
              <div>
                <button
                  type="button"
                  onClick={() => {
                    setMode("");
                  }}
                >
                  {"בטל"}
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
            </React.Fragment>
          ))}

      {mode !== "edit" ? (
        <td>
          <Buttons
            onClick={() => {
              setMode("edit");
            }}
            text="עדכן"
            type={"button"}
          />
        </td>
      ) : (
        ""
      )}
    </tr>
  );
};
