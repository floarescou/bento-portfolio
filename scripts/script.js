"use strict";
// alert("Hello, JavaScript");

// анимация при наведении на пункт навигации "Контакты"
// пункты навигации в шапке сайта
const navBtns = document.getElementsByClassName("nav__btn");
const socialsBlock = document.getElementsByClassName("soc1als")[0];
const contactBlock = document.getElementsByClassName("contact")[0];

navBtns[2].addEventListener('mouseenter', () => {
        socialsBlock.classList.add('blink-anim');
        contactBlock.classList.add('soshUp-Anim');
    }
);
navBtns[2].addEventListener('mouseleave', () => {
    socialsBlock.classList.remove('blink-anim');
    contactBlock.classList.remove('soshUp-Anim');
});
// .. анимация при наведении на пункт навигации "Контакты"

//  ===== изменение интерфейса по клику на пункт меню (выбор визитки, соответствующей пункту меню) + меню в бургере
// пункты всплывающего меню (пункт навигации "Проекты")
const projectsItemsLinks = document.querySelectorAll(".projects__link");
// пункты меню в бургере (пункт навигации "Проекты")
const submenuProjectsLinks = document.querySelectorAll(".sub-projects");
// Корневой элемент :root (настройки цветовой палитры)
const root = document.documentElement;
// массив наименований переменных :root
const rootNames = [
    "--background", "--blocks-bg", "--ui-accent", "--text-color"
];

// массив подборок палитр :root для разных проектов
const rootValues = [
    ["#f7f3de", "#D4D3B3", "#8D926F", "#2c2e25"],
    ["#f9f1f0", "#fadcd9", "#f8afa6", "#000"],
    ["#D8CAB9", "#B9905A", "#805230", "#482e2e"],
    ["#F8F8F8", "#B1CFD0", "#7d91bb", "#331111"]
];

// при клике на пункт меню меняются цвета, тексты и картинки
function changeRootProperties(list, array1, array2) {
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener("click", () => {
            for (let k = 0; k < array1.length; k++) {
                root.style.setProperty(array1[k], array2[i][k]);
            }
            projectsArray[i].changeData();
            projectsArray[i].changeImages();
        })
    }
}

// вызов функции для всплывающего меню (десктоп)
changeRootProperties(projectsItemsLinks, rootNames, rootValues);
// вызов функции для подменю "Проекты" в бургере
changeRootProperties(submenuProjectsLinks, rootNames, rootValues);

// элементы с текстами и картинками для изменений
const mainTitle = document.getElementById("main-header");
const mainImageBlock = document.getElementById("main-image");
const description = document.getElementById("description");
const projectImage = document.getElementById("project-image");
const projectItemsBlock = document.querySelectorAll(".project__item");
const projectLinkBlock = document.getElementById("project-link");

// класс-конструктор для проектов
class Project {
    constructor(title, mainImage, desc, previewImg, projectItems, projectLink) {
        this.title = title;
        this.mainImage = mainImage;
        this.desc = desc;
        this.previewImg = previewImg;
        this.projectItems = projectItems;
        this.projectLink = projectLink;

        this.changeData = function () {
            mainTitle.innerHTML = this.title;
            description.innerText = this.desc;
            projectLinkBlock.href = this.projectLink;

            for (let i = 0; i < projectItemsBlock.length; i++) {
                projectItemsBlock[i].innerText = this.projectItems[i];
            }
        };
        this.changeImages = function () {
            mainImageBlock.src = this.mainImage[0];
            mainImageBlock.srcset = this.mainImage[1];
            projectImage.src = this.previewImg[0];
            projectImage.srcset = this.previewImg[1];
        }
    }
}

// данные проектов
// RU version
const mainRU = new Project(
    "Владею <span>версткой</span> как самурай – катаной.",
    ["img/main-pic.jpg", "img/main-pic@2x.jpg"],
    "Изящные решения сложных задач. Каждый проект — отражение моего уважения к традициям искусства разработки.",
    ["img/main-preview.jpg", "img/main-preview@2x.jpg"],
    ["Надежность", "Стабильность", "Продуктивность"],
    "https://floarescou.github.io/macaroon-project/"
);

