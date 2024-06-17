import { useState } from "react";
import { MSTTable, TableColumn } from "../MSTtable";

import React, { Dispatch } from "react";
import DataTable from "../tableRow";

export interface EventProper {
  id: string;
  name: string;
  comments: string;
}
const LoctionTableRow: TableColumn[] = [
  {
    label: "מקום אירוע",
    columnId: "name",
  },
];
const editLoction = [
  {
    table: "items",
    name: "name",
    edit: "input",
    type: "text",
  },
  // {
  //   table: "items",
  //   name: "name",
  //   edit: "select",
  //   // type:"text",
  // },
];
export interface IPropsEventLoc {
  options: EventProper[];
  setOptions: Dispatch<React.SetStateAction<EventProper[]>>;
}

export const ViewLoction = ({ options, setOptions }: IPropsEventLoc) => {
  const [searchValue, setSearchValue] = useState("");
  const heandleLineChange = (_id: string, obj: object) => {
    const updatedOptions = options.map((opt) => {
      if (opt.id === _id) {
        return { ...opt, ...obj };
      }
      return opt;
    });
    setOptions(updatedOptions);
    console.log("Updated options:", updatedOptions);
  };
  const handleDelete = (id: string) => {
    const delRow = options.filter((row) => {
      return row.id !== id;
    });
    setOptions(delRow);
  };
  const heandleAddLine = (newName: string) => {
    const uniqueId = `id-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    // Add the unique ID to the object
    const newObj = { name: newName, id: uniqueId, comments: "" };

    // Update the state with the new object
    setOptions((prev) => [...prev, newObj]);

    console.log("Added new line:", newObj);
  };
  return (
    <MSTTable
      textButton={"הוספת מיקום אירוע"}
      headLine={"חיפוש..."}
      tableHeadRow={LoctionTableRow}
      lines={options}
      editData={editLoction}
      heandleLineChange={heandleLineChange}
      handleDelete={handleDelete}
      handleAddLine={heandleAddLine}
      searchValue={searchValue}
    >
      <input
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
      />
    </MSTTable>
  );
};
