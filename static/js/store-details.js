/* =====================================================
   NEARBY DUKAN - STORE DETAILS
===================================================== */


/* =====================================================
   STORE DATA
===================================================== */

const stores = {

    sharma: {
        name: "Sharma Kirana Store",
        rating: "4.5",
        distance: "0.2 km",
        time: "30–40 min",
        address: "Main Road, Near Bus Stand",
        description: "Your trusted local grocery and daily essentials store.",

        categories: {

            Grocery: [
                {
                    name: "Aashirvaad Atta",
                    size: "5 kg",
                    price: 285,
                    emoji: "🌾"
                },
                {
                    name: "Fortune Rice",
                    size: "5 kg",
                    price: 450,
                    emoji: "🍚"
                },
                {
                    name: "Toor Dal",
                    size: "1 kg",
                    price: 145,
                    emoji: "🫘"
                },
                {
                    name: "Fortune Sunflower Oil",
                    size: "1 L",
                    price: 125,
                    emoji: "🫗"
                },
                {
                    name: "Tata Salt",
                    size: "1 kg",
                    price: 28,
                    emoji: "🧂"
                },
                {
                    name: "Sugar",
                    size: "1 kg",
                    price: 48,
                    emoji: "🍚"
                }
            ],

            Snacks: [
                {
                    name: "Parle-G Biscuits",
                    size: "800 g",
                    price: 70,
                    emoji: "🍪"
                },
                {
                    name: "Lays Classic",
                    size: "50 g",
                    price: 20,
                    emoji: "🥔"
                },
                {
                    name: "Haldiram Namkeen",
                    size: "200 g",
                    price: 85,
                    emoji: "🥨"
                }
            ],

            Beverages: [
                {
                    name: "Coca Cola",
                    size: "750 ml",
                    price: 45,
                    emoji: "🥤"
                },
                {
                    name: "Tata Gluco Plus",
                    size: "750 ml",
                    price: 35,
                    emoji: "🧃"
                },
                {
                    name: "Bisleri Water",
                    size: "1 L",
                    price: 20,
                    emoji: "💧"
                }
            ],

            Household: [
                {
                    name: "Vim Dishwash",
                    size: "500 ml",
                    price: 115,
                    emoji: "🧽"
                },
                {
                    name: "Surf Excel",
                    size: "1 kg",
                    price: 165,
                    emoji: "🧺"
                }
            ]

        }
    },


    /* =================================================
       VERMA
    ================================================= */

    verma: {
        name: "Verma General Store",
        rating: "4.2",
        distance: "0.4 km",
        time: "25–35 min",
        address: "Station Road, Near Market",
        description: "Grocery, household and daily-use products at great prices.",

        categories: {

            Grocery: [
                {
                    name: "India Gate Basmati Rice",
                    size: "5 kg",
                    price: 520,
                    emoji: "🍚"
                },
                {
                    name: "Aashirvaad Atta",
                    size: "5 kg",
                    price: 290,
                    emoji: "🌾"
                },
                {
                    name: "Moong Dal",
                    size: "1 kg",
                    price: 130,
                    emoji: "🫘"
                },
                {
                    name: "Tata Salt",
                    size: "1 kg",
                    price: 28,
                    emoji: "🧂"
                }
            ],

            Household: [
                {
                    name: "Harpic Toilet Cleaner",
                    size: "500 ml",
                    price: 105,
                    emoji: "🧴"
                },
                {
                    name: "Surf Excel Matic",
                    size: "2 kg",
                    price: 320,
                    emoji: "🧺"
                },
                {
                    name: "Colin Glass Cleaner",
                    size: "500 ml",
                    price: 110,
                    emoji: "🪟"
                }
            ],

            Beverages: [
                {
                    name: "Pepsi",
                    size: "750 ml",
                    price: 45,
                    emoji: "🥤"
                },
                {
                    name: "Real Fruit Juice",
                    size: "1 L",
                    price: 120,
                    emoji: "🧃"
                }
            ]

        }
    },


    /* =================================================
       GUPTA
    ================================================= */

    gupta: {
        name: "Gupta Provision Store",
        rating: "4.6",
        distance: "0.6 km",
        time: "30–45 min",
        address: "Gandhi Chowk, Main Market",
        description: "Quality grocery, snacks and beverages from your nearby store.",

        categories: {

            Grocery: [
                {
                    name: "India Gate Rice",
                    size: "5 kg",
                    price: 495,
                    emoji: "🍚"
                },
                {
                    name: "Toor Dal",
                    size: "1 kg",
                    price: 140,
                    emoji: "🫘"
                },
                {
                    name: "Fortune Oil",
                    size: "1 L",
                    price: 128,
                    emoji: "🫗"
                },
                {
                    name: "Sugar",
                    size: "1 kg",
                    price: 47,
                    emoji: "🍚"
                },
                {
                    name: "Tata Salt",
                    size: "1 kg",
                    price: 28,
                    emoji: "🧂"
                },
                {
                    name: "Rajdhani Besan",
                    size: "500 g",
                    price: 65,
                    emoji: "🌾"
                }
            ],

            Snacks: [
                {
                    name: "Kurkure",
                    size: "90 g",
                    price: 20,
                    emoji: "🥨"
                },
                {
                    name: "Good Day Biscuits",
                    size: "150 g",
                    price: 35,
                    emoji: "🍪"
                }
            ],

            Beverages: [
                {
                    name: "Coca Cola",
                    size: "1.25 L",
                    price: 70,
                    emoji: "🥤"
                },
                {
                    name: "Maaza",
                    size: "600 ml",
                    price: 40,
                    emoji: "🧃"
                }
            ]

        }
    },


    /* =================================================
       PATEL
    ================================================= */

    patel: {
        name: "Patel Departmental Store",
        rating: "4.3",
        distance: "0.7 km",
        time: "35–50 min",
        address: "College Road, Near Chowk",
        description: "Grocery, personal care and household essentials.",

        categories: {

            Grocery: [
                {
                    name: "Aashirvaad Atta",
                    size: "5 kg",
                    price: 285,
                    emoji: "🌾"
                },
                {
                    name: "Fortune Rice",
                    size: "5 kg",
                    price: 445,
                    emoji: "🍚"
                },
                {
                    name: "Moong Dal",
                    size: "1 kg",
                    price: 135,
                    emoji: "🫘"
                }
            ],

            "Personal Care": [
                {
                    name: "Dove Soap",
                    size: "100 g",
                    price: 55,
                    emoji: "🧼"
                },
                {
                    name: "Clinic Plus Shampoo",
                    size: "340 ml",
                    price: 180,
                    emoji: "🧴"
                },
                {
                    name: "Colgate Toothpaste",
                    size: "200 g",
                    price: 115,
                    emoji: "🪥"
                },
                {
                    name: "Dettol Handwash",
                    size: "250 ml",
                    price: 85,
                    emoji: "🧴"
                }
            ]

        }
    },


    /* =================================================
       KUMAR
    ================================================= */

    kumar: {
        name: "Kumar Dairy & Sweets",
        rating: "4.7",
        distance: "0.9 km",
        time: "20–30 min",
        address: "Market Road, Near Temple",
        description: "Fresh dairy products, sweets, bakery and snacks.",

        categories: {

            Dairy: [
                {
                    name: "Amul Gold Full Cream Milk",
                    size: "500 ml",
                    price: 36,
                    emoji: "🥛"
                },
                {
                    name: "Amul Taaza Toned Milk",
                    size: "500 ml",
                    price: 30,
                    emoji: "🥛"
                },
                {
                    name: "Mother Dairy Cow Milk",
                    size: "500 ml",
                    price: 31,
                    emoji: "🥛"
                },
                {
                    name: "Amul Masti Pouch Curd",
                    size: "380 g",
                    price: 35,
                    emoji: "🥣"
                },
                {
                    name: "Amul Cow Milk",
                    size: "500 ml",
                    price: 31,
                    emoji: "🥛"
                },
                {
                    name: "Amul Salted Butter",
                    size: "100 g",
                    price: 63,
                    emoji: "🧈"
                }
            ],

            Bakery: [
                {
                    name: "Fresh Bread",
                    size: "400 g",
                    price: 40,
                    emoji: "🍞"
                },
                {
                    name: "Chocolate Cake",
                    size: "500 g",
                    price: 280,
                    emoji: "🎂"
                },
                {
                    name: "Cream Pastry",
                    size: "1 pc",
                    price: 60,
                    emoji: "🍰"
                }
            ],

            Snacks: [
                {
                    name: "Kaju Katli",
                    size: "250 g",
                    price: 220,
                    emoji: "🍬"
                },
                {
                    name: "Gulab Jamun",
                    size: "500 g",
                    price: 180,
                    emoji: "🍩"
                }
            ]

        }
    },


    /* =================================================
       LAXMI
    ================================================= */

    laxmi: {
        name: "Maa Laxmi Bakery",
        rating: "4.4",
        distance: "1.1 km",
        time: "35–45 min",
        address: "Hospital Road, Near Main Market",
        description: "Fresh bread, cakes, pastries and bakery snacks.",

        categories: {

            Bakery: [
                {
                    name: "Milk Bread",
                    size: "400 g",
                    price: 45,
                    emoji: "🍞"
                },
                {
                    name: "Brown Bread",
                    size: "400 g",
                    price: 50,
                    emoji: "🍞"
                },
                {
                    name: "Chocolate Cake",
                    size: "500 g",
                    price: 300,
                    emoji: "🎂"
                },
                {
                    name: "Black Forest Cake",
                    size: "500 g",
                    price: 350,
                    emoji: "🎂"
                },
                {
                    name: "Chocolate Pastry",
                    size: "1 pc",
                    price: 65,
                    emoji: "🍰"
                },
                {
                    name: "Veg Puff",
                    size: "1 pc",
                    price: 30,
                    emoji: "🥐"
                }
            ],

            Snacks: [
                {
                    name: "Cookies",
                    size: "250 g",
                    price: 100,
                    emoji: "🍪"
                },
                {
                    name: "Cream Roll",
                    size: "1 pc",
                    price: 40,
                    emoji: "🥐"
                }
            ]

        }
    }

};


