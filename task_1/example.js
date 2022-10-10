"use strict";
const object1 = {
    // q: "123" // Не существует, и вызовет ошибку
    someKey: "Some text"
};
console.log(object1);
// Кортеж - массив с фиксированным количеством элементов. Можно определить какие данные будут храниться в нем
const array1 = ["Some text", 123, true];
console.log(array1);
// С помощью rest оператора, можно собрать неопределенное число элементов с указанным типом
const array2 = ["Some text 2", 1, 2, 3, false];
console.log(array2);
// Модификатор readonly - можно запретить изменять массивы с помощью модификатора доступа. Данное свойство позволяет только читать элементы массива. 
const array3 = ["Some text 3", true, 42];
console.log(array3);
// array3[0] = "Qwerty" // Перезапись не доступна
// Альтернативная запись модификатора доступа
const array4 = [1, 2, 3];
console.log(array4);
