// В данном случае создали переменную, и описали типы в объекте. Теперь по образу этого описания мы добавляем новый объект, в котором уже будут записаны данные по определенным типам.
let object: {
    officeId: number,
    isOpened: boolean,
    contacts: {
        phone: string,
        email: string,
        address: {
            city: string
        }
    }
} = {
    "officeId": 45,
    "isOpened": false,
    "contacts": {
        "phone": "+79100000000",
        "email": "my@email.ru",
        "address": {
            "city": "Москва"
        }
    }
}
