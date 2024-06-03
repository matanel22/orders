import React,{ Dispatch } from "react";
import DataTable from "../tableRow";

interface EventProper {
  id: string;
  name: string;
  comments: string;
}
export interface IPropsEventLoc {
  options: EventProper[];
  setOptions: Dispatch<React.SetStateAction<EventProper[]>>;
}

export const ViewLoction = ({ options, setOptions }: IPropsEventLoc) => {
  return(
    <>
    <h1>View Loction</h1>
    {/* <DataTable initialData={options} setInitialData={setOptions}/> */}
    </>
  ) ;
};
