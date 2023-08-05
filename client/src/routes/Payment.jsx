import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Checkout from './Checkout';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
const Payment = () => {
  return (
    <main className="container-padding">
      <Elements stripe={stripePromise}>
        <Checkout />
      </Elements>
    </main>
  );
};
export default Payment;
