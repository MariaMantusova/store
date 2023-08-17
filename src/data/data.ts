interface IFact {
    id: number
    name: string
    description: string
}

const facts: IFact[] = [
    {
        id: 1,
        name: "Качество",
        description: "В наш магазин попадают только проверенные временем и лично нами товары.",
    },
    {
        id: 2,
        name: "Цена",
        description: "Мы выставляем товары по максимально доступным ценам.",
    },
    {
        id: 3,
        name: "Разнообразие",
        description: "Мы стараемся расширять каталог наших товаров," +
            " еще совсем недавно у нас была только одежда, а сейчас мы добавили ювелирные украшения и электронику.",
    },
    {
        id: 4,
        name: "Стабильность",
        description: "Мы на рынке уже более 10 лет и за это врем порадовали своими товарами более 10000 клиентов",
    },
    {
        id: 5,
        name: "Скорость",
        description: "Наш магазин не ждет оплаты заказа для его транспортировки с Запада. " +
            "Мы заранее заказываем весь список товаров и доставляем с нашего склада.",
    },
    {
        id: 6,
        name: "Исключительность",
        description: "На данный момент многие поставщики перестают рабоатать с Россией из-за чего товаров из-за" +
            " границы становится все меньше, приобретая продукцию у нас вы будете выделяться.",
    },
]

export {facts};
export type {IFact};
