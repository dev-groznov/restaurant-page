import imgSteak from "../images/saucesteak.jpeg";
import imgRamen from "../images/ramen.jpeg";
import imgBurger from "../images/burger.jpeg";
import imgSushi from "../images/sushi.jpeg";
import imgCocktail from "../images/cocktail.jpeg";

export function createMenuPage() {
    const content = document.querySelector(".content");

    // Title
    const mainTitle = document.createElement("h1");
    mainTitle.classList.add("main-title");
    mainTitle.textContent = "Menu";
    content.appendChild(mainTitle);

    // Menu Data
    const menuItemsData = [
        {
            title: '01 // Cyber-Steak "Overclock"',
            price: "45.00 CREDITS",
            desc: 'Synthesized medium-rare steak with laser-etched circuitry. Served on a bed of neon bio-fries, garnished with "Hot-Glitch" syrup capsules and micro-greens.',
            specs: "High protein level, LED presentation, bio-modified flavor profile.",
            imageSrc: imgSteak,
            imageAlt: 'Cyber-Steak "Overclock"'
        },
        {
            title: '02 // Cyber-Ramen "Neon Mesh"',
            price: "38.00 CREDITS",
            desc: "Rich synthetic ramen featuring bioluminescent electric-blue noodles in a glowing pink broth. Served with micro-dumplings and illuminated chopsticks.",
            specs: "Energy surge +50%, thermal stimulation, phosphor effect.",
            imageSrc: imgRamen,
            imageAlt: 'Cyber-Ramen "Neon Mesh"'
        },
        {
            title: '03 // Glitch-Burger "Matrix Core"',
            price: "32.00 CREDITS",
            desc: "Marbled bio-patty on a charcoal black bun topped with neon protein cheese, purple-cyan synth sauces, and a holographic flag pick. Served with neon fries.",
            specs: "Maximum calories, cyber-textured taste, visual desync.",
            imageSrc: imgBurger,
            imageAlt: 'Glitch-Burger "Matrix Core"'
        },
        {
            title: '04 // Cyber-Sushi "Data Roll" Set',
            price: "40.00 CREDITS",
            desc: "Signature roll set featuring translucent bioluminescent fish, glowing rice, and circuit-patterned nori. Served with micro-holograms and wasabi-gel.",
            specs: "Omega-3 overdrive, light digestibility, fluorescent effect.",
            imageSrc: imgSushi,
            imageAlt: 'Cyber-Sushi "Data Roll" Set'
        },
        {
            title: '05 // Cocktail "Neon Overdose"',
            price: "22.00 CREDITS",
            desc: "Two-layered stimulating cocktail of cyan and magenta liquid synthetics infused with dry ice vapor and floating LED cubes. Served with a glowing neon straw.",
            specs: "Mental acceleration, smoky visual effect, receptor freeze.",
            imageSrc: imgCocktail,
            imageAlt: 'Cocktail "Neon Overdose"'
        }
    ];

    menuItemsData.forEach((item) => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item", "info-card");

        // Header (Title & Price)
        const menuHeader = document.createElement("div");
        menuHeader.classList.add("menu-header");

        const cardTitle = document.createElement("h3");
        cardTitle.classList.add("card-title");
        cardTitle.textContent = item.title;

        const priceSpan = document.createElement("span");
        priceSpan.classList.add("price");
        priceSpan.textContent = item.price;

        menuHeader.appendChild(cardTitle);
        menuHeader.appendChild(priceSpan);

        // Body (Description & Image)
        const menuBody = document.createElement("div");
        menuBody.classList.add("menu-body");

        const menuDesc = document.createElement("div");
        menuDesc.classList.add("menu-desc");

        const descText = document.createElement("p");
        descText.classList.add("desc-text");
        descText.textContent = item.desc;

        const specsText = document.createElement("p");
        specsText.classList.add("specs-text");

        const specsLabel = document.createElement("span");
        specsLabel.textContent = "Specs: ";
        specsText.appendChild(specsLabel);
        specsText.appendChild(document.createTextNode(item.specs));

        menuDesc.appendChild(descText);
        menuDesc.appendChild(specsText);

        // Image Container
        const imgContainer = document.createElement("div");
        imgContainer.classList.add("menu-img-container");

        const img = document.createElement("img");
        img.classList.add("menu-img");
        img.src = item.imageSrc;
        img.alt = item.imageAlt;

        imgContainer.appendChild(img);

        // Assembly
        menuBody.appendChild(menuDesc);
        menuBody.appendChild(imgContainer);

        menuItem.appendChild(menuHeader);
        menuItem.appendChild(menuBody);

        content.appendChild(menuItem);
    });
}