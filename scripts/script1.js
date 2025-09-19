// document.getElementById('burger').onclick = function () {
//     document.getElementById('menu').classList.add('open');
//  }
//   document.querySelectorAll('#menu *').forEach((item) => {
//       item.onclick = () => {
//           document.getElementById('menu').classList.remove('open');
//  }}

document.getElementsByTagName('h1')[0].innerHTML = 'Самая крутая пицца ждет <span> только в нашем ресторане </span>';
document.getElementById('products-title').style.color = '#000 ';
// в переменную помещаем найленную по классу коллекцию элементов
let buttonElements = document.getElementsByClassName('btn');

// //перебераем элементы в цикле и меняем свойства
//  for (let i=0; i<buttonElements.length;i++) {
//      //условие по содержанию текста или Id
//    if (buttonElements[i].innerText === 'Оформить заказ' || buttonElements[i].id==='no-touch' ){
//        continue; // прерываем цикл и не меняем стиль для кнопки с таким текстом
//    }
//      buttonElements[i].style.background = 'transparent' ;// прозрачный
//      buttonElements[i].style.border = '1px solid rgb(255,175,24)' ;// обводка
//      buttonElements[i].style.color = 'rgb(255,175,24)' ;// цвет текста
//  }

// через forEach
// buttonElements.forEach - нет такого метода так как это HTML коллекция
let button_elements = document.querySelectorAll('.btn');
button_elements.forEach((item) => {
        if (item.innerText === 'Оформить заказ' || item.id === 'no-touch') {
            return; // прерываем цикл и не меняем стиль для кнопки с таким текстом
        }
        item.style.background = 'transparent';// прозрачный
        item.style.border = '1px solid rgb(255,175,24)';// обводка
        item.style.color = 'rgb(255,175,24)';// цвет текста
    }
)


//поиск элемента по id, замена свойства placeholder
document.getElementById('name-input').placeholder = 'Имя';
//поиск элемента по id, замена свойства placeholder через установку атрибута
document.getElementById('name-input').setAttribute('placeholder', 'Ваше Имя!');

//поиск по селектору и установка актуального значения в виде текста из функции
document.querySelector('.right span').innerText = (new Date()).getFullYear();

let products = document.getElementsByClassName('product');
for (let i = 0; i < products.length; i++) {
    //для каждого четного элемента
    if (i % 2 === 1) {
        //применяем ко 2 дочернему элементу в  элементе колекции цикла добавление "*" к существующему тексту
        products[i].children[1].innerText += '*';
    }
}