/*function findPairsWithSum(arr, targetSum) {
    const pairs = [];
    const seen = new Set(); // To keep track of already seen numbers
    
    for (const num of arr) {
        const complement = targetSum - num;
        
        if (seen.has(complement)) {
            pairs.push([num, complement]);
        }
        
        seen.add(num);
    }
    
    return pairs;
}

// Example usage
const arr = [2, 4, 3, 6, 8, 5, 9, 1];
const targetSum = 10;
const pairs = findPairsWithSum(arr, targetSum);

if (pairs.length > 0) {
    console.log(`Pairs with sum ${targetSum}:`);
    for (const pair of pairs) {
        console.log(pair);
    }
} else {
    console.log("No pairs found with the given sum.");
}

*/


/*
function reverseArrayInPlace(arr) {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

// Example usage
const arr = [1, 2, 3, 4, 5];
console.log("Original array:", arr);
reverseArrayInPlace(arr);
console.log("Reversed array:", arr);*/




/*
function areStringsRotations(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    
    const concatenated = str1 + str1;
    if (concatenated.includes(str2)) {
        return true;
    }
    
    return false;
}

// Example usage
const string1 = "abcdef";
const string2 = "defabc";
if (areStringsRotations(string1, string2)) {
    console.log("The strings are rotations of each other.");
} else {
    console.log("The strings are not rotations of each other.");
}
*/





/*
function firstNonRepeatedChar(string) {
    const charCount = {}; // Object to store character frequencies
    
    // Count the occurrences of each character
    for (const char of string) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    
    // Find the first non-repeated character
    for (const char of string) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    
    return null; // No non-repeated character found
}

// Example usage
const inputString = "aabbccdef";
const result = firstNonRepeatedChar(inputString);

if (result) {
    console.log(`The first non-repeated character is: ${result}`);
} else {
    console.log("No non-repeated character found.");
}
*/



/*
function towerOfHanoi(n, source, target, auxiliary) {
    if (n > 0) {
        // Move n-1 disks from source to auxiliary using target as auxiliary
        towerOfHanoi(n - 1, source, auxiliary, target);
        
        // Move the nth disk from source to target
        console.log(`Move disk ${n} from ${source} to ${target}`);
        
        // Move the n-1 disks from auxiliary to target using source as auxiliary
        towerOfHanoi(n - 1, auxiliary, target, source);
    }
}

// Example usage
const numDisks = 3;
towerOfHanoi(numDisks, 'A', 'C', 'B');
*/





// function isOperator(char) {
//     return "+-*/".includes(char);
// }

// function postfixToPrefix(postfixExpression) {
//     const stack = [];

//     for (const char of postfixExpression) {
//         if (!isOperator(char)) {
//             stack.push(char);
//         } else {
//             const operand2 = stack.pop();
//             const operand1 = stack.pop();
//             const prefix = char + operand1 + operand2;
//             stack.push(prefix);
//         }
//     }

//     return stack[0];
// }

// // Example usage
// const postfixExpr = "34+5*";
// const prefixExpr = postfixToPrefix(postfixExpr);
// console.log("Prefix expression:", prefixExpr);












// function isOperator(char) {
//     return "+-*/".includes(char);
// }

// function prefixToInfix(prefixExpression) {
//     const stack = [];
    
//     for (let i = prefixExpression.length - 1; i >= 0; i--) {
//         const char = prefixExpression[i];
        
//         if (!isOperator(char)) {
//             stack.push(char);
//         } else {
//             const operand1 = stack.pop();
//             const operand2 = stack.pop();
//             const infix = `(${operand1}${char}${operand2})`;
//             stack.push(infix);
//         }
//     }
    
//     return stack[0];
// }

// // Example usage
// const prefixExpr = "+*34*56";
// const infixExpr = prefixToInfix(prefixExpr);
// console.log("Infix expression:", infixExpr);





/*
function areBracketsClosed(code) {
    const stack = [];
    const brackets = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    for (const char of code) {
        if ("({[".includes(char)) {
            stack.push(char);
        } else if (")}]".includes(char)) {
            if (!stack.length || stack[stack.length - 1] !== brackets[char]) {
                return false;
            }
            stack.pop();
        }
    }
    
    return stack.length === 0;
}

// Example usage
const codeSnippet = "{[()]}";
if (areBracketsClosed(codeSnippet)) {
    console.log("All brackets are properly closed.");
} else {
    console.log("Some brackets are not properly closed.");
}
*/



/*
class Stack {
    constructor() {
        this.items = [];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (!this.isEmpty()) {
            return this.items.pop();
        }
    }

    peek() {
        if (!this.isEmpty()) {
            return this.items[this.items.length - 1];
        }
    }

    size() {
        return this.items.length;
    }
}

function reverseStack(stack) {
    const reversedStack = new Stack();

    while (!stack.isEmpty()) {
        reversedStack.push(stack.pop());
    }

    return reversedStack;
}

// Example usage
const originalStack = new Stack();
originalStack.push(1);
originalStack.push(2);
originalStack.push(3);
originalStack.push(4);

const reversedStack = reverseStack(originalStack);
console.log("Reversed stack:");
while (!reversedStack.isEmpty()) {
    console.log(reversedStack.pop());
}

*/








class StackWithMin {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    push(item) {
        this.stack.push(item);
        if (this.minStack.length === 0 || item <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(item);
        }
    }

    pop() {
        if (!this.isEmpty()) {
            const poppedItem = this.stack.pop();
            if (poppedItem === this.minStack[this.minStack.length - 1]) {
                this.minStack.pop();
            }
            return poppedItem;
        }
    }

    getMin() {
        if (this.minStack.length === 0) {
            return null;
        }
        return this.minStack[this.minStack.length - 1];
    }
}

// Example usage
const stack = new StackWithMin();
stack.push(4);
stack.push(2);
stack.push(6);
stack.push(1);

console.log("Smallest number:", stack.getMin());
  








