import { Dispatch } from "react";
import { IPropsItems } from "../../formIndex/hookController";
import DataTable from "../tableRow";

interface IProps {
  setOptions: Dispatch<React.SetStateAction<IPropsItems[]>>;
  options: IPropsItems[];
}
export const colonms =[
  {id:"1",name:"פריט 1"},
  {id:"2",name:"פריט 2"},
  {id:"3",name:"פריט 3"},
  {id:"4",name:"פריט 4"},
  
]
export const ViewItems = ({ setOptions, options }: IProps) => {
  return <>
  <h1>View Items</h1>
   <DataTable   colonms={colonms} initialData={options} setInitialData={setOptions}/>
  </>;
};
