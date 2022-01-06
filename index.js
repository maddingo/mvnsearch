#!/usr/bin/env node

const program = require("commander");
const maven = require("./maven");

program
  .version("1.0.0")
  .description("Maven Repository Search")
  .argument("<query>")
  .action((query) => {
    maven.search(query);
  });

program.parse(process.argv, (element) => { console.log(`  ${element.id}:${element.latestVersion}`);});