function toggleSidebar() {

    document
        .getElementById("sidebar")
        .classList.toggle("show");

}


function logoutSeller() {

    const confirmLogout =
        confirm("Do you want to logout?");

    if (confirmLogout) {

        window.location.href = "home.html";

    }

}


function updateStock(productName) {

    const newStock = prompt("Enter new stock for " + productName);

    if (newStock !== null && newStock !== "") {

        alert( productName +" stock updated to " + newStock); 
    }
}