export const HOME = {link: "/"};
export const LOGIN = {name: "Login", link: "/login"};
export const REGISTRATION = {name: "Registration", link: "/registration"};
export const PROFILE = {name: "Profile", link: "/profile"};
export const MYPROFILE = {name: "My profile", link: "/myprofile"}
export const CHAT = {name: "Chat", link: "/chat"};
export const TABLE = {name: "Table", link: "/table"};

export const routes = [
    {path: '/', exact: true, desc: 'Главная'},
    {path: '/about', exact: false, desc: 'О проекте'},
    {path: '/howtouse', exact: false, desc: 'Как пользоваться'},
]
export const privateRoutes = [
    {path: '/', exact: true, desc: 'Главная'},
    {path: '/tables', exact: false, desc: 'Виртуальная доска'},
    {path: '/about', exact: false, desc: 'О проекте'},
    {path: '/howtouse', exact: false, desc: 'Как пользоваться'}
]