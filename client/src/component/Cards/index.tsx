import React, { useEffect, useState } from "react";
import { CardContainer } from "../style/tableOrders.style";

interface ArrayComponentProps<T> {
  items: T[];
  image?: File;
}

const Card = <T extends Record<string, any>>({
  items,
  image,
}: ArrayComponentProps<T>) => {
  const [show, setShow] = useState(false);
  return (
    <div style={{ width: "100vw", maxWidth: "400px" }}>
      {items.map((item, index) => (
        <CardContainer key={item.id}>
          {Object.values(item).join(" ")}
        </CardContainer>
      ))}
    </div>
  );
};

export default Card;
