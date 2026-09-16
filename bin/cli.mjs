#!/usr/bin/env node
import { spawn } from 'node:child_process';

const args = process.argv.slice(2);
console.log('⚡ Menjalankan instalasi skill via skills CLI...\n');

const isWin = process.platform === 'win32';
const proc = spawn(isWin ? 'npx.cmd' : 'npx', ['skills', 'add', 'narr07/skills', ...args], {
	stdio: 'inherit',
	shell: isWin
});

proc.on('exit', (code) => {
	process.exit(code ?? 0);
});
