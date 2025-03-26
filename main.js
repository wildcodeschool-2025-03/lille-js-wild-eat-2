// Selector
const background = document.querySelector(".background");
const description = document.querySelector(".description");
const details = document.querySelector(".details");
const carrouselContainer = document.querySelector(".carrousel");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const restaurants = [
    { image: "image/restau-1.jpg", description: "Restaurant Italien - Pâtes fraîches & Pizza au feu de bois", details: "Un coin chaleureux pour déguster une vraie cuisine italienne." },
    { image: "image/restau-2.jpg", description: "Restaurant Japonais - Sushi & Ramen", details: "Des sushis faits main et des ramen authentiques, un vrai voyage au Japon !" },
    { image: "image/restau-3.jpg", description: "Restaurant Français - Gastronomie & Tradition", details: "Savourez des plats raffinés dans une ambiance élégante." },
    { image: "image/image-6.avif", description: "Restaurant Vegan - Healthy & Bio", details: "Des plats gourmands et sains, 100% végétaux et bio." }
];

// Empêche les clics trop rapides
let currentIndex = 0;
let isTransitioning = false;

// Mise à jour de l'affichage principal
function updateBackground() {
    background.classList.add("fade-in"); // Ajout de l'animation
    background.style.backgroundImage = `url(${restaurants[currentIndex].image})`;
    description.textContent = restaurants[currentIndex].description;
    details.textContent = restaurants[currentIndex].details;

    setTimeout(() => {
        background.classList.remove("fade-in");
    }, 500); // Retire l'effet après 500ms
}

// Maj du carrousel
function updateCarrousel() {
    carrouselContainer.innerHTML = ""; // Vide le carrousel

    for (let i = 0; i < 3; i++) {
        let nextIndex = (currentIndex + i) % restaurants.length;
        let img = document.createElement("img");
        img.src = restaurants[nextIndex].image;
        img.alt = `Image du restaurant ${nextIndex + 1}`;
        img.classList.add("image");

        // Ajoute la classe active si c'est l'image principale
        if (i === 0) img.classList.add("active");

        carrouselContainer.appendChild(img);
    }
}

// Gestion du bouton NEXT
nextBtn.addEventListener("click", () => {
    if (isTransitioning) return;
    isTransitioning = true;

    currentIndex = (currentIndex + 1) % restaurants.length;
    updateBackground();
    updateCarrousel();

    setTimeout(() => {
        isTransitioning = false;
    }, 500);
});

// Gestion du bouton PREV
prevBtn.addEventListener("click", () => {
    if (isTransitioning) return;
    isTransitioning = true;

    currentIndex = (currentIndex - 1 + restaurants.length) % restaurants.length;
    updateBackground();
    updateCarrousel();

    setTimeout(() => {
        isTransitioning = false;
    }, 500);
});

// Initialisation carou qui se vide"
updateBackground();
carrouselContainer.innerHTML = "";
updateCarrousel();
