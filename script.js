const burger = document.querySelector("#burger"); // передаем константе селектор по id значок бургер
const menu = document.querySelector("#burger_menu"); // передаем константе селектор по id значок контейнер меню со ссылками
const cross = document.querySelector("#cross");


burger.onclick = function () {
     menu.classList.add("active"); // добавляем меню по нажатию
     burger.classList.add("active");// скрываю значок бургера
     cross.classList.add("active");// добавляю крестик
}

cross.onclick = function () {
     menu.classList.remove("active"); // убираю класс с меню по нажатию - скрываю
     burger.classList.remove("active");// возвращаю бургер
     cross.classList.remove("active");// убираю крестик
}

// let burger__link = document.querySelectorAll(".burger__link");
// console.log(burger__link);
// burger__link.onclick = function () {
//     console.log('click')
// };