/* =====================================================
   NEARBY DUKAN - ORDER CONFIRMATION
===================================================== */


const ORDER_STORAGE_KEY = "latestOrder";


/* =====================================================
   PAGE LOAD
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadOrder();

    }
);


/* =====================================================
   LOAD ORDER
===================================================== */

function loadOrder() {

    const order =
        JSON.parse(
            localStorage.getItem(
                ORDER_STORAGE_KEY
            )
        );


    /* =================================================
       CHECK ORDER
    ================================================= */

    if (!order) {

        showNoOrder();

        return;

    }


    /* =================================================
       ORDER ID
    ================================================= */

    const orderId =
        document.getElementById("orderId");


    if (orderId) {

        orderId.textContent =
            order.orderId || "--";

    }


    /* =================================================
       CUSTOMER DETAILS
    ================================================= */

    const customerName =
        document.getElementById("customerName");

    const customerMobile =
        document.getElementById("customerMobile");


    if (customerName) {

        customerName.textContent =
            order.customer?.name || "--";

    }


    if (customerMobile) {

        customerMobile.textContent =
            order.customer?.mobile || "--";

    }


    /* =================================================
       DELIVERY OPTION
    ================================================= */

    const deliveryOption =
        document.getElementById(
            "deliveryOption"
        );


    if (deliveryOption) {

        if (
            order.deliveryOption ===
            "delivery"
        ) {

            deliveryOption.textContent =
                "Home Delivery";

        }

        else {

            deliveryOption.textContent =
                "Store Pickup";

        }

    }


    /* =================================================
       ADDRESS
    ================================================= */

    const addressSection =
        document.getElementById(
            "addressSection"
        );

    const addressElement =
        document.getElementById(
            "address"
        );


    if (
        order.deliveryOption ===
        "pickup"
    ) {

        if (addressSection) {

            addressSection.style.display =
                "none";

        }

    }

    else {

        const address =
            order.address || {};


        const addressParts = [

            address.house,

            address.street,

            address.city,

            address.district,

            address.state,

            address.pincode

        ];


        if (address.landmark) {

            addressParts.push(
                "Landmark: " +
                address.landmark
            );

        }


        if (addressElement) {

            addressElement.textContent =
                addressParts
                    .filter(Boolean)
                    .join(", ");

        }

    }


    /* =================================================
       PAYMENT METHOD
    ================================================= */

    const paymentMethod =
        document.getElementById(
            "paymentMethod"
        );


    if (paymentMethod) {

        if (
            order.paymentMethod ===
            "cod"
        ) {

            paymentMethod.textContent =
                "Cash on Delivery";

        }

        else if (
            order.paymentMethod ===
            "upi"
        ) {

            paymentMethod.textContent =
                "UPI";

        }

        else {

            paymentMethod.textContent =
                order.paymentMethod || "--";

        }

    }


    /* =================================================
       PRODUCTS
    ================================================= */

    displayProducts(
        order.products || []
    );


    /* =================================================
       PRICE SUMMARY
    ================================================= */

    displayPriceSummary(order);

}


/* =====================================================
   DISPLAY PRODUCTS
===================================================== */

function displayProducts(products) {

    const container =
        document.getElementById(
            "orderedProducts"
        );


    if (!container) {

        return;

    }


    container.innerHTML = "";


    /* =================================================
       NO PRODUCTS
    ================================================= */

    if (
        !products ||
        products.length === 0
    ) {

        container.innerHTML = `
            <p>
                No products found.
            </p>
        `;

        return;

    }


    /* =================================================
       PRODUCTS
    ================================================= */

    products.forEach(function (item) {

        const quantity =
            Number(item.quantity) || 1;

        const price =
            Number(item.price) || 0;

        const itemTotal =
            price * quantity;


        const productHTML = `

            <div class="ordered-product">

                <div class="product-info">

                    <h3>
                        ${item.name || "Product"}
                    </h3>

                    <p>
                        Quantity: ${quantity}
                    </p>

                    ${
                        item.storeName
                        ? `
                            <p>
                                Store:
                                ${item.storeName}
                            </p>
                        `
                        : ""
                    }

                </div>


                <strong>
                    ₹${itemTotal}
                </strong>

            </div>

        `;


        container.insertAdjacentHTML(
            "beforeend",
            productHTML
        );

    });

}


/* =====================================================
   DISPLAY PRICE SUMMARY
===================================================== */

function displayPriceSummary(order) {

    const subtotalElement =
        document.getElementById(
            "subtotal"
        );

    const deliveryElement =
        document.getElementById(
            "deliveryCharge"
        );

    const totalElement =
        document.getElementById(
            "total"
        );


    /* =================================================
       USE SAVED VALUES
    ================================================= */

    let subtotal =
        Number(order.subtotal);


    let deliveryCharge =
        Number(order.deliveryCharge);


    let total =
        Number(order.total);


    /* =================================================
       FALLBACK CALCULATION
    ================================================= */

    if (isNaN(subtotal)) {

        subtotal = 0;


        (order.products || [])
            .forEach(function (item) {

                const price =
                    Number(item.price) || 0;

                const quantity =
                    Number(item.quantity) || 1;

                subtotal +=
                    price * quantity;

            });

    }


    if (isNaN(deliveryCharge)) {

        deliveryCharge =
            subtotal >= 499
                ? 0
                : 40;

    }


    if (isNaN(total)) {

        total =
            subtotal +
            deliveryCharge;

    }


    /* =================================================
       DISPLAY
    ================================================= */

    if (subtotalElement) {

        subtotalElement.textContent =
            `₹${subtotal}`;

    }


    if (deliveryElement) {

        deliveryElement.textContent =
            deliveryCharge === 0
                ? "FREE"
                : `₹${deliveryCharge}`;

    }


    if (totalElement) {

        totalElement.textContent =
            `₹${total}`;

    }

}


/* =====================================================
   NO ORDER
===================================================== */

function showNoOrder() {

    const container =
        document.querySelector(
            ".confirmation-container"
        );


    if (!container) {

        return;

    }


    container.innerHTML = `

        <section class="success-card">

            <div class="success-icon">
                !
            </div>

            <h1>
                No Order Found
            </h1>

            <p>
                We could not find your recent order.
            </p>

            <a
                href="stores.html"
                class="home-btn"
            >
                Browse Stores
            </a>

        </section>

    `;

}