const { getWords: GetWords } = require('./lib/fileReader/words');
const { getAnagrams: GetAnagrams } = require('./lib/anagram/anagrams');
const input = process.env.FILEPATH || './tests/data/anagrams.txt';

(async function printAnagrams() {
    const words = await GetWords(input);
    const anagrams = GetAnagrams(words);
    Object.keys(anagrams).forEach(anagram => {
        console.log(anagrams[anagram].toString());
    });
})(input);
