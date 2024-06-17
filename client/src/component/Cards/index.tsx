import React, { Dispatch, useEffect, useState } from "react";
import { CardContainer } from "../style/tableOrders.style";
import { FormInputs, FormOptions } from "../formIndex/hookController";
import DeteilsCard from "./DetailsCard";

export interface ArrayComponentProps<T> {
  items?: T[];
  options: FormInputs[];
  state?: Dispatch<React.SetStateAction<T[]>>;
  image?: File;
}

const Card = <T extends Record<string, any>>({
  options,
  image,
}: ArrayComponentProps<T>) => {
  const [show, setShow] = useState(false);
  return (
    <div style={{display:"flex"}}>
      {options.map((opt, index) => (
        <DeteilsCard
          id={opt.id}
          name={opt.name}
          eventType={opt.eventType}
          locationType={opt.locationType}
          statusId={opt.statusId}
          items={opt.items}
        />
      ))}
    </div>
  );
};

export default Card;
