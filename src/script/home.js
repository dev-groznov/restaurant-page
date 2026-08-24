export function createHomePage() {
    const content = document.querySelector(".content");

    const mainTitle = document.createElement("h1");
    const quote = document.createElement("blockquote");
    const quoteText = document.createElement("p");
    const quoteAuthor = document.createElement("cite");
    const info = document.createElement("div");
    const card1 = document.createElement("div");
    const cardTitle1 = document.createElement("h3");
    const card2 = document.createElement("div");
    const cardTitle2 = document.createElement("h3");
    const scheduleList = document.createElement("ul");
    const locationText = document.createElement("p");

    mainTitle.textContent = "Glitch & Grill";
    quoteText.textContent = `"We don't serve food; we override your sensory limitations. Welcome to the code you can taste."`;
    quoteAuthor.textContent = '— Ren "Glitch" Vance, Founder & Head Synthesizer';
    cardTitle1.textContent = "Hours of Operation";
    cardTitle2.textContent = "Location";

    scheduleList.innerHTML = `
    <li><span>Mon – Thu:</span> 17:00 – 02:00</li>
    <li><span>Fri – Sat:</span> 17:00 – 05:00 <small>(Cyber-Hours)</small></li>
    <li><span>Sun:</span> 16:00 – 00:00</li>
    `;

    locationText.innerHTML = `
    Sector 7, Neo-Verona District<br>
    42 Cyberwave Alley b
    `;

    mainTitle.classList.add("main-title");
    quote.classList.add("quote-box");
    quoteText.classList.add("quote-text");
    quoteAuthor.classList.add("quote-author");
    info.classList.add("info-grid");
    card1.classList.add("info-card");
    cardTitle1.classList.add("card-title");
    scheduleList.classList.add("schedule-list");
    card2.classList.add("info-card");
    cardTitle2.classList.add("card-title");
    locationText.classList.add("location-text");

    content.appendChild(mainTitle);
    content.appendChild(quote);
    quote.appendChild(quoteText);
    quote.appendChild(quoteAuthor);
    content.appendChild(info);
    info.appendChild(card1);
    info.appendChild(card2);
    card1.appendChild(cardTitle1);
    card2.appendChild(cardTitle2);
    card1.appendChild(scheduleList);
    card2.appendChild(locationText);
}