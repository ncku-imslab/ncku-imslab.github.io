export function create2DArray(data) {
    const outerLength = Object.keys(data).length
    const array = new Array(outerLength)

    for (let i = 0; i < outerLength; i++) {
        const innerLength = Object.keys(data)[i].length
        array[i] = new Array(innerLength)

        for (let j = 0; j < innerLength; j++) {
            if (j === 0) {
                array[i][j] = true
            } else {
                array[i][j] = false
            }
        }
    }
    return array
}
