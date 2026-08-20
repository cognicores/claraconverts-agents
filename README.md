# claraconverts-agents

Agent tooling for ClaraConverts — 24/7 AI that turns website visitors into customers. agents.txt, an install Skill, and MCP servers for tool access.

This repo mostly points at claraconverts.com rather than duplicating it — the one exception is [`install-clara-widget/SKILL.md`](./install-clara-widget/SKILL.md), mirrored here because some Skill marketplaces crawl the repo directly rather than following a link. [claraconverts.com/skills/install/SKILL.md](https://claraconverts.com/skills/install/SKILL.md) is the canonical source; if the two ever disagree, that one wins.

## For AI agents

- **Capability discovery:** [`agents.txt`](https://claraconverts.com/agents.txt) / [`agents.json`](https://claraconverts.com/agents.json) — the [agents-txt.com](https://agents-txt.com) standard.
- **Install Skill:** [`install-clara-widget/SKILL.md`](./install-clara-widget/SKILL.md) (mirrored in this repo) — install the ClaraConverts widget on a website (Next.js, Astro, Nuxt, SvelteKit, WordPress, Webflow, Squarespace, Wix, Shopify, or plain HTML), or provision a free trial via the MCP server below if there's no account yet.
- **Provisioning MCP server:** `https://claraconverts.com/mcp` (Streamable HTTP) — get pricing, list integrations, create a free 14-day no-card trial, manage it (settings, knowledge refresh, integrations), and upgrade — all via tool calls, no dashboard required.
- **Per-tenant MCP bridge:** `https://claraconverts.com/mcp/t/<public_key>` — lets an off-browser agent reach a specific site's Clara tools (lead capture, booking, commerce, etc.), the server-side counterpart to the in-browser [WebMCP](https://claraconverts.com/guide/agent-ready-website) surface.

## For humans

[claraconverts.com](https://claraconverts.com) — pricing, install guide, and the Studio dashboard.
