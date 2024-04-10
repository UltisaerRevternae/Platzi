import { build } from 'esbuild';

try {
  await build({
    entryPoints: ['./src/index.tsx'],
    bundle: true,
    minify: true,
    sourcemap: true,
    outfile: './public/bundle.js'
  });
} catch { process.exit(1); }