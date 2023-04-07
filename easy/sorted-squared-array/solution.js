function isValidSubsequence(array, sequence) {
    let number = sequence.shift();

    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            number = sequence.shift();
            if (!number) return true;
        }

    }

    return false;
}