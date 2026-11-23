// DeepSeek Harness plugin: registers skills/install-clara-widget/SKILL.md on ctx.skills.
// Plain JavaScript without dependencies, so a git install needs no build step.
import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'

const SKILL_URL = new URL('../skills/install-clara-widget/SKILL.md', import.meta.url)
const SKILL_DIR = fileURLToPath(new URL('./', SKILL_URL))
const BUNDLED_SKILL_RANK = 600

async function readSkill() {
  const text = (await readFile(SKILL_URL, 'utf8')).replaceAll('\r\n', '\n')
  const match = /^---\n([\s\S]*?)\n---\n([\s\S]*)$/.exec(text)
  if (!match) throw new Error('claraconverts: SKILL.md has no frontmatter')
  const [, frontmatter, body] = match
  // Reads the single-line top-level fields this SKILL.md uses: plain or double-quoted.
  const field = (key) => {
    const value = new RegExp(`^${key}: (.+)$`, 'm').exec(frontmatter)?.[1].trim()
    return value?.startsWith('"') ? JSON.parse(value) : value
  }
  return {
    summary: {
      name: field('name'),
      description: field('description'),
      whenToUse: field('when_to_use'),
      invocation: { modelInvocable: true, userInvocable: true },
      provider: 'claraconverts',
      source: 'bundled',
      resourceBase: { kind: 'directory', path: SKILL_DIR },
    },
    content: body.trim(),
  }
}

const provider = {
  name: 'claraconverts',
  async list() {
    const { summary } = await readSkill()
    return [{ ...summary, rank: BUNDLED_SKILL_RANK, locator: SKILL_URL }]
  },
  async get() {
    const { summary, content } = await readSkill()
    return { ...summary, content }
  },
}

export const name = 'claraconverts'
export const inject = ['skills']

export function apply(ctx) {
  ctx.skills.registerProvider(() => provider)
}
