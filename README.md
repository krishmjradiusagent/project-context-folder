# LLM Design Context System

Portable context engineering repo for Codex, Claude Code, Antigravity, and Figma-to-code workflows.

## Install

```bash
npm install
```

No dependencies required.

## Generate context bundles

```bash
npm run ctx:codex
npm run ctx:claude
npm run ctx:antigravity
npm run ctx:figma
```

Outputs appear in:

```bash
outputs/
```

Copy generated context file into the target LLM/tool.

## Daily workflow

1. Update `tasks/active/current.md`
2. Add screenshots/Figma refs
3. Run context injector
4. Paste output into tool
5. Execute
6. Verify
7. Log lessons

## Recommended usage

### Codex
Use for implementation.

```bash
npm run ctx:codex
```

### Claude Code
Use for planning, refactors, and verification.

```bash
npm run ctx:claude
```

### Antigravity
Use for UI generation and 1:1 mapping.

```bash
npm run ctx:antigravity
```

### Figma extraction
Use before code generation.

```bash
npm run ctx:figma
```
