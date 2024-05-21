import { FormInputs } from "../formIndex/hookController";
import { CardContainer } from "../style/tableOrders.style";
import ItemsDetails from "./Items";

const DeteilsCard = ({
  id,
  name,
  eventType,
  locationType,
  items,
  statusId,
}: FormInputs) => {
  return (
    <CardContainer>
      <ul>
        <li>{name}</li>
        <li>{eventType}</li>
        <li>{locationType}</li>
        <li>{statusId.name}</li>
      </ul>
      {items.map((item) => {
        return (
          <ItemsDetails id={item.id} name={item.name} amount={item.amount} />
        );
      })}
    </CardContainer>
  );
};
export default DeteilsCard;
