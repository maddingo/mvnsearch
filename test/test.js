const maven = require('../maven')
var assert = require('assert');

describe('Mvn search', function() {
  describe('wildcard', function() {
    it('should return 5 packages', function() {
        var artifacts = [];
        return maven.search('junit', (element) => { 
            artifacts.push(element.id);
            // console.log(`Added ${element.id}`)
        })
        .then(() => {
            // console.log('Done!!!!!')
            assert.equal(artifacts.length, 5);
        })
      //assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});