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
  const [cancel, setCancel] = useState<boolean | undefined>(false);
  const heandleLineChange = (_id: string, obj: object) => {
    const updatedOptions = options.map((opt) => {
      if (opt.id === _id) {
        return { ...opt, ...obj };
      }
      return opt;
    });
    setOptions(updatedOptions);
  };

  const heandleDelete = (id: string) => {
    const delRow = options.filter((row) => {
      return row.id !== id;
    });
    setOptions(delRow);
  };
  const handleAddLine = (obj: IPropsItems) => {
    setOptions((prev) => [...prev, obj]);
    console.log("Added new line:", obj);
  };
  return (
    <MSTTable
      textButton={"הוספת פריט"}
      headLine={"View Items"}
      tableHeadRow={ItemsTableRow}
      lines={options}
      editData={editItems}
      heandleLineChange={heandleLineChange}
      heandleDelete={heandleDelete}
      heandleAddLine={handleAddLine}
      searchValue={searchValue}
      setCancel={setCancel}
      cancel={cancel}
    >
      <input
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
      />
    </MSTTable>
  );
};
