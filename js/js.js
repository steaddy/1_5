// Отображение при изменения ширины окна вручную
window.addEventListener(`resize`, function() {
    hideServiceButtons();
});


// Событие на кнопку "Показать всё"

let showAll = document.querySelector(".read-more__link-show");
showAll.addEventListener('click', function (e) {
    e.preventDefault();
    hideServiceButtons(true);
    switchReadMoreButtons();
})


// Событие на кнопку "Скрыть"

let hide = document.querySelector(".read-more__link-hide");
hide.addEventListener('click', function (e) {
    e.preventDefault();
    hideServiceButtons();
    switchReadMoreButtons();
})


// Меняет видимость кнопок "Показать всё" и "Скрыть"

let switchReadMoreButtons = function () {
    document.querySelector(".read-more__link-show").classList.toggle('invisible');
    document.querySelector(".read-more__link-hide").classList.toggle('invisible');
}


// Задает количество отображаемых сервисных кнопок

let hideServiceButtons = function(showAll) {
    let mainService = document.querySelector('.main-service');
    let elements = mainService.getElementsByTagName('button');
    let visible = 0;
    if(window.innerWidth < 1024) {
        visible = 6;
    } else {
        visible = 8;
    }
    if(showAll) {
        visible = elements.length;
    }
    for(let i = 0; i < elements.length; i++) {
        elements[i].classList.remove('invisible');
        if(i >= visible) {
            elements[i].classList.add('invisible');
        }
    }
};

// Пойдет в функцию инициализации позже
hideServiceButtons();