/* =====================================================
   GET CURRENT STORE
===================================================== */

const urlParams =
    new URLSearchParams(
        window.location.search
    );


const storeId =
    urlParams.get("store") || "sharma";


const currentStore =
    stores[storeId] || stores.sharma;


/* =====================================================
   CART
===================================================== */

let cart =
    JSON.parse(
        localStorage.getItem(
            "nearByDukanCart"
        )
    ) || [];


let currentCategory = "all";


/* =====================================================
   SAVE CART
===================================================== */

function saveCart() {

    localStorage.setItem(
        "nearByDukanCart",
        JSON.stringify(cart)
    );

}


/* =====================================================
   LOAD STORE
===================================================== */

function loadStore() {

    document.title =
        currentStore.name +
        " - NearBy Dukan";


    const storeName =
        document.getElementById("storeName");

    const storeDescription =
        document.getElementById("storeDescription");

    const storeRating =
        document.getElementById("storeRating");

    const storeDistance =
        document.getElementById("storeDistance");

    const storeTime =
        document.getElementById("storeTime");

    const storeAddress =
        document.getElementById("storeAddress");


    if (storeName) {

        storeName.innerText =
            currentStore.name;

    }


    if (storeDescription) {

        storeDescription.innerText =
            currentStore.description;

    }


    if (storeRating) {

        storeRating.innerText =
            currentStore.rating;

    }


    if (storeDistance) {

        storeDistance.innerText =
            currentStore.distance;

    }


    if (storeTime) {

        storeTime.innerText =
            currentStore.time;

    }


    if (storeAddress) {

        storeAddress.innerText =
            currentStore.address;

    }


    renderProducts();

}


