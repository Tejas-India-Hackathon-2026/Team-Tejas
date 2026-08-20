/* =====================================================
   OPEN / CLOSE MODAL
===================================================== */

function openLoginModal() {

    const overlay =
        document.getElementById("authOverlay");

    overlay.classList.add("show");

    showLogin();

    document.body.style.overflow = "hidden";

}
function closeAuthModal() {
    const overlay = document.getElementById("authOverlay");
    overlay.classList.remove("show");
    document.body.style.overflow = "";
}
/* =====================================================
   SHOW LOGIN
===================================================== */
function hideAllAuthPages() {
    const pages = ["loginPage","accountSelectionPage","customerSignupPage","sellerSignupPage","forgotPasswordPage"];
    pages.forEach(function(id) {
        document.getElementById(id).classList.add("hidden");
    });
}
function showLogin() {
    hideAllAuthPages();
    document.getElementById("loginPage").classList.remove("hidden");
}
function showAccountSelection() {
    hideAllAuthPages();
    document.getElementById("accountSelectionPage").classList.remove("hidden");
}
function showCustomerSignup() {
    hideAllAuthPages();
    document.getElementById("customerSignupPage").classList.remove("hidden");
}
function showSellerSignup() {
    hideAllAuthPages();
    document.getElementById("sellerSignupPage").classList.remove("hidden");
}
function showForgotPassword() {
    hideAllAuthPages();
    document.getElementById("forgotPasswordPage").classList.remove("hidden");
}
/* =====================================================
   PASSWORD VISIBILITY
===================================================== */

