import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../providers/Authenticate';

const Checkout = () => {
  const { user } = useContext(AuthContext),
    { clientSecret, idOfTheClass } = useLoaderData(),
    stripe = useStripe(),
    elements = useElements(),
    [error, setError] = useState(null),
    [processing, setProcessing] = useState(false),
    [transactionId, setTransactionId] = useState('');

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
      setError(error.message);
    } else {
      console.log('[SUCCESS]', paymentMethod);
    }
    setProcessing(true);
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: user?.displayName || 'unknown',
            email: user?.email || 'unknown',
          },
        },
      });

    if (confirmError) {
      console.log('[ERROR]', confirmError);
    }

    setProcessing(true);

    if (paymentIntent?.status === 'succeeded') {
      setTransactionId(paymentIntent.id);
      fetch(`${import.meta.env.VITE_SERVER}/payments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          date: new Date(),
          email: user.email,
          name: user.displayName,
          price: parseInt(paymentIntent.amount) / 100,
          purchasedItemsId: [idOfTheClass],
          quantity: 1,
          transactionId: paymentIntent.id,
        }),
      });
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
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
        {error && <p className="mt-3 text-rose-500">{error}</p>}
        {transactionId && (
          <>
            <p className="mb-1 mt-3">✅ Success</p>
            <p>
              <span className="text-violet-500">Transaction Id: </span>
              {transactionId}
            </p>
          </>
        )}
      </form>
    </>
  );
};
export default Checkout;
