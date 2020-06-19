/**
 * Генерация массива случайных чисел от 0 до заданной длины массива
 * @param length - длина массива
 * @returns {[]}
 */
const createRandomArray = length => {
    const array = []
    for (let i = 0; i <= length; i++) {
        array.push(Math.floor(Math.random() * length))
    }
    return array
}

// const array = createRandomArray(50)

const array = [
    44, 18, 39, 19, 12,  1, 22,  7, 16, 23, 20,
    10,  5, 39, 11,  0, 16, 47, 36, 38,  7, 12,
    25, 19, 37,  8, 43,  3, 25, 21, 41, 25, 15,
    27, 48, 10, 40, 20,  6, 40, 30, 38, 12,  6,
    2, 10, 20, 18, 42, 12, 15
]


/**
 * Реализация бинароного поиска
 * @param array - массив в котором осуществляется поиск
 * @param number - искомое число
 * @returns {number} - индекс искомого числа
 */
const binarySearch = (array, number) => {
    const sortedArray = [...array].sort((a,b) => a - b)
    let lowValue = 0
    let highValue = sortedArray.length - 1
    let middleValue = 0

    while (lowValue <= highValue) {
        middleValue = Math.floor((lowValue + highValue) / 2)
        let guess = sortedArray[middleValue]
        if (guess === number) return middleValue
        if (guess < number) lowValue = middleValue + 1
        else highValue = middleValue - 1
    }
}

console.log(binarySearch(array, 6))
