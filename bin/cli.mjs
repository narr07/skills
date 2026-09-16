#!/usr/bin/env node
import { spawn } from 'node:child_process';

const args = process.argv.slice(2);
console.log('⚡ Menjalankan instalasi skill via skills CLI...\n');

const command = process.platform === 'win32' ? 'npx.cmd' : 'npx';
const cliArgs = ['skills', 'add', 'narr07/skills', ...args];

const proc = spawn(command, cliArgs, {
	stdio: 'inherit'
});

proc.on('exit', (code) => {
	process.exit(code ?? 0);
});
