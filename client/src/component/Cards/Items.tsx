interface IPropsItems {
  id: string;
  name: string;
  amount: number;
}

const ItemsDetails = ({ id, name, amount }: IPropsItems) => {
  return (
    <ul>
      <li>{name}</li>
      <li>{amount}</li>
    </ul>
  );
};

export default ItemsDetails;
