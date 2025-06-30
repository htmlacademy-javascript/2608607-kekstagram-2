/*функция принимает строку и максимальную длину,
сравнивает их
и возвращает true, если строка меньше или равна максДлине,
false - если строка длиннее
*/

function checkLength (string, maxLength) {
  return string.length <= maxLength;
}
console.log(checkLength('mother', 10));
console.log(checkLength ('myimaginaryword', 10));
console.log(checkLength('', 10));
console.log(checkLength('fffff', 4));


//функция проверяет, является ли строка палиндромом://
//создаем нормализованную строку в одном регистре без пробелов, normalized//
//создаем из normalized новую строку "наоборот", reversed//
//сравниваем normalized и reversed через ===//

function isPalindrome(string) {
  const optimizedString = string.toLowerCase().replaceAll(' ', '');
    console.log(optimizedString);
  const array = optimizedString.split('');
  const reversedArray = array.reverse();
  const reversedString = reversedArray.join('');
    console.log(reversedString);
  return optimizedString === reversedString;
}

console.log(isPalindrome('ДовОд'));
console.log(isPalindrome('Abba'));
console.log(isPalindrome('Лёша на полке клопа нашёл '))

