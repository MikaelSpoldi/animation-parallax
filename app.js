const parralax = document.querySelector(".Container__Parallax")


/* -- Function return position div */
function getPosition( element ) {
    const rect = element.getBoundingClientRect();
    return {
        x: rect.left,
        y: rect.top
    };
}

window.addEventListener("scroll", () => {
    let pos = getPosition(parralax)

    /**
        Pour afficher le parralax à la vision dans le dom
        pos.y - (element.scrollHeight * 1.5) <= 0
    */

    if (pos.y - (parralax.scrollHeight * 1.5) <= 0) {
        parralax.style = "opacity: 1; transition: all 2s;"
    } else {
        parralax.style = "opacity: 0; transition: all 2s;"
    }

    console.log(pos.x);
    console.log(pos.y);
})