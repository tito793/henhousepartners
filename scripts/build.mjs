import { cpSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
mkdirSync('dist', {recursive:true});
cpSync('public','dist',{recursive:true});
cpSync('src/index.html','dist/index.html');
execFileSync(process.execPath,['node_modules/tailwindcss/lib/cli.js','-c','tailwind.config.cjs','-i','src/styles.css','-o','dist/styles.css','--minify'],{stdio:'inherit'});
