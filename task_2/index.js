"use strict";
// Enum - можно представить как некий справочник с ограниченным числом значений. К примеру как список кодов от сервера, роли пользователей на сайте и т.д. Подходит для монолита, где он будет находться в одном месте. Даже если он будет дополняться.
// Перечисление enum начинается с 0
var StatusCode1;
(function (StatusCode1) {
    StatusCode1[StatusCode1["SUCCESS"] = 0] = "SUCCESS";
    StatusCode1[StatusCode1["IN_PROGRESS"] = 1] = "IN_PROGRESS";
    StatusCode1[StatusCode1["FAILED"] = 2] = "FAILED";
})(StatusCode1 || (StatusCode1 = {}));
// Перечисление enum начинается с определенного числа, и дальше идет увеличение на единицу
var StatusCode2;
(function (StatusCode2) {
    StatusCode2[StatusCode2["SUCCESS"] = 1] = "SUCCESS";
    StatusCode2[StatusCode2["IN_PROGRESS"] = 2] = "IN_PROGRESS";
    StatusCode2[StatusCode2["FAILED"] = 3] = "FAILED";
})(StatusCode2 || (StatusCode2 = {}));
// Гетерогенные enum, это когда используются значения разных типов. Достаточно редко используются. 
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["SUCCESS"] = 1] = "SUCCESS";
    StatusCode["IN_PROGRESS"] = "p";
    StatusCode[StatusCode["FAILED"] = 5] = "FAILED";
})(StatusCode || (StatusCode = {}));
// Enum так же позволяет делать какие то высчисления для своих значений. Которые можно просчитать на этапе компиляции. К примеру использование других констант из enum, или вызов функции
const someFunc = () => {
    return 100;
};
var CalculatesValues;
(function (CalculatesValues) {
    CalculatesValues[CalculatesValues["KEY1"] = 10] = "KEY1";
    CalculatesValues[CalculatesValues["KEY2"] = 5] = "KEY2";
    CalculatesValues[CalculatesValues["KEY3"] = someFunc()] = "KEY3";
})(CalculatesValues || (CalculatesValues = {}));
console.log(CalculatesValues);
const someFunction = () => {
    let res = 300 /* ExampleEnum.KEY3 */ - 50;
    console.log(100 /* ExampleEnum.KEY1 */ + 200 /* ExampleEnum.KEY2 */);
    console.log("Some result", res);
};
someFunction();
