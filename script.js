
// Obtén todos los enlaces que controlan el submenú
const menuItems = document.querySelectorAll('.submenu-toggle');

// Itera sobre ellos y agrega los eventos de mouseenter y mouseleave
menuItems.forEach(item => {
    // Evento 'mouseenter' para mostrar el submenú cuando el mouse entra en el item
    item.addEventListener('mouseenter', function() {
        // Selecciona el submenú asociado a este ítem
        const submenu = this.nextElementSibling;

        // Muestra el submenú
        submenu.style.display = "block";
    });

    // Evento 'mouseleave' para ocultar el submenú cuando el mouse sale del item o del submenú
    item.addEventListener('mouseleave', function() {
        const submenu = this.nextElementSibling;

        // Retrasar el ocultado para evitar que se cierre inmediatamente al mover el mouse
        setTimeout(() => {
            if (!submenu.matches(':hover')) {
                submenu.style.display = "none";
            }
        }, 200); // Retraso de 200ms para permitir que el mouse se mueva al submenú
    });
    
    // Cuando el mouse entra en el submenú, aseguramos que se mantenga visible
    const submenu = item.nextElementSibling;
    if (submenu) {
        submenu.addEventListener('mouseenter', function() {
            submenu.style.display = "block";
        });

        submenu.addEventListener('mouseleave', function() {
            submenu.style.display = "none";
        });
    }
});


const moveHands = () => {
    //get the DOM elements for hands
    const secondDiv = document.querySelector('.second-hand')
    const minDiv = document.querySelector('.min-hand')
    const hourDiv = document.querySelector('.hour-hand')


    //get the current time
    const now = new Date()

    //current second
    const second = now.getSeconds()
    //convert second to degree
    const secondRatio = second / 60
    const secondDegree = (secondRatio * 360) + 90
    //add the transform css style rotate
    secondDiv.style.transform = `rotate(${secondDegree}deg)`




    //current minute
    const min = now.getMinutes()
    //convert min to degree
    const minRatio = min / 60
    const minDegree = (minRatio * 360) + 90
    //add the transform css style rotate
    minDiv.style.transform = `rotate(${minDegree}deg)`


    //current hour
    const hour = now.getHours()
    //convert hour to degree
    const hourRatio = hour / 12
    const hourDegree = (hourRatio * 360) + 90
    //add the transform css style rotate
    hourDiv.style.transform = `rotate(${hourDegree}deg)`


    /********To fix the weird behaviour *******/
    if (secondDegree === 90) {
        secondDiv.classList.add('notransition'); // Disable transitions
        minDiv.classList.add('notransition'); // Disable transitions
        hourDiv.classList.add('notransition'); // Disable transitions
    }

    secondDiv.offsetHeight; // Trigger a reflow, flushing the CSS changes
    minDiv.offsetHeight; // Trigger a reflow, flushing the CSS changes
    hourDiv.offsetHeight; // Trigger a reflow, flushing the CSS changes

    secondDiv.classList.remove('notransition'); // Re-enable transitions
    minDiv.classList.remove('notransition'); // Re-enable transitions
    hourDiv.classList.remove('notransition'); // Re-enable transitions

    /*********/
    /*The weird behaviour is - 
    when the second-hand goes to 444 degree, it then needs to start from 90 degree again. But to do that the second-hand goes backward direction
    which makes everything a bit shaky for a sec.
    Solution: to overcome this, I stopped the transition effect for the certain degree & re-add it after the degree changed.
    How to disable transition temporarily: https://stackoverflow.com/a/16575811/10238832*/

}

setInterval(moveHands, 1000)