const macaroonsRU = new Project(
    "Macaroons. <span>Эстетика</span> вкуса в каждом пикселе.",
    ["img/macaroons-pic.jpg", "img/macaroons-pic@2x.jpg"],
    "Визуальный минимализм в гармонии с сочной палитрой французских десертов. Легкий и воздушный лендинг для кондитерской мануфактуры.",
    ["img/macaroons-preview.jpg", "img/macaroons-preview@2x.jpg"],
    ["Эстетика", "Нежность", "Минимализм"],
    "https://floarescou.github.io/macaroon-project/"
);

const tictactoeRU = new Project(
    "TicTacToe.<br> <span>Уютная</span> лесная стратегия.",
    ["img/tic-main.jpg", "img/tic-main@2x.jpg"],
    "Интерактивный прототип классической игры. Гармония природной эстетики и лаконичного кода в современной веб-реализации.",
    ["img/tic-preview.jpg", "img/tic-preview@2x.jpg"],
    ["Гармония", "Атмосфера", "Эстетика"],
    "https://floarescou.github.io/TicTacToe-js-game-prototype/"
);
const tripMindRU = new Project(
    "Trip & Mind. <span>Гармония</span> ваших путешествий.",
    ["img/trip-main.jpg", "img/trip-main@2x.jpg"],
    "Лендинг для авторских туров. Проект, в котором функциональность кода встречается с атмосферой дальних странствий.",
    ["img/trip-preview.jpg", "img/trip-preview@2x.jpg"],
    ["Путешествие", "Вдохновение", "Горизонт"],
    "https://floarescou.github.io/trip-mind/"
);
// массив с названиями объектов, хранящих данные проектов
const projectsArray = [mainRU, macaroonsRU, tictactoeRU, tripMindRU];
// ..  ===== изменение интерфейса по клику на пункт меню (выбор визитки, соответствующей пункту меню) + меню в бургере

// бургер меню
// обертка логотипа
const logoWrapper = document.getElementsByClassName("logo")[0];
// текстовый логотип (имя, фамилия)
const logo = document.getElementsByClassName("logo__name")[0];
const burgerMenu = document.getElementsByClassName('burger-menu')[0];
// иконка закрытия бургер меню
const burgerClose = document.getElementsByClassName('burger-menu__close')[0];

// изменение поведения логотипа на определенной ширине экрана
// статическое
function addLogoAnim() {
    if (window.innerWidth <= 570) {
        logo.classList.add("animationText");
        burgerMenu.style.display = "block";
        logoWrapper.style.pointerEvents = "auto";
        burgerMenuActions();
    } else {
        logo.classList.remove("animationText");
        burgerMenu.style.display = "none";
        logoWrapper.style.pointerEvents = "none";
    }
}
addLogoAnim();

// динамическое
window.addEventListener('resize', () => {
    addLogoAnim();
});

// функция появления/скрытия бургер-меню
function burgerMenuActions() {
    logo.addEventListener('click', () => {
        logo.style.animation = "none";
        burgerMenu.classList.add('menu-show');
        document.body.style.overflow = "hidden";
    });

    burgerClose.addEventListener('click', () => {
        burgerMenu.classList.remove('menu-show');
        document.body.style.overflow = "auto";
    });
}
// .. изменение поведения логотипа на определенной ширине экрана
// ..  =====   бургер меню     =====

// при клике на пункт меню в бургере закрывается бургер меню
function hideBurgerMenu() {
    burgerMenu.classList.remove('menu-show');
    document.body.style.overflow = "auto";
}

// закрытие бургер меню при клике на пункты подменю "Проекты"
for (let i = 0; i < submenuProjectsLinks.length; i++) {
    submenuProjectsLinks[i].addEventListener("click", () => {
        hideBurgerMenu();
    })
}
// .. бургер меню