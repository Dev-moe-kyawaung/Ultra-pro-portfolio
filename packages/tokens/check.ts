import fs from 'node:fs';
import path from 'node:path';

const file = path.join(process.cwd(), 'dist', 'tokens.resolved.json');

if (!fs.existsSync(file)) {
  console.error('Missing dist/tokens.resolved.json. Run pnpm build first.');
  process.exit(1);
}

const data = JSON.parse(fs.readFileSync(file, 'utf8'));

if (!data['color.brand.primary']) {
  console.error('Missing expected token: color.brand.primary');
  process.exit(1);
}

console.log('Token check passed.');
