import { Dispatch, useState } from "react";
import { IPropsItems } from "../../formIndex/hookController";

import { MSTTable, TableColumn } from "../MSTtable";
import DataTable from "../tableRow";


interface IProps {
  setOptions: Dispatch<React.SetStateAction<IPropsItems[]>>;
  options: IPropsItems[];
}


const ItemsTableRow: TableColumn[] = [
  {
    label: "שם פריט",
    columnId: "name",
  },
];
const editItems = [
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
export const ViewItems = ({ setOptions, options }: IProps) => {
  const [searchValue, setSearchValue] = useState("");
  const heandleLineChange = () => {};
  const heandleDelete = () => {};
  const heandleAddLine = () => {};
  return (
    <MSTTable
      textButton={"הוספת פריט"}
      headLine={"View Items"}
      tableHeadRow={ItemsTableRow}
      lines={options}
      editData={editItems}
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
