import React, { Dispatch, ReactNode, useEffect, useState } from "react";
import { InputFields } from "./fields/InputFields";
import { MSButton } from "./MSButton";
import { Line, TableColumn } from ".";
import { SelectFields } from "./fields/SelectFields";
import { MultySelect, SelectOption } from "./fields/MultySelect";

interface TableLineProps {
  headLine?: any;
  tableHeadRow: TableColumn[];
  line: Line;
  editData: any;
  heandleLineChange: (id: string, newLine: Line) => void;
  handleDelete: (id: string) => void;
  handleAddLine: (newLine: Line) => void;
  searchValue: string;
  setValueOpt?: any;
  valueOpt?: any;
  array?: SelectOption[];
  children?: ReactNode;
  saveOriginalState?: () => void;
  cancelChanges?: () => void;
}

export const TableLine = ({
  headLine,
  tableHeadRow,
  line,
  editData,
  heandleLineChange,
  handleDelete,
  searchValue,
  children,
  handleAddLine,
  setValueOpt,
  valueOpt,
  array,
  saveOriginalState,
  cancelChanges,
}: TableLineProps) => {
  const [mode, setMode] = useState<string | null>("");
  const newChangeSelectValue = (newValue: any) => {
    const newSelected = Array.isArray(newValue)
      ? newValue.map((newVal) => {
          return newVal.label;
        })
      : "";

    editData.map((field: any) => {
      if (field.edit === "multySelect") {
        const newLine = { ...line, [field.name]: newSelected };

        heandleLineChange(line.id, newLine);
      }
    });
    setValueOpt([]);
  };
  useEffect(() => {
    const columns = line.permissions.map((value: any) => ({
      label: value,
      value: value,
    }));

    setValueOpt(columns);
  }, [line]);
  return (
    <tr>
      {mode === "" ? (
        tableHeadRow.map((column, index) => (
          <td key={index}>{`${line[column.columnId]}${" "}`}</td>
        ))
      ) : (
        <>
          {editData.map((field: any, index: number) => (
            <React.Fragment key={index}>
              {field.edit === "input" && (
                <InputFields
                  initial={line[field.name]}
                  type={"text"}
                  changeSelectValue={(newValue: string) => {
                    const newLine = { ...line, [field.name]: newValue };
                    heandleLineChange(line.id, newLine);
                  }}
                />
              )}{" "}
              {field.edit === "select" && (
                <SelectFields
                  initial={line[field.name]}
                  changeSelectValue={(newValue: string) => {
                    const newLine = { ...line, [field.name]: newValue };
                    heandleLineChange(line.id, newLine);
                  }}
                  options={field.options}
                />
              )}
              {field.edit === "multySelect" && (
                <MultySelect
                  multiple={true}
                  onChange={(o) => {
                    setValueOpt(o);
                  }}
                  options={array}
                  value={valueOpt}
                  // changeSelectValue={(newValue: string[] | undefined) => {
                  //   const newLine = { ...line, [field.name]: newValue };

                  //   heandleLineChange(line.id, newLine);
                  // }}
                />
              )}
            </React.Fragment>
          ))}
          <div>
            <button
              type="button"
              onClick={() => {
                cancelChanges && cancelChanges();
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
                newChangeSelectValue(valueOpt);
                setMode("");
              }}
            >
              {"שמירה"}
            </button>
          </div>
        </>
      )}

      {mode !== "edit" ? (
        <td style={{ display: "flex" }}>
          <MSButton
            style={{ marginRight: "5px" }}
            variable="FULL"
            width=""
            onClick={() => {
              setMode("edit");
            }}
            text="עדכן"
          />
          <MSButton
            style={{ marginRight: "5px" }}
            variable="LITE"
            width=""
            onClick={() => {
              handleDelete(line.id);
              setMode("edit");
            }}
            text="מחק"
          />
        </td>
      ) : (
        ""
      )}
    </tr>
  );
};
