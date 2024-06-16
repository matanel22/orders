import { Dispatch, useEffect, useState } from "react";
import { IPropsItems, Items } from "../../formIndex/hookController";

import { MSTTable, TableColumn } from "../MSTtable";
import DataTable from "../tableRow";
import { EventProper } from "../loction";

interface IProps {
  setOptions: Dispatch<React.SetStateAction<IPropsItems[]>>;
  options: IPropsItems[];
  allLoction: EventProper[];
  allEvent: EventProper[];
}
interface Option {
  id: string;
  name: string;
}
const ItemsTableRow: TableColumn[] = [
  {
    label: "שם פריט",
    columnId: "name",
  },
  {
    label: "סוג מקום",
    columnId: "eventTypeId",
  },
  {
    label: "שם מקום",
    columnId: "loctionTypeId",
  },
];

interface ArrayItem {
  type?: string;
  table: string;
  name: string;
  edit: string;
  options?: Option[];
}
const editItems: ArrayItem[] = [
  {
    table: "items",
    name: "name",
    edit: "input",
    type: "text",
  },
  {
    table: "items",
    name: "eventTypeId",
    edit: "select",
    options: [],
  },
  {
    table: "items",
    name: "loctionTypeId",

    edit: "select",
    options: [],

    // type:"text",
  },
];
interface ValueSelect {
  [key: string]: string;
}
export const ViewItems = ({
  setOptions,
  options,
  allLoction,
  allEvent,
}: IProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [valueSelect, setValueSelect] = useState<ValueSelect>({});
  useEffect(() => {
    console.log("valueSelect", valueSelect);
  }, [valueSelect]);
  useEffect(() => {
    editItems[1].options = allEvent;
    editItems[2].options = allLoction;
    const _options = options.map((opt) => {
      const _loctionTypeId = allLoction.find((loc) => {
        return loc.id === opt.loctionTypeId;
      });
      const _eventTypeId = allEvent.find((eve) => eve.id === opt.eventTypeId);
      return {
        ...opt,
        eventTypeId: _eventTypeId?.name,
        loctionTypeId: _loctionTypeId?.name,
      };
    });
    setOptions(_options);
  }, []);

  const heandleLineChange = (_id: string, obj: object) => {
    console.log(options);

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
    const uniqueId = `id-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    // Add the unique ID to the object
    const newObj = { ...obj, id: uniqueId };
    setOptions((prev) => [...prev, newObj]);
    console.log("Added new line:", obj);
  };

  return (
    <MSTTable
      textButton={"הוספת פריט"}
      headLine={"רשימת פריטים"}
      tableHeadRow={ItemsTableRow}
      lines={options}
      editData={editItems}
      heandleLineChange={heandleLineChange}
      heandleDelete={heandleDelete}
      handleAddLine={handleAddLine}
      searchValue={searchValue}
      valueSelect={valueSelect}
      setValueSelect={setValueSelect}
    >
      <input
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
      />
    </MSTTable>
  );
};
