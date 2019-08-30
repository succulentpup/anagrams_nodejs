const fs = require('fs-extra');

async function getWords(filePath) {
    const words = (await fs.readFile(filePath, 'utf-8')).split('\n');
    if (words.length === 1 && words[0] === '') {
       return [];
    }
    return words.map(word => word.toLowerCase());
}

module.exports = {
    getWords
};
