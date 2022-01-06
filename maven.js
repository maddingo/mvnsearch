#!/usr/bin/env node

const fetch = require("node-fetch");

function search(query, printer) {
  return fetch(`http://search.maven.org/solrsearch/select?rows=5&wt=json&q=${query}`)
    .then(res => res.json())
    .then(json => json.response.docs)
    .then(docs => {
      if (docs.length == 0) {
        console.log(`No result for ${query}`);
      } else {
        console.log(`Found ${docs.length} results`);
        docs.forEach(element => {
            printer(element);
        });
      }
    })
    .catch(e => console.error(e));
};

exports.search = search;
