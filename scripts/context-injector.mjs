#!/usr/bin/env node
import fs from "fs";
import path from "path";

const root = process.cwd();

const files = [
  "context/system.md",
  "context/product.md",
  "context/roles.md",
  "context/design-system.md",
  "context/constraints.md",
  "context/glossary.md",
  "ui/components.md",
  "ui/patterns.md",
  "flows/states.md",
  "flows/edge-cases.md",
  "tasks/active/current.md",
  "tasks/lessons.md"
];

const tool = process.argv[2] || "base";
const extra = process.argv.slice(3);

const promptMap = {
  base: "prompts/base.xml",
  codex: "prompts/codex.md",
  claude: "prompts/claude-code.md",
  antigravity: "prompts/antigravity-tc-ebc.md",
  figma: "prompts/figma-extractor.md"
};

function read(file) {
  const p = path.join(root, file);
  if (!fs.existsSync(p)) return `\n<!-- Missing: ${file} -->\n`;
  return fs.readFileSync(p, "utf8");
}

let output = "";

output += `# Injected Context Bundle\n\n`;
output += `Tool: ${tool}\n`;
output += `Generated: ${new Date().toISOString()}\n\n`;

for (const file of files) {
  output += `\n\n---\nFILE: ${file}\n---\n`;
  output += read(file);
}

const promptFile = promptMap[tool] || promptMap.base;
output += `\n\n---\nTOOL PROMPT: ${promptFile}\n---\n`;
output += read(promptFile);

for (const file of extra) {
  output += `\n\n---\nEXTRA FILE: ${file}\n---\n`;
  output += read(file);
}

const outDir = path.join(root, "outputs");
fs.mkdirSync(outDir, { recursive: true });

const outFile = path.join(outDir, `${tool}-context.md`);
fs.writeFileSync(outFile, output);

console.log(`Wrote ${outFile}`);
console.log(`Copy this file into ${tool}.`);
