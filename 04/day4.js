const rangeStart = 206938;
const rangeEnd = 679128;
let rangeBuilder = 206938;

let rangeLength = rangeEnd - rangeStart;

let fullRange = [];

for (let i = 0; i < rangeLength - 1; i++) {
  fullRange.push(rangeBuilder.toString());
  rangeBuilder++;
}

let countValidPasswords = 0;

//Part 1 solution
// const matchCriteria = input => {
//   let hasDigitPair = false;
//   let isAscending = false;
//   let countMatches = 0;
//   let fails = 0;

//   for (let i = 0; i < input.length - 1; i++) {
//     const digit = parseInt(input.charAt(i));
//     const nextDigit = parseInt(input.charAt(i + 1));

//     if (nextDigit !== NaN) {
//       if (digit === nextDigit) {
//         hasDigitPair = true;
//       }

//       if (digit > nextDigit) {
//         return 0;
//       } else {
//         isAscending = true;
//       }
//     } else {
//       return "End of input or invalid input";
//     }
//   }

//   if (hasDigitPair && isAscending) {
//     console.log(input);

//     return 1;
//   } else {
//     return 0;
//   }
// };

//Part 2 solution
const matchCriteria = input => {
  let hasDigitPair = false;
  let isAscending = false;
  let countMatches = 0;
  let fails = 0;
  let digitCounter = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < input.length; i++) {
    const digit = parseInt(input.charAt(i));
    const nextDigit = parseInt(input.charAt(i + 1));

    if (nextDigit !== NaN) {
      digitCounter[digit]++;

      if (digit > nextDigit) {
        return 0;
      } else {
        isAscending = true;
      }
    } else {
      return "End of input or invalid input";
    }
  }

  for (let z = 0; z < digitCounter.length; z++) {
    if (digitCounter[z] === 2) {
      hasDigitPair = true;
    }
  }

  if (hasDigitPair && isAscending) {
    return 1;
  } else {
    return 0;
  }
};

for (let i = 0; i < fullRange.length; i++) {
  countValidPasswords += matchCriteria(fullRange[i]);
}

console.log(countValidPasswords);
