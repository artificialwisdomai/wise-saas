# Notes for deployment

Tier versions need to be updated in src/config/tierConstants.ts
find them in your specific plan (e.g. this clone from the
main example):

https://model.tier.run/clklgjvhn3e6no972sq69xevq

Once the model makes sense, use the "push to Stripe" process on the model.tier.run page to enable the model, and update the tierConstants doc to support.

If you don't update the doc and push to Stripe, (at least initially) your app will not deploy properly.