/* =====================================================
   GET ALL PRODUCTS
===================================================== */

function getAllProducts() {

    let products = [];


    Object.keys(
        currentStore.categories
    ).forEach(category => {

        currentStore.categories[
            category
        ].forEach((product, index) => {

            products.push({

                ...product,

                category: category,

                id:
                    product.id ||
                    `${storeId}-${category}-${index}`

            });

        });

    });


    return products;

}


/* =====================================================
   RENDER PRODUCTS
===================================================== */

function renderProducts() {

    const container =
        document.getElementById(
            "productSections"
        );


    if (!container) {
        return;
    }


    container.innerHTML = "";


    let categories =
        Object.keys(
            currentStore.categories
        );


    /* CATEGORY FILTER */

    if (
        currentCategory !== "all"
    ) {

        categories =
            categories.filter(
                category =>
                    category.toLowerCase() ===
                    currentCategory.toLowerCase()
            );

    }


    if (categories.length === 0) {

        container.innerHTML = `

            <div class="no-products">

                <i class="fa-solid fa-box-open"></i>

                <h3>
                    No products found
                </h3>

                <p>
                    Try another category.
                </p>

            </div>

        `;

        return;

    }


    categories.forEach(
        category => {

            let products =
                currentStore.categories[
                    category
                ];


            /* SEARCH */

            const searchInput =
                document.getElementById(
                    "productSearch"
                );


            const search =
                searchInput
                    ? searchInput.value
                        .trim()
                        .toLowerCase()
                    : "";


            if (search) {

                products =
                    products.filter(
                        product =>
                            product.name
                                .toLowerCase()
                                .includes(search)
                    );

            }


            /* CREATE UNIQUE IDS */

            products =
                products.map(
                    (product, index) => ({

                        ...product,

                        category: category,

                        id:
                            product.id ||
                            `${storeId}-${category}-${index}`

                    })
                );


            if (
                products.length === 0
            ) {
                return;
            }


            /* SORT */

            const sortSelect =
                document.getElementById(
                    "sortProducts"
                );


            const sortValue =
                sortSelect
                    ? sortSelect.value
                    : "default";


            if (
                sortValue === "low"
            ) {

                products.sort(
                    (a, b) =>
                        a.price - b.price
                );

            }

            else if (
                sortValue === "high"
            ) {

                products.sort(
                    (a, b) =>
                        b.price - a.price
                );

            }

            else if (
                sortValue === "name"
            ) {

                products.sort(
                    (a, b) =>
                        a.name.localeCompare(
                            b.name
                        )
                );

            }


            /* CREATE SECTION */

            const section =
                document.createElement(
                    "section"
                );


            section.className =
                "product-section";


            section.innerHTML = `

                <h2 class="product-section-title">
                    ${category}
                </h2>

                <div class="product-grid">

                    ${products.map(
                        product =>
                            createProductCard(
                                product
                            )
                    ).join("")}

                </div>

            `;


            container.appendChild(
                section
            );

        }
    );


    updateProductCount();

}


