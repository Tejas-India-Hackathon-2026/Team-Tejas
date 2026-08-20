/* =====================================================
   NEARBY DUKAN - CART SYSTEM
===================================================== */


/* =====================================================
   CART STORAGE KEY
===================================================== */

const CART_STORAGE_KEY = "nearByDukanCart";


/* =====================================================
   GET CART FROM LOCAL STORAGE
===================================================== */

let cart = JSON.parse(
    localStorage.getItem(CART_STORAGE_KEY)
) || [];


/* =====================================================
   SAVE CART
===================================================== */

function saveCart() {

    localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(cart)
    );

}


/* =====================================================
   DISPLAY CART
===================================================== */

function displayCart() {

    const cartItems =
        document.getElementById("cartItems");

    const emptyCart =
        document.getElementById("emptyCart");


    if (!cartItems) {
        return;
    }


    /* =================================================
       EMPTY CART
    ================================================= */

    if (cart.length === 0) {

        cartItems.innerHTML = "";


        if (emptyCart) {

            emptyCart.style.display = "block";

        }


        updateSummary();

        updateCartCount();

        return;
    }


    /* =================================================
       CART HAS PRODUCTS
    ================================================= */

    if (emptyCart) {

        emptyCart.style.display = "none";

    }


    /* =================================================
       CREATE CART ITEMS
    ================================================= */

    cartItems.innerHTML = cart.map(
        (item, index) => {


            /* PRODUCT PRICE */

            const price =
                Number(item.price) || 0;


            /* PRODUCT QUANTITY */

            const quantity =
                Number(item.quantity) || 1;


            /* TOTAL PRICE */

            const itemTotal =
                price * quantity;


            /* =================================================
               PRODUCT IMAGE / EMOJI
            ================================================= */

            const productImage =
                item.image ||
                item.emoji ||
                "🛒";


            return `

                <div class="cart-item">


                    <!-- =====================================
                         PRODUCT IMAGE
                    ====================================== -->

                    <div class="cart-item-image">

                        ${
                            item.image
                            ? `<img
                                src="${item.image}"
                                alt="${item.name || "Product"}"
                                onerror="this.style.display='none'; this.parentElement.innerHTML='🛒';"
                            >`
                            : productImage
                        }

                    </div>



                    <!-- =====================================
                         PRODUCT INFORMATION
                    ====================================== -->

                    <div class="cart-item-info">


                        <h3>

                            ${item.name || "Product"}

                        </h3>


                        ${
                            item.size
                            ? `
                                <p>
                                    ${item.size}
                                </p>
                            `
                            : ""
                        }


                        <p class="store-name">

                            ${
                                item.storeName ||
                                "Local Store"
                            }

                        </p>



                        <!-- =================================
                             QUANTITY
                        ================================== -->

                        <div class="quantity-box">


                            <button
                                type="button"
                                onclick="decreaseQuantity(${index})"
                                aria-label="Decrease quantity"
                            >
                                −
                            </button>


                            <span class="quantity">

                                ${quantity}

                            </span>


                            <button
                                type="button"
                                onclick="increaseQuantity(${index})"
                                aria-label="Increase quantity"
                            >
                                +
                            </button>


                        </div>


                    </div>



                    <!-- =====================================
                         PRICE
                    ====================================== -->

                    <div class="cart-item-price">


                        <strong>

                            ₹${itemTotal}

                        </strong>


                        <button
                            type="button"
                            class="remove-btn"
                            onclick="removeItem(${index})"
                        >

                            Remove

                        </button>


                    </div>


                </div>

            `;

        }
    ).join("");


    /* UPDATE SUMMARY */

    updateSummary();


    /* UPDATE NAVBAR COUNT */

    updateCartCount();

}


/* =====================================================
   INCREASE QUANTITY
===================================================== */

function increaseQuantity(index) {

    /* Check item */

    if (!cart[index]) {
        return;
    }


    /* Current quantity */

    const currentQuantity =
        Number(cart[index].quantity) || 1;


    /* Increase */

    cart[index].quantity =
        currentQuantity + 1;


    /* Save */

    saveCart();


    /* Refresh */

    displayCart();

}


/* =====================================================
   DECREASE QUANTITY
===================================================== */

function decreaseQuantity(index) {

    /* Check item */

    if (!cart[index]) {
        return;
    }


    /* Current quantity */

    const currentQuantity =
        Number(cart[index].quantity) || 1;


    /* =================================================
       IF QUANTITY > 1
    ================================================= */

    if (currentQuantity > 1) {

        cart[index].quantity =
            currentQuantity - 1;

    }


    /* =================================================
       IF QUANTITY = 1
       REMOVE PRODUCT
    ================================================= */

    else {

        cart.splice(index, 1);

    }


    /* Save */

    saveCart();


    /* Refresh */

    displayCart();

}


