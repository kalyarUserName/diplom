export let students1 = [
    {id: 1, userName: "Завражный Кирилл Юрьевич"},
    {id: 2, userName: "Сысоев Альфред Феликсович"},
    {id: 3, userName: "Лыткин Григорий Куприянович"},
    {id: 4, userName: "Анисимов Август Николаевич"},
    {id: 5, userName: "Мамонтов Ефим Федосеевич"},
];

export let students2 = [
    {id: 6, userName: "Артемьева Наталия Протасьевна"},
    {id: 7, userName: "Данилова Властилина Платоновна"},
    {id: 8, userName: "Трофимова Сусанна Германовна"},
    {id: 9, userName: "Карпова Мартина Тарасовна"},
];

export function getUsers() {
    return [...students1, ...students2];
}

export function getStudent(id) {
    let studs = [...students1, ...students2];
    let stud = studs.find((stud) => stud.id == id);
    return stud;
}

export let users = [
    {id: 1, userName: "zavr", name: "Завражный Кирилл Юрьевич", password: "0000", Teacher: false, aboutUser: {}},
    {id: 2, userName: "sys", name: "Сысоев Альфред Феликсович", password: "1111", Teacher: true, aboutUser: {}},
    {id: 3, userName: "Lytkin", name: "Лыткин Григорий Куприянович", password: "2222", Teacher: false, aboutUser: {}},
]

export function getUserFromDB(userName, password) {
    return users.find((user) => user.userName === userName && user.password === password)
}