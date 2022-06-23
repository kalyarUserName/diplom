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
    {id: 4, users: [1, 5, 7, 8]},
    {id: 5, users: [4]},
    {id: 7, users: [4]},
    {id: 8, users: [4]},
]
let notifications = [
    {id: 4, users: [5, 8]}
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
        },
        avatar: "/images/zavrazny.jpg"
    },
    {
        id: 2, userName: "sysoev", name: "Сысоев Альфред Феликсович", password: "1111", Teacher: true, aboutUser: {},
        avatar: "/images/ava3.jpg"
    },
    {
        id: 3, userName: "Lytkin", name: "Лыткин Григорий Куприянович", password: "2222", Teacher: false,
        aboutUser: {
            kafedra: "Кафедра информатики и вычислительного эксперимента",
            course: "2 курс",
            spec: "Фундаментальная информатика и ИКТ",
            supervisor: "Сысоев Альфред Феликсович",
        }, avatar: "/images/ava4.jpg"
    },
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
        },
        avatar: "/images/svetlana_fedorovna.jpg"
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
            supervisor: "Майер Светлана Федоровна",
            rank: "Старший преподаватель",
        },
        avatar: "/images/ava4.jpg"


    },
    {
        id: 6,
        userName: "newUser",
        name: "Иванов Иван Иванович",
        password: "1111",
        Teacher: false,
        aboutUser: {},
        avatar: "/images/ava_men_1.jpg"
    },
    {
        id: 7,
        userName: "qwer",
        name: "Иванов Петр Иванович",
        password: "0000",
        Teacher: false,
        aboutUser: {
            kafedra: "Кафедра информатики и вычислительного эксперимента",
            course: "1 курс",
            spec: "Фундаментальная информатика и ИКТ",
            supervisor: "Майер Светлана Федоровна",
        },
        avatar: "/images/ava_men_2.jpg"
    },
    {
        id: 8,
        userName: "qwer1",
        name: "Коновалов Парамон Артемович",
        password: "0000",
        Teacher: false,
        aboutUser: {
            kafedra: "Кафедра информатики и вычислительного эксперимента",
            course: "2 курс",
            spec: "Фундаментальная информатика и ИКТ",
            supervisor: "Майер Светлана Федоровна",
        },
        avatar: "/images/ava_men_3.jpg"
    },
    {
        id: 9,
        userName: "qwer2",
        name: "Ширяев Остап Евсеевич",
        password: "0000",
        Teacher: false,
        aboutUser: {},
        avatar: "/images/ava_men_4.jpg"
    },
    {
        id: 10,
        userName: "qwer3",
        name: "Карпов Венедикт Германнович",
        password: "0000",
        Teacher: false,
        aboutUser: {},
        avatar: "/images/ava_men_5.jpg"
    },
    {id: 11, userName: "qwer4", name: "Русаков Юстин Адольфович", password: "0000", Teacher: false, aboutUser: {}},

]

export function getUserFromDB(userName, password) {
    return users.find((user) => (user.userName === userName
            && user.password === password
        )
    )
}

export function getMessageMatchFromDB(user1, user2) {
    let resMessages = [];
    messages.map((mes) => {
            if (((user1 == mes.userfrom.id) && (user2 == mes.user.id)) || (user2 == mes.userfrom.id) && (user1 == mes.user.id))
                resMessages.push({user: mes.userfrom, message: mes.message})
        }
    )
    console.log("getMessageMatchFromDB res", resMessages);
    return resMessages;
}

export function getMessagesFromDB(userID) {

    let mess = [];
    messages.map(mes => {
        if (userID == mes.user.id || userID == mes.userfrom.id)
            mess.push(mes);
    })
    console.log("getMessagesFromDB res", mess);
    return mess;
}

export function getUserFromDBID(id) {
    return users.find((user) => user.id == id)
}

export function getUserNameFromDBID(id) {
    return users.find((user) => user.id == id)
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
        let bindingUsers = bindingUser.find((user) => user.id == curUser.id)
        if (bindingUsers) {
            bindingUsers.users.map((id) => {
                res.push(getUserFromDBID(id))
            })
            res.map((bindingU) => {
                bindingU.password = ''
            })
        }
    }
    return res;
}

export function getNotification(payload) {
    let curUser = getUserFromDBWithoutPass(payload.user);
    if (curUser) {
        let res = notifications.find((user) => user.id === curUser.id);
        if (res)
            return res.users;
    }
    return [];
}

export function getFreeStudents() {
    let result = [];
    users.map((user) => {
        if (!user.Teacher && user.aboutUser.supervisor === undefined) {
            result.push({id: user.id, name: user.name, userName: user.userName})
        }
    })
    return result;
}

export function getSupervisors() {
    let result = [];
    users.map((user) => {
        if (user.Teacher) {
            result.push({id: user.id, name: user.name, userName: user.userName})
        }
    })
    return result;
}

export function addBindToDB(supervisorID, studentID) {
    let flag = false;
    bindingUser.map(user => {
        if (user.id === supervisorID) {
            user.users.push(studentID);
            flag = true;
        }
    })
    if (flag)
        bindingUser.push({id: supervisorID, users: {studentID}});
    users.map(user => {
        if (user.id === studentID) {
            user.aboutUser.supervisor = getUserFromDBID(supervisorID).name;
        }
    });
}

export function editProfileToDB(editUser) {
    let editionUser = users.find((user) => user.id === editUser.id);
    editionUser.name = editUser.name;
    editionUser.aboutUser = editUser.aboutUser;
}

export function addNewUserToDB(user) {
    users.push(user);
}

export function sendMessageToDB(userFrom, userTo, message) {
    messages.push({
        userfrom: {id: userFrom.id, userName: userFrom.userName},
        user: {id: userTo.id, userName: userTo.userName},
        message: message
    });
}