/* =====================================================
   PRODUCT CARD
===================================================== */

function createProductCard(product) {

    const inCart =
        cart.some(
            item =>
                item.id === product.id &&
                item.storeId === storeId
        );


    return `

        <div class="product-card">


            <div class="product-image">

                <div class="product-emoji">

                    ${product.emoji || "🛒"}

                </div>

            </div>


            <div class="product-info">


                <div class="delivery-time">

                    <i class="fa-regular fa-clock"></i>

                    15 MINS

                </div>


                <h3 class="product-name">

                    ${product.name}

                </h3>


                <div class="product-size">

                    ${product.size || ""}

                </div>


                <div class="product-bottom">


                    <span class="product-price">

                        ₹${product.price}

                    </span>


                    <button

                        class="add-btn ${
                            inCart
                                ? "added"
                                : ""
                        }"

                        onclick='addToCart(${JSON.stringify(product)})'

                    >

                        ${
                            inCart
                                ? "ADDED"
                                : "ADD"
                        }

                    </button>


                </div>


            </div>


        </div>

    `;

}


/* =====================================================
   SEARCH
===================================================== */

function searchProducts() {

    renderProducts();

}


/* =====================================================
   FILTER CATEGORY
===================================================== */

function filterCategory(
    category,
    button
) {

    currentCategory =
        category;


    document
        .querySelectorAll(
            ".category-btn"
        )
        .forEach(btn => {

            btn.classList.remove(
                "active"
            );

        });


    if (button) {

        button.classList.add(
            "active"
        );

    }


    renderProducts();

}


/* =====================================================
   SORT
===================================================== */

function sortProducts() {

    renderProducts();

}


/* =====================================================
   PRODUCT COUNT
===================================================== */

function updateProductCount() {

    const count =
        getAllProducts().length;


    const element =
        document.getElementById(
            "productCount"
        );


    if (element) {

        element.innerText =
            `${count} products available in this store`;

    }

}


/* =====================================================
   ADD TO CART
===================================================== */

function addToCart(product) {

    if (!product) {

        console.log(
            "Product not found"
        );

        return;

    }


    /*
       IMPORTANT:

       Product button sends complete
       product object.

       So we directly use product here.
    */


    const productId =
        product.id ||
        `${storeId}-${product.category}-${product.name}`;


    /* FIND EXISTING PRODUCT */

    const existingItem =
        cart.find(
            item =>
                item.id === productId &&
                item.storeId === storeId
        );


    /* EXISTING */

    if (existingItem) {

        existingItem.quantity =
            Number(
                existingItem.quantity
            ) + 1;

    }


    /* NEW PRODUCT */

    else {

        cart.push({

            id: productId,

            name: product.name,

            price: Number(
                product.price
            ),

            size:
                product.size || "",

            image:
                product.image ||
                product.emoji ||
                "🛒",

            emoji:
                product.emoji ||
                "🛒",

            storeName:
                currentStore.name,

            storeId:
                storeId,

            quantity: 1

        });

    }


    /* SAVE */

    saveCart();


    /* UPDATE CART */

    updateCart();


    /* UPDATE PRODUCT BUTTON */

    renderProducts();


    console.log(
        "Added to cart:",
        product.name
    );

}


/* =====================================================
   UPDATE CART
===================================================== */

function updateCart() {

    saveCart();

    updateCartCount();

    renderCart();

}


/* =====================================================
   UPDATE NAVBAR CART COUNT
===================================================== */

