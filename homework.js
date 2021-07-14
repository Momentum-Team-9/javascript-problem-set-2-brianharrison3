// 1. Create a function called "remove" that takes an array and a potential
// member of the array, and returns a new array with that member removed.
// For example, `remove(['Cadence', 'Ordel', 'Marion'], 'Marion')` results
// in `['Cadence', 'Ordel']`.

function remove (['Brian', 'Ray', 'Braylon', 'Justin'], 'Justin') {

let brothers = ["Brian", "Ray", "Braylon", "Justin"]
console.log(brothers);

let idx = brothers.indexOf('Justin');
brothers.splice(idx, 1);


console.log(brothers);

}

//
// If the potential member is not in the array, return the array unchanged.
// If the potential member is in the array, remove all instances of it from the array.

// 2. Revisit your "remove" function. Make sure that it does not change the original
// array but instead returns a new array.

function remove (['Brian', 'Ray', 'Braylon', 'Justin'], 'Justin') {

    let brothers = ["Brian", "Ray", "Braylon", "Justin"]
    console.log(brothers);
    
    let idx = brothers.indexOf('Justin');
    brothers.splice(idx, 1);
    let realBrothers = [...brothers]
    
    console.log(realBrothers);

// 3. Create a function called "sum" that takes an array of numbers and
// returns the sum of those numbers.
let scores = [45, 45, 35, 35, 25]
let sum = 0

for (let score of scores) {
  sum += score
}
console.log(sum);

// 4. Create a function called "average" that takes an array of numbers
// and returns the average of those numbers.

let scores = [45, 45, 35, 35, 25]
let avg = 0;

for (let i = 0,  {
  avg += score;
  score / score.length
}

console.log(avg);

// 5. Create a function called "minimum" that takes an array of numbers and
// returns the smallest number in that array.

let words = ['tapeworm', 'gnarly', 'armoire']
let wordLengths = []

for (let word of words) {
  wordLengths.push(word.length)
  
}

// 6. There are many techniques to sort arrays in programming. Your programming
// language will likely include the ability to do this. We are going to
// implement sorting ourselves, however.
//
// A "selection sort" is one of the most simple sorting algorithms. To implement it,
// you start with an unsorted array of numbers. You search the array and find the
// smallest number in the array. You then insert that into a new array as the first
// element and remove it from the original array. You continue doing this until
// there are no numbers left in the original array.
//
// Create a function called selectionSort that takes an array of numbers and returns
// a sorted array using the above technique.
//
// Note 1: You do not actually want to delete things from the original array. You
// should copy it first. To copy an array, use the following code:
//
// var arrayCopy = array.slice(0);
//
// Think about why this works.
//
// Note 2: Selection sort can be implemented using one array. Read the explanation at
// https://courses.cs.vt.edu/csonline/Algorithms/Lessons/SelectionSort/index.html
// to see how. This may make more sense to you.

// 7. Create a function called `textList` that takes an array and joins its elements
// into a string separated by commas.
//
// For example, `textList(['Cadence', 'Ordel', 'Marion'])` results in the string
// `"Cadence,Ordel,Marion"`.
