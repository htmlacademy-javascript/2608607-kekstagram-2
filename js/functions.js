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
console.log(isPalindrome('Лёша на полке клопа нашёл '));

export { isPalindrome };
export { checkLength };

/*
1. функция timeToMinutes превращает строку со временем в количество минут;
2. подсчитываем время окончания собрания, в минутах;
3. проверяем: если собрание начинается не раньше начала рабочего дня; если собрание заканчивается не позже конца рабочего дня;
4. возвращаем true, если условия п.3 выполняются, иначе возвращаем false.
*/

function isMeetingWithinWorkTime(workStart, workEnd, meetingStart, meetingDurationMinutes) {
  function timeToMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
  }

  const workStartMinutes = timeToMinutes(workStart);
  const workEndMinutes = timeToMinutes(workEnd);
  const meetingStartMinutes = timeToMinutes(meetingStart);

  const meetingEndMinutes = meetingStartMinutes + Number(meetingDurationMinutes);

  const isWithinWorkTime = meetingStartMinutes >= workStartMinutes &&
    meetingEndMinutes <= workEndMinutes;

  return isWithinWorkTime;
}

console.log(isMeetingWithinWorkTime("09:00", "17:00", "10:30", 90));
console.log(isMeetingWithinWorkTime("09:00", "17:00", "16:00", "120"));

console.log(isMeetingWithinWorkTime("09:00", "17:00", "09:00", 480));
console.log(isMeetingWithinWorkTime("09:00", "17:00", "16:30", "30"));



