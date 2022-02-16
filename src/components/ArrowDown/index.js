import "./style.css"

function ArrowDown(currentPlayer = 1) {
    return /*html*/ `
    <img class="arrow-down" 
        data-currentPlayer = "${currentPlayer}"
        src="images/IconArrowDown.png" 
        alt="Ícone de uma seta para baixo"></img>
    `;
}

export default ArrowDown;