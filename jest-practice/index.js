function capitalize(text) {
  return text.slice(0, 1).toUpperCase() + text.slice(1);
}

function reverseString(text) {
  let textLength = text.length;
  let reversedString = "";
  for (let i = textLength - 1; i >= 0; i--) {
    reversedString += text[i];
  }
  return reversedString;
}

const calculator = (x, y) => {
  const add = () => {
    return Number(x) + Number(y);
  };
  const subtract = () => {
    return Number(x) - Number(y);
  };
  const divide = () => {
    return Number(x) / Number(y);
  };
  const multiply = () => {
    return Number(x) * Number(y);
  };

  return { add, subtract, divide, multiply };
};

function caesarCipher(text, shift) {
  // Char codes: A = 65, Z = 90, a = 97, z = 122
  let newString = "";
  shift = shift % 26;
  for (const character of text) {
    const charCode = character.charCodeAt(0);
    let newCharCode = charCode + shift;

    console.log(newCharCode, charCode, shift);

    // isLowercase
    if (65 <= charCode && charCode <= 90) {
      if (newCharCode < 65) {
        newCharCode += 26;
      } else if (newCharCode > 90) {
        newCharCode -= 26;
      }
      newString += String.fromCharCode(newCharCode);
    } else if (97 <= charCode && charCode <= 122) {
      if (newCharCode < 97) {
        newCharCode += 26;
      } else if (newCharCode > 122) {
        newCharCode -= 26;
      }
      newString += String.fromCharCode(newCharCode);
    } else {
      newString += String.fromCharCode(charCode);
    }
  }
  return newString;
}

function analyzeArray(array) {
  let total = 0;
  let min = Infinity;
  let max = Number.NEGATIVE_INFINITY;
  let length = 0;
  array.forEach((e) => {
    min = Math.min(e, min);
    max = Math.max(e, max);
    total += e;
    length++;
  });
  const average = total / length;
  return { average, min, max, length };
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
