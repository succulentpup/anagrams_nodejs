const chai = require('chai');
const chaiFiles = require('chai-files');
const deepEqualInAnyOrder = require('deep-equal-in-any-order');
chai.use(chaiFiles);
const file = chaiFiles.file;
const { expect } = chai.use(deepEqualInAnyOrder);

const { getWords } = require('../../../src/lib/fileReader/words');
const { getAnagrams } = require('../../../src/lib/anagram/anagrams');

describe('File Read test suite:- ',() => {
    it('should throw error because no file path found:', async () => {
        expect(file('wrong.file.path')).to.not.exist;
    });
    it('should fail because no contents in the file:', async () => {
        const words = await getWords('./tests/data/empty.txt');
        expect(words).to.be.empty;
    });
    it('should assert the output of getWords is an array with elements:', async () => {
        const words = await getWords('./tests/data/example1.txt');
        expect(words).to.not.be.empty;
    });
});