function togglePassword(inputId, button) {

    const input =document.getElementById(inputId);

    const icon =button.querySelector("i");
    if (input.type === "password") {
        input.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        input.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}
/* =====================================================
   LOGIN
===================================================== */

// function loginUser(event) {
//     event.preventDefault();
//     const email =document.getElementById("loginEmail").value;
//     const password =document.getElementById("loginPassword").value;
//     const accountType =document.querySelector('input[name="loginType"]:checked').value;
//     /*
//        DEMO ONLY

//        Real login should be handled
//        by your backend.
//     */

//     alert( "Login request submitted!\n\n" +"Account: " +accountType +"\nEmail: " +email);
// }
// function loginUser(event) {
//     event.preventDefault();

//     const email = document.getElementById("loginEmail").value;
//     const password = document.getElementById("loginPassword").value;

//     const accountType = document.querySelector('input[name="loginType"]:checked').value;

//     if (!email || !password) {
//         alert("Please enter email and password.");
//         return;
//     }
//     if (accountType === "seller") {
//         window.location.href = "seller-dashboard.html";
//     } else {
//         window.location.href = "customer-dashboard.html";
//     }
// }
function loginUser(event) {
    event.preventDefault();

    const email =
        document.getElementById("loginEmail").value.trim().toLowerCase();

    const password =
        document.getElementById("loginPassword").value;

    const accountType =
        document.querySelector(
            'input[name="loginType"]:checked'
        ).value;

    if (!email || !password) {
        alert("Please enter email and password.");
        return;
    }

    /* ==============================
       SELLER LOGIN
    ============================== */

    if (accountType === "seller") {
        window.location.href = "sellerDashboard.html";
        return;
    }

    /* ==============================
       CUSTOMER LOGIN
    ============================== */

    const accounts =
        JSON.parse(
            localStorage.getItem("nearByDukanCustomerAccounts")
        ) || [];

    const customer =
        accounts.find(function (account) {
            return (
                account.email === email &&
                account.password === password
            );
        });

    /*
       Frontend demo fallback:
       If no saved customer account exists yet,
       allow login and derive a display name from
       the email until backend authentication exists.
    */

    const customerName =
        customer?.name ||
        localStorage.getItem("customerName") ||
        email.split("@")[0] ||
        "Customer";

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("customerEmail", email);
    localStorage.setItem("customerName", customerName);
    localStorage.setItem("accountType", "customer");

    window.location.href = "home.html";
}
/* =====================================================
   CUSTOMER ACCOUNT
===================================================== */
// function createCustomerAccount(event) {
//     event.preventDefault();
//     const password =document.getElementById("customerPassword").value;
//     const confirmPassword =document.getElementById("customerConfirmPassword").value;
//     if (password !== confirmPassword) {
//         alert(
//             "Passwords do not match!"
//         );
//         return;
//     }
//     alert("Customer account created successfully!");
//     showLogin();
// }
function createCustomerAccount(event) {
    event.preventDefault();

    const name =
        document.getElementById("customerName")?.value.trim() || "";

    const email =
        document.getElementById("customerEmail")?.value.trim().toLowerCase() || "";

    const mobile =
        document.getElementById("customerMobile")?.value.trim() || "";

    const password =
        document.getElementById("customerPassword").value;

    const confirmPassword =
        document.getElementById("customerConfirmPassword").value;

    const address =
        document.getElementById("customerAddress")?.value.trim() || "";

    const area =
        document.getElementById("customerArea")?.value.trim() || "";

    const city =
        document.getElementById("customerCity")?.value.trim() || "";

    const state =
        document.getElementById("customerState")?.value || "";

    const pin =
        document.getElementById("customerPin")?.value.trim() || "";

    /* ==============================
       PASSWORD CHECK
    ============================== */

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    /* ==============================
       SAVE CUSTOMER ACCOUNT
       Frontend demo storage only
    ============================== */

    const accounts =
        JSON.parse(
            localStorage.getItem("nearByDukanCustomerAccounts")
        ) || [];

    const existingAccount =
        accounts.find(function (account) {
            return account.email === email;
        });

    if (existingAccount) {
        alert("An account with this email already exists. Please login.");
        showLogin();
        return;
    }

    const customerAccount = {
        name: name,
        email: email,
        mobile: mobile,
        password: password,
        address: address,
        area: area,
        city: city,
        state: state,
        pin: pin
    };

    accounts.push(customerAccount);

    localStorage.setItem(
        "nearByDukanCustomerAccounts",
        JSON.stringify(accounts)
    );

    /* ==============================
       SAVE LOGIN STATUS
    ============================== */

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("customerName", name);
    localStorage.setItem("customerEmail", email);
    localStorage.setItem("accountType", "customer");

    alert("Customer account created successfully!");

    window.location.href = "home.html";
}
/* =====================================================
   SELLER ACCOUNT
===================================================== */
// function createSellerAccount(event) {
//     event.preventDefault();
//     const password =document.getElementById("sellerPassword").value;
//     const confirmPassword =document.getElementById("sellerConfirmPassword").value;
//     if (password !== confirmPassword) {
//         alert("Passwords do not match!");
//         return;
//     }
//     const businessName =document.getElementById("businessName").value;
//     alert("Seller account created successfully!\n\n" +"Business: " +businessName);
//     showLogin();
// }
function createSellerAccount(event) {

    event.preventDefault();

    const password =
        document.getElementById("sellerPassword").value;

    const confirmPassword =
        document.getElementById("sellerConfirmPassword").value;


    if (password !== confirmPassword) {

        alert("Passwords do not match!");

        return;
    }


    const businessName =
        document.getElementById("businessName").value.trim();


    alert(
        "Seller account created successfully!\n\n" +
        "Business: " +
        businessName
    );


    // Seller login status
    localStorage.setItem(
        "sellerLoggedIn",
        "true"
    );

    localStorage.setItem(
        "sellerBusinessName",
        businessName
    );


    // Open Seller Dashboard
    window.location.href =
        "seller-dashboard.html";
}
/* =====================================================
   SHOP PHOTO
===================================================== */
function showFileName(input) {
    const fileName =document.getElementById("fileName");
    if (input.files.length > 0) {
        fileName.innerText ="Selected: " +input.files[0].name;
    } else {
        fileName.innerText = "";
    }
}
/* =====================================================
   FORGOT PASSWORD
===================================================== */
function resetPassword(event) {
    event.preventDefault();
    const email =document.getElementById("forgotEmail").value;
    alert("If an account exists for " +email +", a password reset link will be sent.");
    showLogin();
}
/* =====================================================
   CLOSE WHEN CLICKING OUTSIDE
===================================================== */
document.addEventListener("click",function(event) {
        const overlay =document.getElementById("authOverlay");
        if (
            event.target === overlay
        ) {
            closeAuthModal();
        }
    }
);
/* =====================================================
   ESC KEY
===================================================== */
document.addEventListener(
    "keydown",
    function(event) {
        if (
            event.key === "Escape"
        ) {
            closeAuthModal();
        }
    }
);