# Chiang Mai bakery website (TMD Studio)

Static site, no build step. Thai by default, English via the ไทย / EN switch (or `?lang=en`).

## Edit the shop details
- **Products, prices, WhatsApp number:** `products.js`
  - `SHOP.whatsapp` = the shop's number with country code, digits only (e.g. `66812345678`).
  - Each category has 10 sample flavours (replace with the real ones) and `types` (size/pack) with `price: null`.
    Set a number and the cart shows line totals and a grand total; leave `null` and the cart says the shop will confirm the price.
- **Brand colours:** `:root` at the top of `style.css`.
- **Text (Thai + English):** `I18N` in `app.js`. Every `[bracket]` is a placeholder for the shop's real info.
- **Bake animation recipes:** `RECIPES` in `app.js`.

## How ordering works
Menu → choose type (and a cake message for birthday cakes) → Add to cart → cart drawer → name, date, pickup/delivery →
"Send order on WhatsApp" opens `wa.me/<number>?text=<order>` with the full order written out. Cart is kept in the browser (localStorage).

## Files
`index.html`, `style.css`, `app.js` (language, hero), `products.js` (menu data), `cart.js` (cart + WhatsApp), `journey.js` (order journey map), `fonts/`.

## Deploy
Vercel: import the GitHub repo, Framework preset **Other**, no build command, output directory = root.
