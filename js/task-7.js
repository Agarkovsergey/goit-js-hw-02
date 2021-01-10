'use strict'
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(login) {
  // твой код
  let result = login.length < 4 || login.length > 16 ? false : true;
  return result;
};

const isLoginUnique = function(allLogins, login) {
  // твой код
  let result;
  for (let i = 0; i < allLogins.length; i += 1) {
    if (allLogins[i] === login) {
      result = false;
      break;
    } else {
      result = true;
    }
  }
  return result;
};

const addLogin = function(allLogins, login) {
  // твой код
    if (isLoginValid(login) === false) {
      return 'Ошибка! Логин должен быть от 4 до 16 символов';
    } else if(isLoginUnique(allLogins, login) === true){
      return 'Логин успешно добавлен!';
    } else {
      return 'Такой логин уже используется!';
    } 
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'