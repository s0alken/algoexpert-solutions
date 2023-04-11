function sortedSquaredArray(array) {
    const sortedSquares = [];

    let smallerValueIdx = 0;
    let largerValueIdx = array.length - 1;

    for (let i = array.length - 1; i >= 0; i--) {
        const smallerValue = array[smallerValueIdx];
        const largerValue = array[largerValueIdx];

        if (Math.abs(smallerValue) > Math.abs(largerValue)) {
            sortedSquares[i] = smallerValue * smallerValue;
            smallerValueIdx++;
        } else {
            sortedSquares[i] = largerValue * largerValue;
            largerValueIdx--;
        }

    }

    return sortedSquares;

}