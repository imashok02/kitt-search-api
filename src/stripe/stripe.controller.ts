import { Body, Controller, Post } from '@nestjs/common';
import Stripe from 'stripe';

@Controller('')
export class StripeController {
  stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  @Post('create-checkout-session')
  async createCheckoutSession(@Body() qparams) {
    const { amount, currency } = qparams; // Amount in cents

    console.log('incoming qparams', amount, currency);

    // Determine the multiplier based on the currency
    let multiplier = 100; // Default multiplier for most currencies (e.g., USD, EUR)

    // Special cases where the currency doesn't use a fractional unit
    const noFractionCurrencies = ['JPY', 'KRW', 'VND']; // Add other such currencies as needed

    if (noFractionCurrencies.includes(currency)) {
      multiplier = 1;
    }

    // Convert the amount to the smallest currency unit
    const unitAmount = Math.round(amount * multiplier);

    try {
      const session = await this.stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: currency,
              product_data: {
                name: 'Flight Booking',
              },
              unit_amount: unitAmount, // Dynamic amount in cents
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
      });

      return { id: session.id };
    } catch (error) {
      //   res.status(500).send({ error: error.message });

      console.log('error ==> ', error);

      throw new Error('Something went wrong');
    }
  }

  @Post('test')
  async test() {
    // console.log("STRIPE FROM EBV ++?", process.env.STRIPE_SECRET_KEY)
    return process.env.STRIPE_SECRET_KEY;
  }
}
