# claraconverts-agents

Agent tooling for ClaraConverts — 24/7 AI that turns website visitors into customers. agents.txt, an install Skill, and MCP servers for tool access.

This repo mostly points at claraconverts.com rather than duplicating it — the two exceptions are `install-clara-widget/SKILL.md` and `skills/install-clara-widget/SKILL.md` (identical content, two locations — some Skill marketplaces crawl a bare `<name>/SKILL.md` folder, Claude Code plugins expect it under `skills/`). [claraconverts.com/skills/install/SKILL.md](https://claraconverts.com/skills/install/SKILL.md) is the canonical source; if any of these disagree, that one wins.

This repo is also a self-hosted [Claude Code plugin marketplace](https://code.claude.com/docs/en/plugin-marketplaces) — installing the plugin registers both the Skill and the provisioning MCP server in one step:
```
/plugin marketplace add cognicores/claraconverts-agents
/plugin install claraconverts@claraconverts-agents
```

## For AI agents

- **Capability discovery:** [`agents.txt`](https://claraconverts.com/agents.txt) / [`agents.json`](https://claraconverts.com/agents.json) — the [agents-txt.com](https://agents-txt.com) standard.
- **Install Skill:** [`install-clara-widget/SKILL.md`](./install-clara-widget/SKILL.md) (mirrored in this repo) — install the ClaraConverts widget on a website (Next.js, Astro, Nuxt, SvelteKit, WordPress, Webflow, Squarespace, Wix, Shopify, or plain HTML), or provision a free trial via the MCP server below if there's no account yet.
- **Provisioning MCP server:** `https://claraconverts.com/mcp` (Streamable HTTP). **No API key or credential is needed to connect, or to call `get_pricing`, `list_integrations`, or `create_trial_tenant`** — leave any "API key" field on your MCP client blank; those three tools accept no auth at all. Get pricing, list integrations, create a free 14-day no-card trial, manage it (settings, knowledge refresh, integrations), and upgrade — all via tool calls, no dashboard required. Also listed on the [official MCP Registry](https://registry.modelcontextprotocol.io/?q=com.claraconverts) (`com.claraconverts/clara`), [Smithery](https://smithery.ai/servers/claraconverts/clara), and [mcpservers.org](https://mcpservers.org/servers/cognicores/claraconverts-agents).

[![smithery badge](https://smithery.ai/badge/claraconverts/clara)](https://smithery.ai/servers/claraconverts/clara)
[![Listed on mcpservers.org](https://mcpservers.org/badge.svg)](https://mcpservers.org/servers/cognicores/claraconverts-agents)
- **Per-tenant MCP bridge:** `https://claraconverts.com/mcp/t/<public_key>` — lets an off-browser agent reach a specific site's Clara tools (lead capture, booking, commerce, etc.), the server-side counterpart to the in-browser [WebMCP](https://claraconverts.com/guide/agent-ready-website) surface.

## For humans

[claraconverts.com](https://claraconverts.com) — pricing, install guide, and the Studio dashboard.
