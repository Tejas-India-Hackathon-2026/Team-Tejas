// ========================================
// CATEGORY SEARCH
// ========================================

function searchCategories() {

    const input =document.getElementById("categorySearch");

    const searchValue =input.value.toLowerCase().trim();

    const cards =document.querySelectorAll(".category-card");

    const noResult =document.getElementById("noResult");
    let found = 0;
    cards.forEach(function(card) {
        const category =
            card.dataset.category.toLowerCase();
        if (
            category.includes(searchValue) || searchValue === ""
        ) {
            card.style.display = "block";
            found++;
        } else {
            card.style.display = "none";
        }
    });
    if (found === 0) {
        noResult.style.display = "block";
    } else {
        noResult.style.display = "none";
    }
}
// Search when pressing Enter
document.getElementById("categorySearch").addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            searchCategories();
        }
    });
// ========================================
// OPEN CATEGORY
// ========================================
function openCategory(categoryName) {
    /*
       Later you can replace this with:

       window.location.href =
       "products.html?category=" +
       encodeURIComponent(categoryName);
    */
    alert("Opening " + categoryName + " category");
}