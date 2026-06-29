import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const input = path.join(root, 'tokens.json');
const outputDir = path.join(root, 'dist');

function resolveRef(value: unknown, obj: any): unknown {
  if (typeof value !== 'string') return value;
  const match = value.match(/^{(.+)}$/);
  if (!match) return value;
  return match[1].split('.').reduce((acc: any, key: string) => acc?.[key], obj);
}

function flatten(obj: any, prefix: string[] = [], out: Record<string, any> = {}) {
  for (const [key, value] of Object.entries(obj)) {
    const next = [...prefix, key];
    if (value && typeof value === 'object' && 'value' in value) {
      out[next.join('.')] = (value as any).value;
    } else if (value && typeof value === 'object') {
      flatten(value, next, out);
    }
  }
  return out;
}

const tokens = JSON.parse(fs.readFileSync(input, 'utf8'));
const flat = flatten(tokens);
const resolved: Record<string, unknown> = {};

for (const [k, v] of Object.entries(flat)) {
  resolved[k] = resolveRef(v, tokens);
}

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(
  path.join(outputDir, 'tokens.resolved.json'),
  JSON.stringify(resolved, null, 2),
  'utf8'
);

console.log('Tokens built successfully.');
