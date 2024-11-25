html {cursor: url("cursorm.png") , auto;
    /* The image is from unsplash by David van Dijk */
    /* set an image such that it doesn't repeat stay center */
    background: url(./img/wall.jpg) no-repeat center center fixed;
    /* Resize the background image to cover the entire container */
    background-size: cover;

    /*setting the root font-size to calculate rem based off of this*/
    font-size: xx-small;
    text-align: center;}
html:active {cursor: url("cursoralt.png") , auto;}

body{
	background-color: #CCE3DE;
	font-family: system-ui, Helvetica, sans-serif;
    margin-right:30%;
    margin-left:4%;
}

// Obtén todos los enlaces que controlan el submenú
    const menuItems = document.querySelectorAll('.submenu-toggle');

    // Itera sobre ellos y agrega el evento de clic
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Selecciona el submenú asociado a este ítem
            const submenu = this.nextElementSibling;

            // Alterna la visibilidad del submenú
            if (submenu.style.display === "block") {
                submenu.style.display = "none";
            } else {
                submenu.style.display = "block";
            }
        });
    });
container{

}
details summary{
    line-height:0;
}
details {
    line-height:1.2;
    white-space: normal;
    overflow-wrap: break-word;
}


.nav-menu{
    position: fixed;
    height:30px;
    width: 90%;
  	top: 0;
	list-style-type: none; /*elimina los numerados.*/
	padding: 0;			   /*distanciamiento a la izq.*/
	display: flex;         /*alinea horizontalmente.*/
    justify-content: space-around; /* distribuye los elementos uniformemente*/
    font-size: medium;
    background-color: #b2d5cd;
}

.nav-menu li{
    margin-left: 3%;       /*Separación entre elementos*/
}

.nav-menu a{
    text-decoration: none; /*elimina la línea debajo*/
    color: #3F7368;
}

.nav-menu a:hover {
    color: #5EA697;        /*cambia el color al pasar el ratón*/
    cursor: url("cursoralt.png") , auto;
}
@media (max-width: 768px) {
    .nav-menu {
        flex-direction: column; /* Cambia a vertical */
        text-align: left;
        width: 100%;            /* Ocupa todo el ancho */
        font-size:large;
    }
    header{
        margin-top: 100px;
        font-size:large;
    }
  
}
header{
    background: #b2d5cd;
    right: 4%;
    margin-top: 50px;
    border-bottom: 10px solid white;
    font-size:large;
    
}

h1{
	margin-left: 1%;
	margin-right: 1%;
    font-size: x-large;
    text-align: center;
}

h2{
	color: darkred;
    font-size: small;
    text-align: center;
}

h3{
    font-size: medium;
    text-align: center
}
.h44{
    font-size: small;
    text-align: left;
    line-height:1.1;
    white-space: normal;
    overflow-wrap: break-word;
}

.container{
    margin: 5%;
}
.article{
    margin: 5%;
    font-size:large;
}

.unidad1{
    font-size: smaller;
  	list-style-type: none; /*elimina los numerados.*/
	padding: 0;			   /*distanciamiento a la izq.*/
  text-align: left;
}

.unidad1 li{
    margin-left: 3%;       /*Separación entre elementos*/
}

.unidad1 a{
    text-decoration: none; /*elimina la línea debajo*/
    color: #3F7368;
}

.unidad1 a:hover {
    color: #5EA697;        /*cambia el color al pasar el ratón*/
    cursor: url("cursoralt.png") , auto;
}
#txt{
    font-size: medium;
    padding: 8px;
    text-align:left;
}

#header{
    height:20%;
}

aside {
    position:fixed;
    top: 250px;
    right:6%;
    float: right;
    background-color: #b2d5cd;
    width: 23%;
    height: 400px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.chp{
  bottom: 4%;
  left: 8%;
  
}

.clock {
    position: fixed;          /* Mantener fijo */
    top: 50px;               /* Espacio desde la parte superior */
    right: 7%;             /* Espacio desde la derecha */
    /*give it a shape; from square to round*/
    height: 15rem;
    width: 15rem;
    border: 10px solid rgba(209, 231, 224, 0.904);
    border-radius: 50%;

    /*keep the hands away from border*/
    padding: 4px;

    /*set the shadow inside*/
    box-shadow: inset 0 0 10px black,
        inset 0 0 10px rgb(235, 233, 233);

}

.clock-face {
    height: 50%;
    width: 50%;
    transform: translateY(-3px);

    position: relative;
}

.hand {
    /*give the hands some shape*/
    background-color: rgba(15, 80, 69, 0.712);
    height: 3px;
    width: 75%;

    /*relating to the position*/
    position: fixed;
    top: 80px;
    left: 20px;

    /*to move*/
    transform: rotate(90deg);
    /*keep everything attached to the right point or middle point*/
    transform-origin: 100%;
    /*transition & speeding the effect*/
    transition: all 0.06s;
    transition-timing-function: cubic-bezier(0.07, 3.65, 0.76, 0.4);
}

audio {
    /*positioning the audio player*/
    position: fixed;
    right: 6%;
}

/*after 444 degree the second hand behaves weirdly; to stop that- (more on that in script.js file)*/
.notransition {
    -webkit-transition: none !important;
    -moz-transition: none !important;
    -o-transition: none !important;
    transition: none !important;
}
