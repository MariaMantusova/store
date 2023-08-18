interface IFact {
    id: number
    name: string
    description: string
}

interface IReview {
    image: string
    name: string
    body: string
    id: number
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

const reviews: IReview[] = [
    {
        image: "https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80",
        name: "Алия",
        body: "Осталась в полном восторге от магазина! Все вещи дост" +
            "авили очень быстро, делала заказ мужу в подарок, качество вещей порадовало. Буду заказывать еще.",
        id: 1,
    },
    {
        image: "https://images.unsplash.com/photo-1664575600397-88e370cb46b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        name: "Кристина",
        body: "Добрый день! Сегодня получила свой заказ. Качество жакета и юбки очень хорошее. Всё было красиво с любовью упаковано. Жакет даже не помялся. " +
            "А ещё порадовал сладкий сюрприз. Благодарю за хорошее настроение и за качественные вещи!",
        id: 2,
    },
    {
        image: "https://images.unsplash.com/photo-1664575600796-ffa828c5cb6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        name: "Vladilen",
        body: "Лучший интернет магазин. Всё отлично. Быстро, своевременно. Качественно. Компании 5+. " +
            "С удовольствием буду обращаться.",
        id: 3,
    },
    {
        image: "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        name: "Mary",
        body: "Магазин очень классный оформляют заказ быстро. Рекомендую.",
        id: 4,
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1668028171288-17ae0271b694?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        name: "Анастасия",
        body: "Купил по ошибке не тот товар, забрали назад без проблем, предложили если вдруг,что надо взамен.",
        id: 5,
    },
    {
        image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
        name: "Вера",
        body: "Все пришло вовремя полный комплект оценка 5.",
        id: 6,
    },
    {
        image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        name: "Эда",
        body: "Заказ доставлен вовремя, менеджер приветлива, на все вопросы дала ответы. Буду заказывать еще",
        id: 7,
    },
]

export {facts, reviews};
export type {IFact, IReview};
