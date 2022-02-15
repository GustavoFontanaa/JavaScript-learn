import "./style.css";

function CardGame(icon = "yugioh-image", alt = "Logo do yugioh") {
    return /*html*/`
    <article class="card-game">
        <img src="images/${icon}.png" alt="${alt}">
    </article>
    `;
}

export default CardGame;