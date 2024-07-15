import { Dispatch, useEffect, useState } from "react";

import { MSTTable, TableColumn } from "../MSTtable";

import { EventProper } from "../loction";
import { IPropsUsers } from "..";
import { MultySelect, SelectOption } from "../MSTtable/fields/MultySelect";

interface IProps {
  setOptions: Dispatch<React.SetStateAction<IPropsUsers[]>>;
  options: IPropsUsers[];
}
const array = [
  { label: "טרקלין", value: "traklin" },
  { label: "רכב", value: "car" },
  { label: "הזמנת מזון", value: "orderFood" },
];
const UsersTableRow: TableColumn[] = [
  {
    label: "שם",
    columnId: "firstName",
  },
  {
    label: "משפחה",
    columnId: "lastName",
  },
  {
    label: "מספר אישי",
    columnId: "personal_id",
  },
  {
    label: "מספר טלפון",
    columnId: "phone",
  },
  {
    label: "הרשאות",
    columnId: "permissions",
  },
];

const editUsers = [
  {
    table: "improveUsers",
    name: "firstName",
    edit: "input",
    type: "text",
  },
  {
    table: "improveUsers",
    name: "lastName",
    edit: "input",
    type: "text",
  },
  {
    table: "improveUsers",
    name: "personal_id",
    edit: "input",
    type: "text",
  },
  {
    table: "improveUsers",
    name: "phone",
    edit: "input",
    type: "text",
  },
  {
    table: "improveUsers",
    name: "permissions",

    edit: "multySelect",
    options: ["traklin", "car"],
  },
];
interface ValueSelect {
  [key: string]: string;
}
export const ViewUsers = ({ setOptions, options }: IProps) => {
  const [searchValue, setSearchValue] = useState("");
  const [valueSelect, setValueSelect] = useState<ValueSelect>({});
  const [valueOpt, setValueOpt] = useState<SelectOption[]>([]);
  useEffect(() => {
    console.log("valueOpt", valueOpt);
  }, [valueOpt]);
  const heandleLineChange = (_id: string, obj: object) => {
    const updatedOptions = options.map((opt) => {
      if (opt.id === _id) {
        return { ...opt, ...obj };
      }
      return opt;
    });

    setOptions(updatedOptions);
    setValueOpt([]);
  };
  const handleDelete = (id: string) => {
    const delRow = options.filter((row) => {
      return row.id !== id;
    });
    setOptions(delRow);
  };
  const handleAddLine = (obj: IPropsUsers) => {
    const uniqueId = `id-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    const newObj = {
      ...obj,
      id: uniqueId,
      permissions: valueOpt.map((val) => val.label),
    };
    setOptions((prev) => [...prev, newObj]);

    setValueOpt([]);
  };

  return (
    <MSTTable
      textButton={"הוספת משתמשים"}
      headLine={"רשימת משתמשים"}
      tableHeadRow={UsersTableRow}
      lines={options}
      editData={editUsers}
      heandleLineChange={heandleLineChange}
      handleDelete={handleDelete}
      handleAddLine={handleAddLine}
      searchValue={searchValue}
      setValueSelect={setValueSelect}
      valueSelect={valueSelect}
      setValueOpt={setValueOpt}
      valueOpt={valueOpt}
      array={array}
    >
      <input
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
      />
    </MSTTable>
  );
};
