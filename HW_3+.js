function isPalindrome(str) {

    str = str
        .toLowerCase()
        .replace(/[^a-zа-я]/g, '');

    let reversedStr = str
        .split('')
        .reverse()
        .join('');

    return str === reversedStr;
}

console.log(isPalindrome("tenet"));
console.log(isPalindrome("tenet!"));

function longestWord(str) {

    let words = str.split(' ');

    let longest = words[0];

    for (let i = 1; i < words.length; i++) {

        if (words[i].length > longest.length) {

            longest = words[i];
        }
    }

    return longest;
}
console.log(longestWord('Web Development Tutorial'))

function sortAlphabetically(str) {

    return str
        .split('')
        .sort()
        .join('');
}

console.log(sortAlphabetically("alphabetical"));

function firstNonRepeatingCharacter(str) {

    for (let i = 0; i < str.length; i++) {

        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {

            return i;
        }
    }

    return -1;
}

console.log(firstNonRepeatingCharacter('фывфавыапрс'));

function countVowels(str) {

    str = str.toLowerCase();

    let count = 0;

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for ( let i = 0; i < str.length; i++) {

        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

console.log(countVowels('Web Development Tutorial'));