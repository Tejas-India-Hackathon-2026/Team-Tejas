// ================= STORE SEARCH =================
function searchStores() {
    const searchInput = document.getElementById("storeSearch");
    const searchValue =searchInput.value.toLowerCase().trim();
    const stores =document.querySelectorAll(".store-item");
    let found = false;
    stores.forEach(function(store) {
        const storeName =store.dataset.name.toLowerCase();
        if (storeName.includes(searchValue) || searchValue === "") {
            store.style.display = "block";
            found = true;
        } else {
            store.style.display = "none";
        }
    });
    if (!found) {
        alert( "No store found for: " + searchValue);
    }
}
// ================= ENTER KEY SEARCH =================
document.getElementById("storeSearch").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            searchStores();
        }
    });
// ================= FAVORITE =================
const hearts =document.querySelectorAll(".heart-btn");
hearts.forEach(function(heart) {
    heart.addEventListener("click", function() {
        if (heart.innerText === "♡") {
            heart.innerText = "♥";
            heart.style.color = "#ef4444";
        } else {
            heart.innerText = "♡";
            heart.style.color = "#111";
        }
    });
});
// ================= OPEN STORE =================
function openStore(storeId) {
    window.location.href = "store-details.html?store=" + storeId;
}
// ================= CLEAR FILTERS =================
function clearFilters() {
    const inputs = document.querySelectorAll(".filter-sidebar input");
    inputs.forEach(function(input) {
        input.checked = false;
    });
}