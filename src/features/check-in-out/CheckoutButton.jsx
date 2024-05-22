import Button from "../../ui/Button";
import useCheckOut from "./useCheckOut";

function CheckoutButton({ bookingId }) {
   const  {mutate , isLoading} = useCheckOut()

  return (
    <Button variation="primary" disabled={isLoading} onClick={mutate(bookingId)} size="small">
      Check out
    </Button>
  );
}

export default CheckoutButton;
