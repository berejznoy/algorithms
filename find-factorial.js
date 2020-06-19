/**
 * Релизация поиска факториала числа n
 * @param n - факториал числа
 * @param r - произведение чисел от 1 до n (искомое значение)
 * @returns {number}
 */

const findFactorial = (n, r = 1) => {
    while (n > 0) r *= n--;
    return r;
}

console.log(findFactorial(1))