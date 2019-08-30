const chai = require('chai');
const chaiFiles = require('chai-files');
const deepEqualInAnyOrder = require('deep-equal-in-any-order');
chai.use(chaiFiles);
const file = chaiFiles.file;
const { expect } = chai.use(deepEqualInAnyOrder);

const { getAnagrams } = require('../../../src/lib/anagram/anagrams');

describe('Anagrams test suite:- ',() => {
    it('should pass because found anagrams:', async () => {
        const anagrams = await getAnagrams(['ganesh','nagesh']);
        expect(anagrams).to.deep.equal({'20472386' : ['ganesh', 'nagesh']});
    });
    it('should fail because no anagrams found:', async () => {
        const anagrams = await getAnagrams(['ganesh', 'suresh']);
        expect(anagrams).to.deep.equal({ '20472386': ['ganesh'], '4177809053': ['suresh']});
    });
});
