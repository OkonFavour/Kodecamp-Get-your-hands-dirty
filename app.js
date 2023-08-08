//Kodecamp Get your hands dirty with this!!

//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
function capitalizeWords(str) {
    const words = str.split(' ');

    const capitalizedWords = words.map(word => {
        if (word.length === 0) {
            return word;
        }

        const firstLetter = word[0].toUpperCase();
        const restOfWord = word.slice(1).toLowerCase();

        return firstLetter + restOfWord;
    });

    return capitalizedWords.join(' ');
}

// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string.

function findLongestWord(str) {
    const words = str.split(' ');
    let longestWord = '';

    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

// Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.

function PrimeCheck(n) {
    if (n <= 1) {
        console.log(false);
        return false;
    }

    if (n <= 3) {
        console.log(true);
        return true;
    }

    if (n % 2 === 0 || n % 3 === 0) {
        console.log(false);
        return false;
    }

    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) {
            console.log(false);
            return false;
        }
    }

    console.log(true);
    return true;
}

//Write a JavaScript function that accepts an argument and returns the type
function ArgType(type) {
    return typeof type;
}

//Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively.
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
secondMinMax(arr);

function secondMinMax(num) {
    let RemoveMax = Math.max.apply(Math, num);
    let RemoveMin = Math.min.apply(Math, num);
    let maxIndex = num.indexOf(RemoveMax);
    let minIndex = num.indexOf(RemoveMin);
    num.splice(maxIndex, 1);
    num.splice(minIndex, 1);
    console.log(
        `Second Largest ${Math.max.apply(
            Math,
            num
        )} - SecondLowest ${Math.min.apply(Math, num)}`
    );
    return `Second Largest ${RemoveMax} - SecondLowest ${RemoveMin}`;
}