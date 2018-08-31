#!/usr/bin/env node

const [,, ...args] = process.argv;
const exec = require('child_process').exec

exec('lsof -Pn -i4 | grep LISTEN', (error, stdout, stderr) => {
  console.log(stdout);
  if (error !== null) {
    console.log('exec error: ' + error);
  }
})
