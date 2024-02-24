
const stripe = require('stripe')(process.env.SK_TEST)

export const stripePay = async (amount: any): Promise<any> => {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount | 0,
      currency: 'usd',
      automatic_payment_methods: {
        enabled: true,
      },
    })
    return paymentIntent.client_secret
  }
