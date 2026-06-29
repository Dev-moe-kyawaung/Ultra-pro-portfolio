import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.cwd());
const input = path.join(root, 'tokens', 'tokens.json');
const outDir = path.join(root, 'generated');
const tokens = JSON.parse(fs.readFileSync(input, 'utf8'));

const resolve = (value: unknown, obj: any): any => {
  if (typeof value !== 'string') return value;
  const m = value.match(/^{(.+)}$/);
  if (!m) return value;
  return m[1].split('.').reduce((acc: any, key: string) => acc?.[key], obj);
};

const flatten = (obj: any, prefix: string[] = [], out: Record<string, any> = {}) => {
  for (const [k, v] of Object.entries(obj)) {
    const key = [...prefix, k].join('.');
    if (v && typeof v === 'object' && 'value' in (v as any)) out[key] = (v as any).value;
    else if (v && typeof v === 'object') flatten(v, [...prefix, k], out);
  }
  return out;
};

const flat = flatten(tokens);
const resolved: Record<string, any> = {};
for (const [k, v] of Object.entries(flat)) resolved[k] = resolve(v, tokens);

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'tokens.resolved.json'), JSON.stringify(resolved, null, 2));

fs.mkdirSync(path.join(outDir, 'web'), { recursive: true });
const css = `:root {
${Object.entries(resolved)
  .filter(([, v]) => typeof v === 'string' && v.startsWith('#'))
  .map(([k, v]) => `  --${k.replace(/\./g, '-')}: ${v};`)
  .join('
')}
}
[data-theme="dark"] {
  --color-bg-canvas: #020617;
  --color-bg-surface: #0f172a;
  --color-bg-surfaceRaised: #111827;
  --color-text-primary: #f8fafc;
  --color-text-secondary: #cbd5e1;
  --color-text-inverse: #020617;
}`;
fs.writeFileSync(path.join(outDir, 'web', 'tokens.css'), css);

fs.mkdirSync(path.join(outDir, 'compose'), { recursive: true });
const compose = `// Generated file
object UltraProTokens {
  const val Primary = "${resolved['color.brand.primary']}"
  const val Secondary = "${resolved['color.brand.secondary']}"
  const val Accent = "${resolved['color.brand.accent']}"
}`;
fs.writeFileSync(path.join(outDir, 'compose', 'UltraProTokens.kt'), compose);

fs.mkdirSync(path.join(outDir, 'flutter'), { recursive: true });
const flutter = `// Generated file
class UltraProTokens {
  static const primary = Color(0xFF${String(resolved['color.brand.primary']).replace('#', '').toUpperCase()});
}`;
fs.writeFileSync(path.join(outDir, 'flutter', 'ultra_pro_tokens.dart'), flutter);

console.log('Generated token artifacts successfully.');
