const background = document.querySelector(".background");
const description = document.querySelector(".description");
const details = document.querySelector(".details");
const carrouselContainer = document.querySelector(".carrousel");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

const restaurants = [
    {
        image: "image/Pepe.webp",
        description: "Pepe Chicken by FastGood Cuisine",
        details: "Le poulet rôti gourmand et savoureux qui réveille tes papilles à chaque bouchée.",
        link: "https://www.pepechicken.fr/"
    },
    {
        image: "image/Marta.jpg",
        description: "Marta Lille - Restaurant trendy de la vie lilloise",
        details: "Une cuisine raffinée et audacieuse, parfaite pour une pause gourmande.",
        link: "https://www.martabarrestaurant.com/"
    },
    {
        image: "image/La-famille.jpg",
        description: "La Famille, Finest Lunch - Restaurants - Traiteur - Cantine",
        details: "Une cuisine conviviale et généreuse, comme à la maison, mais en mieux.",
        link: "https://www.lf.fr/"
    },
    {
        image: "image/LeBarboteur.jpg",
        description: "Le Barboteur–Restaurant & Bar, Quai de l'Ouest Lille",
        details: "Le resto au bord de l’eau qui va faire vibrer vos papilles !",
        link: "https://lebarboteurlille.com/"
    }
];

let currentIndex = 0;
let isTransitioning = false;

/**
 * Met à jour l'arrière-plan et la description
 */
function updateBackground() {
    background.classList.add("fade-in");
    background.style.backgroundImage = `url(${restaurants[currentIndex].image})`;
    description.textContent = restaurants[currentIndex].description;
    details.textContent = restaurants[currentIndex].details;

    setTimeout(() => {
        background.classList.remove("fade-in");
    }, 500);
}

/**
 * Met à jour le carrousel avec les 3 images suivantes et ajoute les liens
 */
function updateCarrousel() {
    carrouselContainer.innerHTML = ""; // Vide le carrousel

    for (let i = 0; i < 3; i++) {
        let nextIndex = (currentIndex + i) % restaurants.length;

        // Création du lien qui entoure l'image
        let link = document.createElement("a");
        link.href = restaurants[nextIndex].link; // Ajoute le lien du restaurant
        link.target = "_blank"; // Ouvre dans un nouvel onglet
        link.rel = "noopener noreferrer"; // Sécurité

        // Création de l'image
        let img = document.createElement("img");
        img.src = restaurants[nextIndex].image;
        img.alt = `Image du restaurant ${nextIndex + 1}`;
        img.classList.add("image");

        // Si c'est l'image principale, on ajoute une classe spéciale
        if (i === 0) img.classList.add("active");

        // Ajoute l'image dans le lien, puis le lien dans le carrousel
        link.appendChild(img);
        carrouselContainer.appendChild(link);
    }
}

/**
 * Gère le clic sur le bouton "suivant"
 */
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

/**
 * Gère le clic sur le bouton "précédent"
 */
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

// Initialisation du carrousel et du fond d'écran au chargement
updateBackground();
updateCarrousel();
