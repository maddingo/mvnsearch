const maven = require('../maven')
var assert = require('assert');

describe('Mvn search', function() {
  describe('wildcard', function() {
    it('should return 5 packages', function() {
        var artifacts = [];
        return maven.search('junit', (element) => { 
            artifacts.push(element.id);
        })
        .then(() => {
          console.log(`Artifacts: ${artifacts}`)
          assert.equal(artifacts.length, 5);
        })
    });
  });

  describe('gav', function() {
    it('should return 1 package', function() {
      var artifacts = [];
      return maven.search('g:org.junit.jupiter AND a:junit-jupiter-api AND v:5.8.2', (element) => {
        console.log(`${element}`);
        artifacts.push(element.id);
      })
      .then(() => {
        console.log(`Artifacts: ${artifacts}`)
        assert.equal(artifacts.length, 1);
      })
    });
  });
});