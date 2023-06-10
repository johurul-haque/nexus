import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';

const Checkout = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      console.log('[ERROR]', error);
      setError(error.message);
    } else {
      console.log('[SUCCESS]', paymentMethod);
    }
  };
  return (
    <>
      <form className="mx-auto my-16 max-w-xs" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button
          className="mt-3 h-9 w-full bg-violet-600 text-white"
          disabled={!stripe}
        >
          Pay
        </button>
        {error && <p className="mt-3 text-rose-500">{error}</p>}
      </form>
    </>
  );
};
export default Checkout;
