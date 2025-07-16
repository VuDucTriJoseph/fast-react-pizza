import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreseItemQuantity, increseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaID, quantity }) {
  const dispatch = useDispatch();

  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button
        type="round"
        onClick={() => dispatch(decreseItemQuantity(pizzaID))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{quantity}</span>
      <Button
        type="round"
        onClick={() => dispatch(increseItemQuantity(pizzaID))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
