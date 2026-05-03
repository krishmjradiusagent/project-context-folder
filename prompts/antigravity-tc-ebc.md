# Antigravity TC-EBC Prompt System

<TASK>
Implement the referenced UI with 1:1 visual fidelity.
Use screenshot, Figma MCP context, local SVG/PNG assets, and project design-system context.
</TASK>

<CONTEXT>
Read:
- context/system.md
- context/design-system.md
- ui/components.md
- ui/patterns.md
- tasks/active/current.md
- skills/figma-1to1.md
- skills/accessibility-aa.md
</CONTEXT>

<EVIDENCE>
Use available Figma node metadata.
Use screenshot as visual truth.
Use SVG/PNG assets from assets folder.
Do not reinterpret visual style.
</EVIDENCE>

<BUILD>
- Preserve existing layout shell.
- Add new UI as isolated template/module.
- Do not change global styles.
- Use local component-scoped styling only when needed.
- Keep reusable transaction-list template compatibility.
</BUILD>

<CHECK>
Compare implementation against screenshot:
- frame size
- spacing
- type scale
- visual hierarchy
- icon size
- border radius
- shadows
- table/card density
- empty/loading/error states
</CHECK>

<OUTPUT>
Return:
- files changed
- fidelity issues fixed
- remaining mismatches, if any
</OUTPUT>
