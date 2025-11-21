// payments.js - snippet para integrar Stripe en el frontend
// Incluye en index.html: <script src="https://js.stripe.com/v3/"></script>
async function payWithStripe(amountCents) {
  const res = await fetch('/create-payment-intent', {
    method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({amount: amountCents})
  });
  const { clientSecret } = await res.json();
  const stripe = Stripe('pk_test_...'); // reemplazar por tu publishable key
  const {error, paymentIntent} = await stripe.confirmCardPayment(clientSecret, {
    payment_method: {card: elements.getElement('card')}
  });
  if (error) throw error;
  return paymentIntent;
}