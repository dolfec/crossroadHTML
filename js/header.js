const headerSearchDropdown = document.querySelector("#headerSearchDropdown");
const body = document.querySelector("body")
const headerCategoryBody = document.querySelector(".headerCatalog");
const hederTop = document.querySelector(".header-top")

headerSearchDropdown.addEventListener("click", function(){
    hederTop.classList.toggle("hidden")
    headerSearchDropdown.classList.toggle("active");
    // body.classList.toggle("openedModal");
    headerCategoryBody.classList.toggle("show");
    headerCategoryBody.style.top =  headerSearchDropdown.offsetTop + headerSearchDropdown.clientHeight + 26 + "px" ;
    
})


const headerCart = document.querySelector("#headerCart");
const headerCartBody = document.querySelector(".cart-modal");

headerCart.addEventListener("click", function() {
    headerCart.classList.toggle("active");
    headerCartBody.classList.toggle("show");
    
    headerCartBody.style.right =  body.clientWidth - headerCart.offsetLeft - headerCart.clientWidth + "px"; 
    headerCartBody.style.top =  headerCart.offsetTop + headerCart.clientHeight + 10  + "px" ;

})
