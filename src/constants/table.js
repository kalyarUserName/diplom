export let tasks = [
    {
        id: 1,
        user: 1,
        name: "Задание 1",
        desc: "Описание задания 1. Нужно выполнить задание 1 в строго заданной форме",
        status: "done",
        startDate: "2022-03-04",
        endDate: "2022-05-03"
        // startDate: "04.03.2022",2017-05-24
        // endDate: "03.05.2022"
    },
    {
        id: 2,
        user: 1,
        name: "Задание 2",
        desc: "Описание задания 2. Нужно выполнить задание 2 в строго заданной форме",
        status: "none",
        startDate: "2022-03-04",
        endDate: "2022-05-03"
    },
    {
        id: 3,
        user: 1,
        name: "Задание 3",
        desc: "Описание задания 3. Нужно выполнить задание 3 в строго заданной форме",
        status: "edit",
        startDate: "2022-03-04",
        endDate: "2022-05-03"
    },
    {
        id: 4,
        user: 1,
        name: "Задание 4",
        desc: "Описание задания 4. Нужно выполнить задание 4 в строго заданной форме",
        status: "cancel",
        startDate: "2022-03-04",
        endDate: "2022-05-03"
    },
    {
        id: 5,
        user: 1,
        name: "Задание 5",
        desc: "Описание задания 5. Нужно выполнить задание 5 в строго заданной форме",
        status: "done",
        startDate: "2022-03-04",
        endDate: "2022-05-03"
    },
    {
        id: 6,
        user: 3,
        name: "Задание 1",
        desc: "Описание задания 1. Нужно выполнить задание 1 в строго заданной форме",
        status: "done",
        startDate: "2022-03-04",
        endDate: "2022-05-03"
    },
    {
        id: 7,
        user: 3,
        name: "Задание 2",
        desc: "Описание задания 2. Нужно выполнить задание 2 в строго заданной форме",
        status: "done",
        startDate: "2022-03-04",
        endDate: "2022-05-03"
    },
]

export function getTasks(id) {
    let res = [];
    tasks.map((task) => {
        if (task.user == id)
            res.push(task);
    })
    return res;
}