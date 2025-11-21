// server.js - ejemplo mínimo Node/Express para crear PaymentIntent (Stripe)
const express = require('express');
const app = express();
app.use(express.json());
// ENV: set STRIPE_SECRET in server environment
const stripe = require('stripe')(process.env.STRIPE_SECRET || 'sk_test_...');
app.post('/create-payment-intent', async (req, res) => {
  const { amount, currency='usd' } = req.body;
  try{
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency,
      automatic_payment_methods: {enabled: true},
    });
    res.json({clientSecret: paymentIntent.client_secret});
  }catch(e){
    res.status(500).json({error: e.message});
  }
});
app.listen(4242, ()=> console.log('Payments server running on :4242'));