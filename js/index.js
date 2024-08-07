const STORAGE_KEY = {
    PERIOD: "period",
    SELECTED_CARD: "selectedCard"
};

const monthly = document.getElementById("monthly");
const annually = document.getElementById("annually");
const cards = document.querySelectorAll(".card");
// const priceItem = document.getElementById("price-item");

const prices = {
    monthly: {
        basic: "$9.99",
        standard: "$19.99",
        premium: "$29.99"
    },
    annually: {
        basic: "$6.99",
        standard: "$15.99",
        premium: "$25.99"
    }
};

function setActivePeriod(period) {
    if (period === "annually") {
        monthly.classList.remove("active");
        annually.classList.add("active");
        document.getElementById("basic-price").textContent = prices.annually.basic;
        document.getElementById("standard-price").textContent = prices.annually.standard;
        document.getElementById("premium-price").textContent = prices.annually.premium;
    } else {
        monthly.classList.add("active");
        annually.classList.remove("active");
        document.getElementById("basic-price").textContent = prices.monthly.basic;
        document.getElementById("standard-price").textContent = prices.monthly.standard;
        document.getElementById("premium-price").textContent = prices.monthly.premium;
    }
    localStorage.setItem(STORAGE_KEY.PERIOD, period);
}

function setActiveCard(cardId) {
    cards.forEach(card => card.classList.remove("active"));
    document.querySelectorAll(".buy-btn").forEach(btn => btn.classList.remove("active"));
    document.querySelectorAll("#price-item").forEach(item => item.classList.remove("active"));

    const selectedCard = document.getElementById(cardId);
    selectedCard.classList.add("active");
    selectedCard.querySelector(".buy-btn").classList.add("active");
    selectedCard.querySelector("#price-item").classList.add("active")

    localStorage.setItem(STORAGE_KEY.SELECTED_CARD, cardId);
}

document.addEventListener('DOMContentLoaded', () => {
    const savedPeriod = localStorage.getItem(STORAGE_KEY.PERIOD);
    const savedCard = localStorage.getItem(STORAGE_KEY.SELECTED_CARD);

    if (savedPeriod) {
        setActivePeriod(savedPeriod);
    } else {
        setActivePeriod("monthly");
    }

    if (savedCard) {
        setActiveCard(savedCard);
    } else {
        setActiveCard("card2");
    }

    monthly.addEventListener("click", () => setActivePeriod("monthly"));
    annually.addEventListener("click", () => setActivePeriod("annually"));

    cards.forEach(card => {
        card.addEventListener("click", () => setActiveCard(card.id));
    });
});
