import { useState } from "react";
import { MSTTable, TableColumn } from "../MSTtable";
import { IPropsEventLoc } from "../loction";
const EventTableRow: TableColumn[] = [
  {
    label: "סוג אירוע",
    columnId: "name",
  },
];
const editEvents = [
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
export const ViewEvent = ({ options, setOptions }: IPropsEventLoc) => {
  const [searchValue, setSearchValue] = useState("");
  const heandleLineChange = () => {};
  const heandleDelete = () => {};
  const heandleAddLine = () => {};
  return (
    <MSTTable
      textButton={"הוספת סוג אירוע"}
      headLine={"View Loction"}
      tableHeadRow={EventTableRow}
      lines={options}
      editData={editEvents}
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
  );
};
