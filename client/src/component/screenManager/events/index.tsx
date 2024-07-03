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
    table: "eventType",
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

  const heandleLineChange = (_id: string, obj: object) => {
    const updatedOptions = options.map((opt) => {
      if (opt.id === _id) {
        return { ...opt, ...obj };
      }
      return opt;
    });
    setOptions(updatedOptions);

  };
  const handleDelete = (id: string) => {
    const delRow = options.filter((row) => {
      return row.id !== id;
    });
    setOptions(delRow);
  };
  const heandleAddLine = (newName: string) => {
    const uniqueId = `id-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    const newObj = { name: newName, id: uniqueId, comments: "" };

    setOptions((prev) => [...prev, newObj]);
  };
  return (
    <MSTTable
      textButton={"הוספת סוג אירוע"}
      headLine={"חיפוש..."}
      tableHeadRow={EventTableRow}
      lines={options}
      editData={editEvents}
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
