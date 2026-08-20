document.addEventListener("DOMContentLoaded", function () {

    loadCart();

    setupDeliveryOption();

});


/* =========================
   LOAD CART
========================= */

function loadCart() {

    const cart = JSON.parse(
    localStorage.getItem("nearByDukanCart")
      ) || [];

    const orderItems = document.getElementById("order-items");

    const subtotalElement = document.getElementById("subtotal");
    const deliveryElement = document.getElementById("delivery-charge");
    const totalElement = document.getElementById("total");

    orderItems.innerHTML = "";

    if (cart.length === 0) {

        orderItems.innerHTML = `
            <p style="color:#777; padding:10px 0;">
                Your cart is empty.
            </p>
        `;

        subtotalElement.textContent = "₹0";
        deliveryElement.textContent = "₹0";
        totalElement.textContent = "₹0";

        return;
    }


    let subtotal = 0;


    cart.forEach(function (item) {

        const quantity = Number(item.quantity) || 1;
        const price = Number(item.price) || 0;

        const itemTotal = price * quantity;

        subtotal += itemTotal;


        const itemHTML = `
            <div class="cart-item">

                <div class="cart-item-info">

                    <div class="cart-item-name">
                        ${item.name || "Product"}
                    </div>

                    <div class="cart-item-quantity">
                        Qty: ${quantity}
                    </div>

                </div>

                <strong>
                    ₹${itemTotal}
                </strong>

            </div>
        `;

        orderItems.insertAdjacentHTML(
            "beforeend",
            itemHTML
        );

    });


    const deliveryCharge = subtotal >= 499 ? 0 : 40;

    const total = subtotal + deliveryCharge;


    subtotalElement.textContent =
        `₹${subtotal}`;

    deliveryElement.textContent =
        `₹${deliveryCharge}`;

    totalElement.textContent =
        `₹${total}`;

}


/* =========================
   DELIVERY OPTION
========================= */

function setupDeliveryOption() {

    const deliveryOptions =
        document.querySelectorAll(
            'input[name="delivery"]'
        );


    deliveryOptions.forEach(function (option) {

        option.addEventListener(
            "change",
            function () {

                const addressInputs = [
                    "house",
                    "street",
                    "city",
                    "district",
                    "state",
                    "pincode"
                ];


                if (this.value === "pickup") {

                    addressInputs.forEach(function (id) {

                        document.getElementById(id).disabled = true;

                    });

                } else {

                    addressInputs.forEach(function (id) {

                        document.getElementById(id).disabled = false;

                    });

                }

            }
        );

    });

}


/* =========================
   PLACE ORDER
========================= */

function placeOrder() {

    const name =
        document.getElementById("name").value.trim();

    const mobile =
        document.getElementById("mobile").value.trim();


    const delivery =
        document.querySelector(
            'input[name="delivery"]:checked'
        ).value;


    const payment =
        document.querySelector(
            'input[name="payment"]:checked'
        ).value;


    if (!name) {

        alert("Please enter your full name.");

        return;
    }


    if (!/^[0-9]{10}$/.test(mobile)) {

        alert("Please enter a valid 10-digit mobile number.");

        return;
    }


    /* Address validation */

    if (delivery === "delivery") {

        const requiredAddressFields = [
            "house",
            "street",
            "city",
            "district",
            "state",
            "pincode"
        ];


        for (const id of requiredAddressFields) {

            const value =
                document.getElementById(id).value.trim();


            if (!value) {

                alert(
                    "Please complete your delivery address."
                );

                document.getElementById(id).focus();

                return;
            }

        }


        const pincode =
            document.getElementById("pincode").value.trim();


        if (!/^[0-9]{6}$/.test(pincode)) {

            alert("Please enter a valid 6-digit pincode.");

            return;
        }

    }


    const cart =
    JSON.parse(
        localStorage.getItem("nearByDukanCart")
    ) || [];


    if (cart.length === 0) {

        alert("Your cart is empty.");

        return;
    }


    /* Create order */

    const order = {

        orderId:
            "ORD" + Date.now(),

        customer: {

            name: name,

            mobile: mobile

        },

        deliveryOption: delivery,

        address: {

            house:
                document.getElementById("house").value,

            street:
                document.getElementById("street").value,

            city:
                document.getElementById("city").value,

            district:
                document.getElementById("district").value,

            state:
                document.getElementById("state").value,

            pincode:
                document.getElementById("pincode").value,

            landmark:
                document.getElementById("landmark").value

        },

        paymentMethod: payment,

        products: cart,

        orderDate: new Date().toISOString()

    };


    localStorage.setItem(
        "latestOrder",
        JSON.stringify(order)
    );


    /*
       Remove cart after successful order
    */

    localStorage.removeItem("nearByDukanCart");
    /*
       Go to order confirmation page
    */

    window.location.href = "order-confirmation.html";

}