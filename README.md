Here’s a clean, production-grade README aligned to your workflow and system.

⸻

# LLM Design Context System
Persistent context engineering system for product designers using:
- Codex
- Claude Code
- Antigravity
- Figma → Code workflows
Goal: eliminate prompt chaos. Ensure every LLM run uses **correct, structured, reusable context**.
---
## Core Idea
LLMs fail due to:
- Missing context
- Noisy context
- Inconsistent context across tools
This repo fixes that with:
> Structured context + injection CLI + tool-specific prompts
---
## Folder Structure

/context        → System, product, roles, constraints
/tasks          → Active work + lessons
/flows          → Journeys, edge cases, states
/ui             → Components, patterns, tokens
/skills         → Reusable UX + system patterns
/prompts        → Tool-specific prompts
/memory         → Decisions, bugs, assumptions
/scripts        → Context injection CLI
/outputs        → Generated context bundles

---
## How It Works
You don’t write prompts manually.
You:
1. Define task
2. Run context injector
3. Paste into LLM
4. Execute
5. Verify
6. Log lessons
---
## Setup
```bash
npm install

No dependencies required.

⸻

Usage

1. Define task

Edit:

tasks/active/current.md

⸻

2. Generate context bundle

npm run ctx:codex
npm run ctx:claude
npm run ctx:antigravity
npm run ctx:figma

⸻

3. Output

/outputs/<tool>-context.md

Paste this into your LLM.

⸻

Tool Strategy

Codex

Use for:

* UI implementation
* Refactors
* Code generation

npm run ctx:codex

⸻

Claude Code

Use for:

* Planning
* PRDs
* Edge cases
* System design

npm run ctx:claude

⸻

Antigravity

Use for:

* UI generation
* Screenshot → UI
* 1:1 mapping

npm run ctx:antigravity

⸻

Figma Extractor

Use before implementation.

npm run ctx:figma

Returns structured JSON:

* layout
* typography
* components
* tokens

⸻

Skills System

Reusable context blocks:

Examples:

* figma-1to1
* radius-ux-review
* accessibility-aa

Invoke inside tasks:

Use skill: figma-1to1

⸻

Memory System

LLMs forget. This repo doesn’t.

Log everything:

tasks/lessons.md     → repeated mistakes
memory/bugs.md       → implementation bugs
memory/decisions.md  → product decisions

This improves future outputs automatically.

⸻

Workflow

1. Plan

Claude

2. Execute

Codex / Antigravity

3. Verify

Claude / Manual

4. Fix

Update lessons

⸻

Context Injection

Script:

scripts/context-injector.mjs

Injects:

* system rules
* product context
* design system
* task
* states
* edge cases
* tool prompt

⸻

Principles

* No random prompting
* No UI invention
* No missing states
* No broken flows
* Always role-aware
* Always WCAG-AA

⸻

Common Mistakes

Avoid:

* dumping entire repo into LLM
* missing edge cases
* mixing tool behaviors
* not logging lessons
* hardcoding styles

⸻

Extend This System

You can add:

* GitHub Actions (validation)
* CLI: run-task
* Auto Codex execution
* Figma token extractor
* MCP integrations

⸻

Outcome

You move from:

Prompting LLMs

To:

Running a deterministic design system powered by LLMs

⸻

License

MIT

---
If you want next:
- GitHub Actions (auto validation)
- `run-task` command (single entrypoint)
- Codex API auto-execution pipeline
- Figma token auto-extractor (real MCP flow)
Say which.
