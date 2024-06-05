
import { Dispatch, useState } from "react";
import { MSTTable, TableColumn } from "../MSTtable";

import React,{ Dispatch } from "react";
import DataTable from "../tableRow";


interface EventProper {
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
  {
    table: "items",
    name: "name",
    edit: "select",
    // type:"text",
  },
];
export interface IPropsEventLoc {
  options: EventProper[];
  setOptions: Dispatch<React.SetStateAction<EventProper[]>>;
}

export const ViewLoction = ({ options, setOptions }: IPropsEventLoc) => {

  const [searchValue, setSearchValue] = useState("");
  const heandleLineChange = () => {};
  const heandleDelete = () => {};
  const heandleAddLine = () => {};
  return (
    <MSTTable
      textButton={"הוספת מיקום אירוע"}
      headLine={"View Loction"}
      tableHeadRow={LoctionTableRow}
      lines={options}
      editData={editLoction}
      heandleLineChange={heandleLineChange}
      heandleDelete={heandleDelete}
      heandleAddLine={heandleAddLine}
      searchValue={searchValue}
    >
      <input
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
      />
    </MSTTable>



};
