// ========================================
// SCROLL TO OFFERS
// ========================================

function scrollToOffers() {

    document.getElementById("offers").scrollIntoView({behavior: "smooth"});

}
// ========================================
// FILTER OFFERS
// ========================================

function filterOffers(type, button) {

    const cards = document.querySelectorAll(".offer-card");

    const tabs = document.querySelectorAll(".offer-tab");
    // Remove active class

    tabs.forEach(function(tab) {

        tab.classList.remove("active");

    });


    // Add active class

    button.classList.add("active");
    // Show / hide offers
    cards.forEach(function(card) {

        const cardType = card.dataset.type;
        if (type === "all" || cardType === type) {

            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}
// ========================================
// CLAIM OFFER
// ========================================

function claimOffer(code) {

    alert("Offer applied!\n\nCoupon Code: " + code);

}
// ========================================
// COPY COUPON
// ========================================

function copyCoupon(code) {

    navigator.clipboard.writeText(code).then(function() {
            alert("Coupon copied: " + code);
        }
    )
        .catch(function() {
            alert("Coupon Code: " + code);
        });
}
// ========================================
// OFFER HEART
// ========================================

const hearts =document.querySelectorAll(".offer-heart");
hearts.forEach(function(heart) {
    heart.addEventListener("click",function() {
            if (
                heart.innerText === "♡"
            ) {
                heart.innerText = "♥";
                heart.style.color =
                "#ef4444";
            } else {
                heart.innerText = "♡";
                heart.style.color =
                    "#111";
            }
        }
    );

});