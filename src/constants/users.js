// let messages = [
//     {user1: 1, user2: 4, message: 'Здравствуйте. Светлана Федоровна'},
//     {user1: 4, user2: 1, message: 'Здравствуйте. Кирилл'},
//     {user1: 1, user2: 4, message: 'Разработка веб приложения идет полным ходом'},
//     {user1: 4, user2: 1, message: 'Да, я уже увидела'},
// ]
export let messages = [
    {
        userfrom: {id: 1, userName: "Завражный Кирилл Юрьевич"},
        user: {id: 4, userName: "Майер Светлана Федоровна"},
        message: 'Здравствуйте. Светлана Федоровна'
    },
    {
        userfrom: {id: 4, userName: "Майер Светлана Федоровна"},
        user: {id: 1, userName: "Завражный Кирилл Юрьевич"},
        message: 'Здравствуйте. Кирилл'
    },
    {
        userfrom: {id: 1, userName: "Завражный Кирилл Юрьевич"},
        user: {id: 4, userName: "Майер Светлана Федоровна"},
        message: 'Разработка веб приложения идет полным ходом'
    },
    {
        userfrom: {id: 4, userName: "Майер Светлана Федоровна"},
        user: {id: 1, userName: "Завражный Кирилл Юрьевич"},
        message: 'Да, я уже увидела'
    },
]
let bindingUser = [
    {id: 1, users: [4]},
    {id: 2, users: [3]},
    {id: 3, users: [2]},
    {id: 4, users: [1, 5]},
    {id: 5, users: [4]}
]
export let users = [
    {
        id: 1,
        userName: "zavr",
        name: "Завражный Кирилл Юрьевич",
        password: "0000",
        Teacher: false,
        aboutUser: {
            kafedra: "Кафедра информатики и вычислительного эксперимента",
            course: "4 курс",
            spec: "Фундаментальная информатика и ИКТ",
            supervisor: "Майер Светлана Федоровна",
            avatar: 'src/avatar.jpg'
        }
    },
    {id: 2, userName: "sys", name: "Сысоев Альфред Феликсович", password: "1111", Teacher: true, aboutUser: {}},
    {id: 3, userName: "Lytkin", name: "Лыткин Григорий Куприянович", password: "2222", Teacher: false, aboutUser: {}},
    {
        id: 4,
        userName: "mayer",
        name: "Майер Светлана Федоровна",
        password: "0000",
        Teacher: true,
        aboutUser: {
            kafedra: "Кафедра информатики и вычислительного эксперимента",
            rank: "Старший преподаватель",
            spec: "Фундаментальная информатика и ИКТ"
        }
    },
    {
        id: 5,
        userName: "mamont",
        name: "Мамонтов Ефим Федосеевич",
        password: "0000",
        Teacher: false,
        aboutUser: {
            kafedra: "Кафедра алгебры и дискретной математики",
            course: "2 курс",
            spec: "Фундаментальная информатика и ИКТ",
            supervisor: "Майер Светлана Федоровна"
        }
    },
    {id: 6, userName: "newUser", name: "Иванов Иван Иванович", password: "1111", Teacher: false, aboutUser: {}},
    {id: 7, userName: "qwer", name: "Иванов Петр Иванович", password: "0000", Teacher: false, aboutUser: {}},

]

export function getUserFromDB(userName, password) {
    return users.find((user) => (user.userName === userName
            && user.password === password
        )
    )
}

export function getMessage(user1, user2) {
    const MoreUser1 = getUserFromDBID(user1);
    const MoreUser2 = getUserFromDBID(user2);
    let resMessages = [];
    messages.map((mes) => {
            if (((user1 == mes.userfrom.id) && (user2 == mes.user.id)) || (user2 == mes.userfrom.id) && (user1 == mes.user.id))
                resMessages.push({user: mes.userfrom, message: mes.message})
            // if ((user1 == mes.userfrom.id) && (user2 == mes.user.id)) {
            //     resMessages.push({user: {id: MoreUser2.id, userName: MoreUser2.name}, message: mes.message});
            // }
            // if ((user2 == mes.userfrom.id) && (user1 == mes.user.id)) {
            //     resMessages.push({user: {id: MoreUser1.id, userName: MoreUser1.name}, message: mes.message});
        }
    )
    console.log("getMessage resMessages", resMessages);
    return resMessages;
}

export function getUserFromDBID(id) {
    console.log("getUserFromDBID", id)
    return users.find((user) => user.id === id)
}

export function getUserNameFromDBID(id) {
    return users.find((user) => user.id == id)
    // let user = users.find((user) => user.id == id)
    // return {id: user.id, userName: user.name};
}

export function getUserFromDBWithoutPass(userName) {
    let user = users.find((user) => user.userName === userName)
    // if (user) user.password = '';
    return user;
}

export function getBindingUser(payload) {
    let res = [];
    let curUser = getUserFromDBWithoutPass(payload.user);
    if (curUser) {
        console.log("curUser", curUser);
        let bindingUsers = bindingUser.find((user) => user.id == curUser.id)
        if (bindingUsers) {
            console.log("bindingUsers", bindingUsers);
            bindingUsers.users.map((id) => {
                res.push(getUserFromDBID(id))
            })
            console.log("res", res);
            res.map((bindingU) => {
                bindingU.password = ''
            })
        }
    }
    return res;
}