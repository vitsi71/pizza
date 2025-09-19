new WOW({animateClass: 'animate__animated',}).init();

$('.open-popup-link').magnificPopup({
    type: 'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});

$('.product-image').magnificPopup({
    type: 'image',
});

// Меняем код JS на jQuery
// document.getElementsByTagName('h1')[0].innerHTML = 'Самая крутая пицца ждет <span> только в нашем ресторане </span>';
$('h1').html('Самая крутая пицца ждет <span> только в нашем ресторане </span>');

// document.getElementById('products-title').style.color = '#000 ';
$('#products-title').css('color', '#000');

// в переменную помещаем найленную по классу коллекцию элементов
// let buttonElements = document.getElementsByClassName('btn');


// let button_elements = document.querySelectorAll('.btn');
// button_elements.forEach((item) => {
//         if (item.innerText === 'Оформить заказ' || item.id === 'no-touch') {
//             return; // прерываем цикл и не меняем стиль для кнопки с таким текстом
//         }
//         item.style.background = 'transparent';// прозрачный
//         item.style.border = '1px solid rgb(255,175,24)';// обводка
//         item.style.color = 'rgb(255,175,24)';// цвет текста
//     }
// )

$('.btn:not(#no-touch)').css({
    background: 'transparent',// прозрачный
    border: '1px solid rgb(255,175,24)',// обводка
    color: 'rgb(255,175,24)'// цвет текста
})


//поиск элемента по id, замена свойства placeholder
// document.getElementById('product-input').placeholder = 'Имя';
let productInput = $('#product-input');
productInput.attr('placeholder', 'Имя');

//поиск элемента по id, замена свойства placeholder через установку атрибута
// document.getElementById('product-input').setAttribute('placeholder', 'Ваше Имя!');


//поиск по селектору и установка актуального значения в виде текста из функции
// document.querySelector('.right span').innerText = (new Date()).getFullYear();
$('.right span').text((new Date()).getFullYear());

// let products = document.getElementsByClassName('product');
let products = $('.product');
for (let i = 0; i < products.length; i++) {
    //для каждого четного элемента
    if (i % 2 === 1) {
        //применяем ко 2 дочернему элементу в  элементе колекции цикла добавление "*" к существующему тексту
        // products[i].children[1].innerText += '*';
        let element = products.eq(i).children().eq(1);
        element.text(element.text() + '*');

    }
}


// document.getElementById('choose-pizza').onclick = function () {
//     document.getElementsByClassName('products')[0].scrollIntoView({behavior: "smooth"});
// }
$('#choose-pizza').click(function () {
    $('.products')[0].scrollIntoView({behavior: "smooth"});
});

// let productInput = document.getElementById('product-input');

// let addToCardButtons = document.getElementsByClassName('btn-add-to-cart');

// for (let i = 0; i < addToCardButtons.length; i++) {
//     addToCardButtons[i].onclick = function (e) {
//         productInput.value = e.target.parentElement.previousElementSibling.previousElementSibling.innerText;
//         //console.log(e.target.parentElement.previousElementSibling.previousElementSibling.innerText);
//         document.getElementsByClassName('order')[0].scrollIntoView({behavior: "smooth"});
//     }
// }

$(".btn-add-to-cart").click((e) => {
    // productInput.value = e.target.parentElement.previousElementSibling.previousElementSibling.innerText;
    productInput.val($(e.target).parents('.product').find('.product-title').text());
    $('.order')[0].scrollIntoView({behavior: "smooth"});

})

// let phoneInput = document.getElementById('phone-input');
let phoneInput = $('#phone-input');

phoneInput.inputmask({"mask": "+7 (999) 999-9999"});//маска для телефона из пакета inputmask

// document.getElementById('create-order').onclick = function () {
$('#create-order').click(function () {
    // let addressInput = document.getElementById('address-input');
    let addressInput = $('#address-input');

    // if (!productInput.value) {
    if (!productInput.val()) {
        alert('Заполните пиццу');
        return;
    }
    // if (!addressInput.value) {
    if (!addressInput.val()) {
        alert('Заполните адрес');
        return;
    }
    // if (!phoneInput.value) {
    if (!phoneInput.val()) {
        alert('Заполните телефон');
        return;
    }
    alert('Спасибо за заказ');
    // productInput.value = null;
    productInput.val(null);
    // addressInput.value = null;
    addressInput.val(null);
    // phoneInput.value = null;
    phoneInput.val(null);
});