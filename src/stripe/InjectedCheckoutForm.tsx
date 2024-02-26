import { ElementsConsumer } from "@stripe/react-stripe-js";
import Checkoutform from "./checkoutform";


const InjectedCheckoutForm = ({elements, stripe}:any) => {
    return (
        <ElementsConsumer>
        {({elements, stripe}) => (
          <Checkoutform elements={elements} stripe={stripe} />
        )}
      </ElementsConsumer>
    );
};

export default InjectedCheckoutForm;