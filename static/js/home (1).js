// ================= SEARCH =================

function searchStore() {
    const input =document.getElementById("searchInput");
    const value =
        input.value.trim();
    if (value === "") {
        alert("Please search for a product or store.");
        return;
    }

    alert("Searching for: " + value);
}
// ================= CART =================
const cart =document.querySelector(".cart");
cart.addEventListener("click", function () {
    alert("Your cart is currently empty.");

});
// ================= FAVORITE =================

const favorites =document.querySelectorAll(".favorite");
favorites.forEach(function(button) {
    button.addEventListener("click", function() {
        if (button.innerText === "♡") {
            button.innerText = "♥";
        } else {
            button.innerText = "♡";
        }
    });
});
// ================= CATEGORY CLICK =================
const categories =document.querySelectorAll(".category");
categories.forEach(function(category) {
    category.addEventListener("click", function() {
        const name =category.querySelector("span").innerText;
        alert("Opening " + name + " category");
    });
});
// ================= LOGIN =================
const loginButton =document.querySelector(".login-btn");
loginButton.addEventListener("click", function() {
    alert("Login / Sign Up page will open here.");
});