/* =====================================================
   REMOVE ITEM
===================================================== */

function removeItem(index) {

    /* Check item */

    if (!cart[index]) {
        return;
    }


    /* Product name */

    const productName =
        cart[index].name || "this product";


    /* Confirmation */

    const confirmRemove =
        confirm(
            `Remove ${productName} from your cart?`
        );


    if (!confirmRemove) {
        return;
    }


    /* Remove */

    cart.splice(index, 1);


    /* Save */

    saveCart();


    /* Refresh */

    displayCart();

}


/* =====================================================
   CLEAR CART
===================================================== */

function clearCart() {

    /* Nothing to clear */

    if (cart.length === 0) {

        return;

    }


    /* Confirmation */

    const confirmClear =
        confirm(
            "Are you sure you want to clear your cart?"
        );


    if (!confirmClear) {

        return;

    }


    /* Clear */

    cart = [];


    /* Save */

    saveCart();


    /* Refresh */

    displayCart();


    updateCartCount();

}


/* =====================================================
   UPDATE ORDER SUMMARY
===================================================== */

function updateSummary() {

    const summaryItems =
        document.getElementById("summaryItems");


    const subtotalElement =
        document.getElementById("subtotal");


    const deliveryElement =
        document.getElementById("delivery");


    const totalElement =
        document.getElementById("total");


    /* =================================================
       VARIABLES
    ================================================= */

    let totalItems = 0;

    let subtotal = 0;


    /* =================================================
       CALCULATE CART
    ================================================= */

    cart.forEach(item => {


        const price =
            Number(item.price) || 0;


        const quantity =
            Number(item.quantity) || 0;


        totalItems += quantity;


        subtotal +=
            price * quantity;

    });


    /* =================================================
       DELIVERY CHARGE
       
       ₹499 OR ABOVE = FREE
       BELOW ₹499 = ₹40
    ================================================= */

    let delivery = 0;


    if (
        subtotal > 0 &&
        subtotal < 499
    ) {

        delivery = 40;

    }


    /* =================================================
       TOTAL
    ================================================= */

    const total =
        subtotal + delivery;


    /* =================================================
       DISPLAY ITEMS
    ================================================= */

    if (summaryItems) {

        summaryItems.textContent =
            totalItems;

    }


    /* =================================================
       DISPLAY SUBTOTAL
    ================================================= */

    if (subtotalElement) {

        subtotalElement.textContent =
            "₹" + subtotal;

    }


    /* =================================================
       DISPLAY DELIVERY
    ================================================= */

    if (deliveryElement) {

        if (delivery === 0) {

            deliveryElement.textContent =
                subtotal > 0
                    ? "FREE"
                    : "₹0";

        }

        else {

            deliveryElement.textContent =
                "₹" + delivery;

        }

    }


    /* =================================================
       DISPLAY TOTAL
    ================================================= */

    if (totalElement) {

        totalElement.textContent =
            "₹" + total;

    }


    /* UPDATE CART COUNT */

    updateCartCount();

}


/* =====================================================
   UPDATE CART COUNT
===================================================== */

function updateCartCount() {

    const cartCount =
        document.getElementById("cartCount");


    if (!cartCount) {

        return;

    }


    /* Calculate total quantity */

    const totalItems =
        cart.reduce(
            (total, item) => {

                return total +
                    (Number(item.quantity) || 0);

            },

            0
        );


    /* Display */

    cartCount.textContent =
        totalItems;

}


/* =====================================================
   PROCEED TO CHECKOUT
===================================================== */

function checkout() {


    /* =================================================
       CHECK EMPTY CART
    ================================================= */

    if (cart.length === 0) {

        alert(
            "Your cart is empty!"
        );

        return;

    }


    /* =================================================
       SAVE LATEST CART
       (Safety check before checkout)
    ================================================= */

    saveCart();


    /* =================================================
       OPEN CHECKOUT PAGE
    ================================================= */

    window.location.href =
        "checkout.html";

}


/* =====================================================
   INITIAL LOAD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {


        /* =================================================
           LOAD LATEST CART
        ================================================= */

        cart = JSON.parse(
            localStorage.getItem(
                CART_STORAGE_KEY
            )
        ) || [];


        /* =================================================
           DISPLAY CART
        ================================================= */

        displayCart();


        /* =================================================
           UPDATE CART COUNT
        ================================================= */

        updateCartCount();

    }
);