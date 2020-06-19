/**
 * Проверка является ли строка палиндромом без цикла
 * @param string
 * @returns {boolean}
 */
const checkPalindrome = string => {
    const data = string.replace(/[\s.,%]/g, '').toLowerCase().split('')
    return data.join(' ') === data.reverse().join(' ')
}

/**
 * Проверка является ли строка палиндромом с циклом (более оптимизированный способ)
 * @param string
 * @returns {boolean}
 */
const checkPalindromeIterate = string => {
    const data = string.replace(/[\s.,%]/g, '').toLowerCase().split('')
    const middle = Math.floor(data.length / 2)
    for (let i = 0; i < middle; i++) {
        if(data[i] !== data[(data.length - 1) - i]) return false
    } return true
}

console.log('true iterate --', checkPalindromeIterate('А роза упала на лапу Азора'))
console.log('false iterate--', checkPalindromeIterate('Лесенка'))
console.log('true --', checkPalindrome('А роза упала на лапу Азора'))
console.log('false --', checkPalindrome('Лесенка'))
