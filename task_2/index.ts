// Enum - можно представить как некий справочник с ограниченным числом значений. К примеру как список кодов от сервера, роли пользователей на сайте и т.д. Подходит для монолита, где он будет находться в одном месте. Даже если он будет дополняться.

// Перечисление enum начинается с 0
enum StatusCode1 {
    SUCCESS,
    IN_PROGRESS,
    FAILED
}

// Перечисление enum начинается с определенного числа, и дальше идет увеличение на единицу
enum StatusCode2 {
    SUCCESS = 1,
    IN_PROGRESS = 2,
    FAILED = 3
}

// Гетерогенные enum, это когда используются значения разных типов. Достаточно редко используются. 
enum StatusCode {
    SUCCESS = 1,
    IN_PROGRESS = "p",
    FAILED = 5
}


// Enum так же позволяет делать какие то высчисления для своих значений. Которые можно просчитать на этапе компиляции. К примеру использование других констант из enum, или вызов функции
const someFunc = () => {
    return 100
}

enum CalculatesValues {
    KEY1 = 10,
    KEY2 = KEY1 - 5,
    KEY3 = someFunc()
}

console.log(CalculatesValues)


// Данная запись позволит не создавать функцию по итогу компиляции. За место создания функции, компилятор найдет все упоминания ключей из enum, и заменит их на значения.
const enum ExampleEnum {
    KEY1 = 100,
    KEY2 = 200,
    KEY3 = 300
}

const someFunction = () => {
    let res = ExampleEnum.KEY3 - 50
    console.log(ExampleEnum.KEY1 + ExampleEnum.KEY2)
    console.log("Some result", res)
}

someFunction()