import { Span } from "../orders/OrderDeteils";

interface IPropsItems {
  id: string;
  name: string;
  amount?: number;
}

const ItemsDetails = ({ id, name, amount }: IPropsItems) => {
  return (
    <div style={{display:"flex"}} key={id}>
      <div><Span style={{}}>שם פריט:</Span>{name}</div>
      <div><Span>כמות:</Span>{amount}</div>
    </div>
  );
};

export default ItemsDetails;
