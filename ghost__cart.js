function CartZERO() {
    var cartCount = document.querySelector('.minicart-items');
    if (parseInt(cartCount.innerText) <= 0) {
        cartCount.parentElement.classList.add('hide');
    }
}

(function(){
    CartZERO();
})();
