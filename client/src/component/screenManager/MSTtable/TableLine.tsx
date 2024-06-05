import { ReactNode, useEffect, useState } from "react";
import { InputFields } from "./fields/InputFields";
import { Buttons } from "./Buttons";
import { Line, TableColumn } from ".";

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
  useEffect(() => {
    console.log("editData", editData);
  }, []);
  return (
    <tr>
      {tableHeadRow.map((column, index) => (
        <td key={index}>{line[column.columnId]}</td>
      ))}

      {/* {editData.map((field: any, index: number) => (
        <td key={index}>
          <InputFields
            initial={line[field.name]}
            type={"text"}
            changeSelectValue={(newValue: any) => {
              const newLine = { ...line, [field.name]: newValue };
              heandleLineChange(line.id, newLine);
            }}
          />
        </td>
      ))} */}
      <td>
        <Buttons
          onClick={() => {
            setMode(null);
          }}
          text="עדכן"
          type={"button"}
        />
      </td>
    </tr>
  );
};