function updateCartCount() {

    const cartCount =
        document.getElementById(
            "cartCount"
        );


    if (!cartCount) {
        return;
    }


    const totalItems =
        cart.reduce(
            (total, item) =>
                total +
                Number(
                    item.quantity || 0
                ),
            0
        );


    cartCount.innerText =
        totalItems;

}


/* =====================================================
   RENDER SIDEBAR CART
===================================================== */

function renderCart() {

    const container =
        document.getElementById(
            "cartItems"
        );


    const totalElement =
        document.getElementById(
            "cartTotal"
        );


    if (!container) {
        return;
    }


    /* EMPTY */

    if (cart.length === 0) {

        container.innerHTML = `

            <div class="empty-cart">

                <i class="fa-solid fa-cart-shopping"></i>

                <h3>
                    Your cart is empty
                </h3>

                <p>
                    Add products from the store.
                </p>

            </div>

        `;


        if (totalElement) {

            totalElement.innerText =
                "₹0";

        }


        return;

    }


    /* CART PRODUCTS */

    container.innerHTML =

        cart.map(
            (item, index) => {

                const price =
                    Number(
                        item.price
                    ) || 0;

                const quantity =
                    Number(
                        item.quantity
                    ) || 1;


                return `

                    <div class="cart-product">


                        <div class="cart-product-image">

                            ${
                                item.image ||
                                item.emoji ||
                                "🛒"
                            }

                        </div>


                        <div class="cart-product-info">


                            <strong>

                                ${item.name}

                            </strong>


                            <span>

                                ₹${price}

                            </span>


                            <small>

                                ${
                                    item.storeName ||
                                    "Local Store"
                                }

                            </small>


                        </div>


                        <div class="quantity-control">


                            <button
                                onclick="changeQuantity(
                                    ${index},
                                    -1
                                )">

                                −

                            </button>


                            <span>

                                ${quantity}

                            </span>


                            <button
                                onclick="changeQuantity(
                                    ${index},
                                    1
                                )">

                                +

                            </button>


                        </div>


                    </div>

                `;

            }
        ).join("");


    /* TOTAL */

    const total =
        cart.reduce(
            (sum, item) =>

                sum +
                (
                    Number(
                        item.price
                    ) || 0
                ) *
                (
                    Number(
                        item.quantity
                    ) || 0
                ),

            0
        );


    if (totalElement) {

        totalElement.innerText =
            "₹" + total;

    }

}


/* =====================================================
   CHANGE QUANTITY
===================================================== */

function changeQuantity(
    index,
    amount
) {

    if (!cart[index]) {
        return;
    }


    cart[index].quantity =
        Number(
            cart[index].quantity
        ) + amount;


    /* REMOVE WHEN ZERO */

    if (
        cart[index].quantity <= 0
    ) {

        cart.splice(
            index,
            1
        );

    }


    /* SAVE */

    saveCart();


    /* UPDATE */

    updateCart();


    renderProducts();

}


/* =====================================================
   OPEN CART SIDEBAR
===================================================== */

function openCart() {

    const sidebar =
        document.getElementById(
            "cartSidebar"
        );


    const overlay =
        document.getElementById(
            "cartOverlay"
        );


    if (sidebar) {

        sidebar.classList.add(
            "show"
        );

    }


    if (overlay) {

        overlay.classList.add(
            "show"
        );

    }

}


/* =====================================================
   CLOSE CART SIDEBAR
===================================================== */

function closeCart() {

    const sidebar =
        document.getElementById(
            "cartSidebar"
        );


    const overlay =
        document.getElementById(
            "cartOverlay"
        );


    if (sidebar) {

        sidebar.classList.remove(
            "show"
        );

    }


    if (overlay) {

        overlay.classList.remove(
            "show"
        );

    }

}


/* =====================================================
   FAVORITE
===================================================== */

function toggleFavorite(button) {

    button.classList.toggle(
        "active"
    );


    const icon =
        button.querySelector("i");


    if (!icon) {
        return;
    }


    if (
        button.classList.contains(
            "active"
        )
    ) {

        icon.classList.remove(
            "fa-regular"
        );

        icon.classList.add(
            "fa-solid"
        );

    }

    else {

        icon.classList.remove(
            "fa-solid"
        );

        icon.classList.add(
            "fa-regular"
        );

    }

}


/* =====================================================
   CHECKOUT
===================================================== */

function checkout() {

    if (cart.length === 0) {

        alert(
            "Please add products to your cart first."
        );

        return;

    }


    window.location.href =
        "cart.html";

}


/* =====================================================
   INITIALIZE
===================================================== */

loadStore();

updateCart();