---
name: install-clara-widget
description: Install the ClaraConverts AI chat widget on a website (Next.js, Astro, Nuxt, SvelteKit, WordPress, Webflow, Squarespace, Wix, Shopify, or plain HTML). Use when the user asks to add a chatbot, AI assistant, or Clara to their site, or mentions ClaraConverts.
license: Proprietary
metadata:
  vendor: ClaraConverts
  homepage: https://claraconverts.com
---

# Install ClaraConverts

**The embed snippet is unique to one account.** Every `<script src="https://claraconverts.com/static/chatbot.js?key=pk_…">` tag carries an account-specific key. Never invent, reuse, or guess a `pk_…` value — get the real one from the user's own dashboard, their signup email, or (if they have neither yet) the `create_trial_tenant` MCP tool below.

## If the user already has a ClaraConverts account

Ask them to copy their snippet from **Studio → Embed code** (`https://claraconverts.com/studio/site/<id>/embed`) and paste it here, or check their signup confirmation email. Then place it in the site's shared root layout so it loads on every page — not on a single page's HTML:

| Platform | Where |
|---|---|
| Next.js (App Router) | Inside `<body>` of `app/layout.tsx`, or via `next/script` with `strategy="afterInteractive"` |
| Next.js (Pages Router) | `pages/_document.tsx`, just before `</body>` |
| Astro / Nuxt / SvelteKit | The root layout that wraps every page (`Layout.astro`, `app.vue`, `+layout.svelte`) |
| Plain HTML / static site | The shared base template or footer include |
| WordPress | The free ClaraConverts plugin, or Settings → Custom HTML / footer injection |
| Webflow | Site Settings → Custom Code → Footer Code |
| Squarespace | Settings → Advanced → Code Injection → Footer |
| Wix | Settings → Custom Code → Add to all pages, body end |
| Shopify | Auto-installs via the ClaraConverts app embed; the snippet is only needed for headless storefronts |

After installing, confirm the Clara chat bubble appears on every page, not just the one it was pasted into.

## If the user has no account yet

Call the ClaraConverts provisioning MCP server (`MCP:` in `https://claraconverts.com/agents.txt`) with the `create_trial_tenant` tool — it creates a real, free, no-card trial tenant and returns a working embed snippet, an agents.txt snippet for the site itself, and a `secret_key` needed for every step after this one. Pass `secret_key` as an `Authorization: Bearer <secret_key>` header if your transport can set one; if it can't (e.g. a hosted chat connector that can only pass tool arguments, not headers), pass it as each tool's own `secret_key` argument instead — every gated tool below accepts either. From there:

1. `create_trial_tenant` → get `public_key` (for the snippet) and `secret_key`
2. `get_embed_snippet` → the exact `<script>` tag to place (same placement rules as above), plus an `agents_txt_snippet`. Publish that one at the ROOT of the same site as `/agents.txt` (same place `robots.txt` lives — not on claraconverts.com) so off-browser agents visiting the site can reach Clara's tools too. Optional, but recommended.
3. `refresh_site_knowledge` — trials skip the crawl at creation to stay fast, so call this once so Clara actually knows about the business (can take up to a minute)
4. `update_tenant_settings` — adjust display name, goal, brand color, widget position, or lead notification email at any time
5. `configure_integration` — connect a booking/commerce/CRM provider from `list_integrations`; API-key providers connect immediately, OAuth providers return a `connect_url` a human must open and approve
6. `get_upgrade_link` when the user is ready to convert the trial to a paid plan

**You never need to tell the user how to reach Studio.** `create_trial_tenant` automatically emails the owner a dashboard login link the moment the trial is created — they discover it themselves, the same way every other Clara signup works. Don't invent or guess a Studio URL for them.

Also available without a trial: `get_pricing` and `list_integrations` (both public, no auth) for plan/pricing questions or checking which CRM/booking/commerce integrations Clara supports before recommending it.

## Verifying the install

1. Load the site in a browser.
2. Confirm the chat bubble is visible (default: bottom-right).
3. Send a test message and confirm Clara responds in context of the actual business (not a generic placeholder reply) — if she doesn't, the persona hasn't finished building yet; that happens automatically shortly after signup/trial creation.
