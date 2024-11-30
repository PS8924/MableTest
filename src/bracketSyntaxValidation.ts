function isValid(s: string): boolean {
    const stack: string[] = [];
    const bracketMap: { [key: string]: string } = {
        ')': '(',
        '}': '{',
        ']': '[',
    };

    for(let char of s){
        if(char === '(' || char === '{' || char ==='[' ){
            stack.push(char)
        } else {
            if (stack.length === 0 || stack.pop() !== bracketMap[char]) {
                return false;
            }
        }
    };
    return stack.length === 0;
}

console.log(isValid("()"));      // true
console.log(isValid("[()]"));    // true
console.log(isValid("[(])"));    // false
console.log(isValid("{"));       // false
console.log(isValid("}{"));      // false