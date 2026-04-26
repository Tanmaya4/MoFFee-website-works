## Goal
Add real payments to the Moffee site by enabling Shopify (new development store) and connecting the existing Cart + "Buy Now" flow to a real Shopify checkout for ₹40 per pouch.

## Why Shopify (not Stripe/Paddle)
Moffee is a **physical product** (100ml pouch, shipped to the customer). Shopify is the only built-in option that handles:
- Inventory / stock counts for pouches
- Shipping addresses, rates, and fulfillment
- Order management for physical goods
- Tax handling for physical products in India

Stripe/Paddle's built-in payments are restricted to digital products and SaaS.

## Step 1 — Enable Shopify (new development store)
- Call the Shopify enable flow with `store_type: "new"`.
- Lovable creates a free development store — no Shopify subscription needed while we build.
- After creation, you'll be offered the option to **claim the store** (starts a 30-day free trial; a paid Shopify plan is required only when you're ready to actually sell to real customers).
- You can keep developing as long as you want before claiming.

## Step 2 — Create the Moffee product in Shopify
Once Shopify is enabled, I'll create the product with:
- **Name:** Moffee
- **Price:** ₹40
- **Description:** Pulled from the existing product page (mulethi + clove cold coffee, 100ml pouch, 1-week shelf life)
- **Image:** The existing Moffee thumbnail
- **Inventory:** Tracked (you can set the stock count)

## Step 3 — Wire the Cart page to real checkout
Update `src/pages/Cart.tsx` so that **Place Order**:
1. Validates first name, last name, and contact number (using zod, with proper length/format limits).
2. Sends the quantity + customer info to Shopify.
3. Redirects the customer to **Shopify's secure hosted checkout**, where they'll enter their shipping address and pay.
4. On success, Shopify redirects them back to the site.

The cart's video background, quantity +/- controls, golden active state, and skeleton loader all stay exactly as they are.

## Step 4 — Wire the "Buy Now" buttons
Both Buy Now buttons on `/product/moffee` already navigate to `/cart` — that flow stays the same. The change is only that the Place Order button at the end now goes to a real paid checkout instead of being a static button.

## Step 5 — Test mode
Shopify development stores include a **Bogus Gateway** so you can place fake test orders end-to-end (using test card `1` as the card number) without real money moving. Once you claim the store and add a real payment method, live ₹40 payments work automatically.

## What stays the same
- All existing pages, skeleton loaders, video backgrounds, fonts, copy, and the golden color scheme
- Cart layout (full-width video, quantity controls, customer info form)
- Navigation flow from product page → cart

## What you'll need to do after I'm done
- Click **Claim Store** when you're ready to go live (starts the 30-day Shopify trial).
- Add your real payment method in Shopify admin to accept live ₹40 payments.
- Optionally adjust shipping rates inside Shopify admin.

Approve this plan and I'll enable Shopify and wire it all up.