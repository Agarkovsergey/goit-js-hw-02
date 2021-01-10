'use strict'
const checkForSpam = function(message) {
  // твой код
    const blackList = ['sale', 'spam'];
    for (let i = 0; i < blackList.length; i += 1){
        if (message.toLowerCase().includes(blackList[i])) {
            return true;
        }
    }
    return false;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true