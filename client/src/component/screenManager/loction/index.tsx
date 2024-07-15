import { useEffect, useState } from "react";
import { MSTTable, TableColumn } from "../MSTtable";

import React, { Dispatch } from "react";
import { useEvent } from "../events/EventContext";


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
  const { handleLineChange, handleDelete, handleAddLine,saveOriginalState,cancelChanges } = useEvent();

  useEffect(() => {
    saveOriginalState();
  }, []);

  return (
    <MSTTable
      textButton={"הוספת מיקום אירוע"}
      headLine={"חיפוש..."}
      tableHeadRow={LoctionTableRow}
      lines={options}
      editData={editLoction}
      heandleLineChange={handleLineChange}
      handleDelete={handleDelete}
      handleAddLine={handleAddLine}
      searchValue={searchValue}
      saveOriginalState={saveOriginalState}
      cancelChanges={cancelChanges}
    >
      <input
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
      />
    </MSTTable>
  );
};
