const anagramMap = require('./letterToPrimeNumberMap');

function getAnagrams(words) {
    const anagrams = {};
    let key = 1;
    words.forEach(word => {
        key = 1;
        [...word].forEach(character => {
            key *= anagramMap[character]
        });
        if(anagrams[key]) {
            anagrams[key].push(word);
        } else {
            anagrams[key] = [word];
        }
    });
    return anagrams;
}

module.exports = {
    getAnagrams
};
