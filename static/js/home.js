// ================= SEARCH =================

function searchStore() {

    const input = document.getElementById("searchInput");

    if (!input) return;

    const value = input.value.trim();

    if (value === "") {

        alert("Please search for a product or store.");

        return;
    }

    alert("Searching for: " + value);
}


// ================= CART =================

const cart = document.querySelector(".cart");

if (cart) {

    cart.addEventListener("click", function () {

        window.location.href = "cart.html";

    });
}
// ================= FAVORITE =================
const favorites = document.querySelectorAll(".favorite");
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

const categories =
    document.querySelectorAll(".category");

categories.forEach(function(category) {

    category.addEventListener("click", function() {

        const name = category.querySelector("span").innerText;

        alert("Opening " + name + " category");
    });
});
// ================= CUSTOMER ACCOUNT =================

function updateCustomerAccountUI() {

    const accountArea =
        document.getElementById("accountArea");

    if (!accountArea) return;

    const isLoggedIn =
        localStorage.getItem("isLoggedIn") === "true";

    const customerName =
        localStorage.getItem("customerName") || "Customer";

    if (!isLoggedIn) {

        accountArea.innerHTML = `
            <button
                class="login-btn"
                type="button"
                onclick="openLoginModal()"
            >
                Login / Sign Up
            </button>
        `;

        return;
    }

    accountArea.innerHTML = `
        <div class="customer-account">

            <button
                class="customer-btn"
                type="button"
                onclick="toggleCustomerMenu()"
            >
                <i class="fa-regular fa-user"></i>
                ${escapeHtml(customerName)}
                <i class="fa-solid fa-chevron-down"></i>
            </button>

            <div
                id="customerDropdown"
                class="customer-dropdown"
            >
                <a href="profile.html">
                    <i class="fa-regular fa-user"></i>
                    My Profile
                </a>

                <a href="my-orders.html">
                    <i class="fa-solid fa-box"></i>
                    My Orders
                </a>

                <a href="addresses.html">
                    <i class="fa-solid fa-location-dot"></i>
                    My Addresses
                </a>

                <button
                    type="button"
                    onclick="logoutCustomer()"
                >
                    <i class="fa-solid fa-right-from-bracket"></i>
                    Logout
                </button>
            </div>

        </div>
    `;
}

function escapeHtml(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function toggleCustomerMenu() {

    const dropdown =
        document.getElementById("customerDropdown");

    if (!dropdown) return;

    dropdown.classList.toggle("show");
}

function logoutCustomer() {

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("customerName");
    localStorage.removeItem("customerEmail");
    localStorage.removeItem("accountType");

    window.location.href = "home.html";
}

document.addEventListener("click", function (event) {

    const accountArea =
        document.getElementById("accountArea");

    const dropdown =
        document.getElementById("customerDropdown");

    if (
        dropdown &&
        accountArea &&
        !accountArea.contains(event.target)
    ) {
        dropdown.classList.remove("show");
    }
});

document.addEventListener("DOMContentLoaded", function () {

    updateCustomerAccountUI();

});

// ================= OPEN STORE =================
function openStore(storeId) {
    window.location.href = "store-details.html?store=" + storeId;
}