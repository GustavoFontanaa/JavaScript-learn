import CardGame from "../CardGame";
import "./style.css"

window.CardFrontBack = {}
window.CardFrontBack.handleClick = (event) => {
    const $origin = event.target;
    const $cardFrontBack = $origin.closest('.card-front-back');

    /*if ($cardFrontBack.classList.contains('-active')) {
        $cardFrontBack.classList.remove('-active')
    } else {
        $cardFrontBack.classList.add('-active')
    }*/

    $cardFrontBack.classList.toggle('-active');
}

function CardFrontBack() {

    return /*html*/ `
        <article class="card-front-back" onClick="CardFrontBack.handleClick(event)"> 
        <div class="card -front">
            ${CardGame()}
        </div>
        <div class="card -back">
            ${CardGame("javascript", "Logo do JavaScript")}
        </div>
        </article>
    `
}

export default CardFrontBack;