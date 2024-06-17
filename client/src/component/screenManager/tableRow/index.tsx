import React, { Dispatch, useState } from "react";
import { Items } from "../../formIndex/hookController";
interface PropsColonms {
  id: string;
  name: string;
}
interface DataTableProps<T> {
  initialData: T[];
  setInitialData?: Dispatch<React.SetStateAction<T[]>>;
  colonms: PropsColonms[];
}

const DataTable = <T,>({ initialData, colonms }: DataTableProps<T>) => {
  const [data, setData] = useState<T[]>(initialData);
  const [newRow, setNewRow] = useState<Partial<T>>({});

  const handleAddRow = () => {
    setData([...data, newRow as T]);
    setNewRow({});
  };

  const handleDeleteRow = (index: number) => {
    setData(data.filter((_, i) => i !== index));
  };

  const handleChange = (key: keyof T, value: string) => {
    setNewRow({
      ...newRow,
      [key]: value,
    });
  };

  if (data.length === 0) return <div>No data available</div>;

  return (
    <React.Fragment>
      <table>
        <thead>
          <tr>
            {colonms.map((col) => (
              <th key={col.id}>{col.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Items.map((row) => (
            <div key={row.id}>{row.name}</div>
          ))}
        </tbody>
      </table>
      <div>
        {colonms.map((col) => (
          <></>
        ))}
        <button onClick={handleAddRow}>Add Row</button>
      </div>
    </React.Fragment>
  );
};

export default DataTable;
