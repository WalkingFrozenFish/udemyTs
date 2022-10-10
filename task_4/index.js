"use strict";
// Union
const someFunc1 = (id) => {
    console.log(id);
};
someFunc1(1);
someFunc1("2");
// Сужение типов
const someFunc2 = (id) => {
    switch (typeof id) {
        case "string":
            console.log("String", id); // Строка
            break;
        case "number":
            console.log("Number", id); // Число
            break;
        default:
            console.log("Boolean", id); // Булево значение
            break;
    }
};
someFunc2("Str");
someFunc2(123);
someFunc2(true);
const someFunc3 = (args) => {
    if (Array.isArray(args)) {
        console.log(args); // Массив строк
    }
    else {
        console.log(args); // Одиночная строка
    }
};
const someFunc4 = (obj) => {
    if ("a" in obj) {
        console.log(obj.a); // Доступен только ключ a
    }
    else {
        console.log(obj.b); // Доступен только ключ b
    }
};
