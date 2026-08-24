export function createAboutPage() {
    const content = document.querySelector(".content");

    // Title
    const mainTitle = document.createElement("h1");
    mainTitle.classList.add("main-title");
    mainTitle.textContent = "About Glitch & Grill";
    content.appendChild(mainTitle);

    // Main Story / Mission Card
    const storyCard = document.createElement("div");
    storyCard.classList.add("info-card");
    storyCard.style.marginBottom = "25px";

    const storyTitle = document.createElement("h3");
    storyTitle.classList.add("card-title");
    storyTitle.textContent = "01 // Our System Protocol";

    const storyText1 = document.createElement("p");
    storyText1.classList.add("desc-text");
    storyText1.textContent = "Founded in 2088 by former bio-cybernetic engineer Ren 'Glitch' Vance, Glitch & Grill was born out of a simple glitch in the corporate food-synthesis grid. We believe that dining should not just be fuel—it should be an immersive sensory override.";

    const storyText2 = document.createElement("p");
    storyText2.classList.add("desc-text");
    storyText2.textContent = "Located deep within Sector 7, our kitchen utilizes molecular 3D printers, bio-luminescent seasoning, and high-frequency thermal grills to hack traditional culinary arts into high-tech gastronomy.";

    storyCard.appendChild(storyTitle);
    storyCard.appendChild(storyText1);
    storyCard.appendChild(storyText2);
    content.appendChild(storyCard);

    // Features Section Header
    const featuresTitle = document.createElement("h3");
    featuresTitle.classList.add("card-title");
    featuresTitle.style.marginBottom = "15px";
    featuresTitle.textContent = "02 // Core Specs";
    content.appendChild(featuresTitle);

    // Grid for Specs / Cards
    const specsGrid = document.createElement("div");
    specsGrid.classList.add("info-grid");

    const specsData = [
        {
            title: "Synthetic Excellence",
            desc: "100% lab-grown, ethically synthesized proteins and bio-modified veggies with zero environmental footprint."
        },
        {
            title: "Neural Pairing",
            desc: "Our dishes are designed to stimulate visual, gustatory, and sensory neural pathways simultaneously."
        },
        {
            title: "Safe Environment",
            desc: "Fully shielded against EMP bursts, corporate surveillance, and street-level signal interference."
        }
    ];

    specsData.forEach((spec) => {
        const specCard = document.createElement("div");
        specCard.classList.add("info-card");

        const specTitle = document.createElement("h3");
        specTitle.classList.add("card-title");
        specTitle.style.fontSize = "1rem";
        specTitle.textContent = spec.title;

        const specDesc = document.createElement("p");
        specDesc.classList.add("desc-text");
        specDesc.style.fontSize = "0.9rem";
        specDesc.style.marginBottom = "0";
        specDesc.textContent = spec.desc;

        specCard.appendChild(specTitle);
        specCard.appendChild(specDesc);
        specsGrid.appendChild(specCard);
    });

    content.appendChild(specsGrid);
}