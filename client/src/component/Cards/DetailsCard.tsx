import { FormInputs } from "../formIndex/hookController";
import { CardContainer } from "../style/tableOrders.style";
import ItemsDetails from "./Items";
import deleteOrder from "../../svg/deleteOrder.svg";
import view from "../../svg/view.svg";
import { Span } from "../orders/OrderDeteils";
const DeteilsCard = ({
  id,
  name,
  eventType,
  locationType,
  items,
  statusId,
  orderDate,
  orderTime,
}: FormInputs) => {
  return (
    <CardContainer key={id}>
      <h1 style={{ textAlign: "center" }}>{name}</h1>
      <div style={{ display: "flex", flexFlow: "wrap" }}>
        <div>
          <Span>סוג אירוע:</Span>
          {`${eventType}`}
        </div>
        <div>
          <Span>מקום אירוע:</Span>
          {locationType}
        </div>
        {/* <div><Span>סטטוס:</Span>{statusId.name}</div> */}
        <div>
          <Span> תאריך הספקה:</Span>
          {orderDate?.toLocaleDateString()}
        </div>
        <div>
          <Span> זמן הספקה:</Span>
          {orderTime}
        </div>
        {/* <div><span>סוג אירוע</span>{statusId.name}</div> */}
        <div>
          {items.map((item) => {
            return (
              <div key={item.id}>
                <ItemsDetails
                  id={item.id}
                  name={item.name}
                  amount={item.amount}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div
        style={{ display: "flex", justifyContent: "end", paddingLeft: "1rem" }}
      >
        <img src={view} alt="Description of the image" />
        <img src={deleteOrder} alt="Description of the image" />
      </div>
    </CardContainer>
  );
};
export default DeteilsCard;
