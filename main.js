const background = document.querySelector(".background");
const description = document.querySelector(".description");
const details = document.querySelector(".details");
const carrouselContainer = document.querySelector(".carrousel");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const restaurants = [
    { image: "image/Pepe.webp", description: "Pepe Chicken by FastGood Cuisine", details: "Le poulet rôti gourmand et savoureux qui réveille tes papilles à chaque bouchée.", link: "https://www.pepechicken.fr/" },
    { image: "image/Marta.jpg", description: "Marta Lille - Restaurant trendy de la vie lilloise", details: "Une cuisine raffinée et audacieuse, parfaite pour une pause gourmande.", link: "https://example.com/marta" },
    { image: "image/La-famille.jpg", description: "La Famille, Finest Lunch - Restaurants - Traiteur - Cantine", details: "Une cuisine conviviale et généreuse, comme à la maison, mais en mieux.", link: "https://example.com/famille" },
    { image: "image/LeBarboteur.jpg", description: "Le Barboteur–Restaurant & Bar, Quai de l'Ouest Lille", details: "Le resto au bord de l’eau qui va faire vibrer vos papilles !", link: "https://example.com/barboteur" },
];


let currentIndex = 0;
let isTransitioning = false;


function updateBackground() {
    background.classList.add("fade-in");
    background.style.backgroundImage = `url(${restaurants[currentIndex].image})`;
    description.textContent = restaurants[currentIndex].description;
    details.textContent = restaurants[currentIndex].details;

    setTimeout(() => {
        background.classList.remove("fade-in");
    }, 500);
}


function updateCarrousel() {
    carrouselContainer.innerHTML = ""; // Vide le carrousel

    for (let i = 0; i < 3; i++) {
        let nextIndex = (currentIndex + i) % restaurants.length;
        let img = document.createElement("img");
        const link =
            img.src = restaurants[nextIndex].image;
        img.alt = `Image du restaurant ${nextIndex + 1}`;
        img.classList.add("image");

        // background si c'est l'image principale

        if (i === 0) img.classList.add("active");

        carrouselContainer.appendChild(img);
    }
}


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


updateBackground();
carrouselContainer.innerHTML = "";
updateCarrousel();
