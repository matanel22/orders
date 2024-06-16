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
    console.log("Updated options:", updatedOptions);
  };
  const heandleDelete = () => {};
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
      textButton={"הוספת סוג אירוע"}
      headLine={"View Loction"}
      tableHeadRow={EventTableRow}
      lines={options}
      editData={editEvents}
      heandleLineChange={heandleLineChange}
      heandleDelete={heandleDelete}
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
