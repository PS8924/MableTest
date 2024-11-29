type keyPadNumber = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

const keyPadCharacterMapper : Record<keyPadNumber, string> = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
};

const generateCombinations = (digits: string): string[]=>{
    if(!digits) return [];

    let combinations: string[] = [""];

    for(const digit of digits){
        const num = parseInt(digit) as keyPadNumber;
        const letters = keyPadCharacterMapper[num] || ""; // for digits 1 and 0

        if (letters === "") continue; // for the digits 1 and 0, there are no letters

        const newCombinations: string[] = [];
        for(const combination of combinations){
            for(const letter of letters){
                newCombinations.push(combination + letter);
            }
        }
        combinations = newCombinations;
    }
    return combinations;
}

const inputStringOne = "34";
const inputStringTwo = "123";
console.log(generateCombinations(inputStringOne));
console.log(generateCombinations(inputStringTwo));