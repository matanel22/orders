import { Dispatch, useEffect, useState } from "react";
import { IPropsItems } from "../../formIndex/hookController";

import { MSTTable, TableColumn } from "../MSTtable";

import { EventProper } from "../loction";

interface IProps {
  setOptions: any;
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
    editItems[1].options = allEvent;
    editItems[2].options = allLoction;
    const _options = options.map((opt) => {
      const _loctionTypeId = allLoction.find((loc) => {
        return loc.id === opt.locationTypeId;
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
    console.log(obj);

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
  const handleAddLine = (obj: IPropsItems) => {
    const uniqueId = `id-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

    const newObj = { ...obj, id: uniqueId };
    setOptions((prev:any) => [...prev, newObj]);
  };

  return (
    <MSTTable
      textButton={"הוספת פריט"}
      headLine={"רשימת פריטים"}
      tableHeadRow={ItemsTableRow}
      lines={options}
      editData={editItems}
      heandleLineChange={heandleLineChange}
      handleDelete={handleDelete}
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
