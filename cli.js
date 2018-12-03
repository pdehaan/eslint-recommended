#!/usr/bin/env node

const { eslintVersion, rules } = require("./lib");

console.log(`Checking eslint@${eslintVersion}...`);
console.log(rules);
