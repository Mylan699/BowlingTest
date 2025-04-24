export function scoreBowling(rolls: string): number {
    const rollsArray: number[] = [];

    for (let i = 0; i < rolls.length; i++) {
        const char = rolls[i];
        if (char === 'X') {
            rollsArray.push(10);
        } else if (char === '/') {
            const last = rollsArray[rollsArray.length - 1];
            rollsArray.push(10 - last);
        } else if (char === '-') {
            rollsArray.push(0);
        } else {
            rollsArray.push(parseInt(char, 10));
        }
    }
    
    let score = 0;
    let rollIndex = 0;

    for (let frame = 0; frame < 10; frame++) {
        if (rollsArray[rollIndex] === 10) { 
            score += 10 + rollsArray[rollIndex + 1] + rollsArray[rollIndex + 2];
            rollIndex += 1;
        } else if (rollsArray[rollIndex] + rollsArray[rollIndex + 1] === 10) {
            score += 10 + rollsArray[rollIndex + 2];
            rollIndex += 2;
        } else {
            score += rollsArray[rollIndex] + rollsArray[rollIndex + 1];
            rollIndex += 2;
        }
    }

    return score;
}
