











document.getElementById('choose-pizza').onclick = function () {
    document.getElementsByClassName('products')[0].scrollIntoView({ behavior: "smooth" });
}

let productInput = document.getElementById('product-input');
let addToCardButtons = document.getElementsByClassName('btn-add-to-cart');

for (let i = 0; i < addToCardButtons.length; i++) {
addToCardButtons[i].onclick=function (e) {
    productInput.value=e.target.parentElement.previousElementSibling.previousElementSibling.innerText;
    //console.log(e.target.parentElement.previousElementSibling.previousElementSibling.innerText);
    document.getElementsByClassName('order')[0].scrollIntoView({ behavior: "smooth" });
}
}
document.getElementById('create-order').onclick=function () {
    let addressInput = document.getElementById('address-input');
    let phoneInput = document.getElementById('phone-input');

    if (!productInput.value) {
     alert('Заполните пиццу');
     return ;
    }
    if (!addressInput.value) {
     alert('Заполните адрес');
     return ;
    }
    if (!phoneInput.value) {
     alert('Заполните телефон');
     return ;
    }
   alert('Спасибо за заказ');
    productInput.value=null;
    addressInput.value=null;
    phoneInput.value=null;
}