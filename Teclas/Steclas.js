//Objects
var teclas = 
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

// Text, box and event invoation
document.addEventListener ("mousedown", hacerClick);
document.addEventListener ("mouseup", quitarClip);
document.addEventListener ("mousemove", moverMouse);
document.addEventListener ("keydown", dibujarTeclado);
var cuadrito = document.getElementById ("area_dibujo");
var papel = cuadrito.getContext ("2d");

//dibujo del borde
dibujarLineas("#cce561", 0, 0, 300, 0, papel)
dibujarLineas("#cce561", 300, 0, 300, 300, papel)
dibujarLineas("#cce561", 300, 300, 0, 300, papel)
dibujarLineas("#cce561", 0, 300, 0, 0, papel)

// const and variables
const canvasSize = 300;
cuadrito.height = canvasSize;
cuadrito.width = canvasSize;
var estado = 0;

// donde empieza mi dibujo
var x = 150;
var y = 150;
var x_m;
var y_m;
//Functions   
function  moverMouse (evento)

{
    var colorLinea = "#cce561";
  
    if (estado == 1)
    {
        dibujarLineas (colorLinea, x_m, y_m, evento.layerX, evento.layerY, papel);
    }
    x_m = evento.layerX;
    y_m = evento.layerY;
    console.log (evento.layerX);
}

function hacerClick (evento)
{
    estado = 1;
    x_m = evento.layerX;
    y_m = evento.layerY;
    console.log (evento.layerY);
};

function quitarClip (evento)
{
    estado = 0;
    x_m = evento.layerX;
    y_m = evento.layerY;
    console.log (evento.layerY);
}

function dibujarLineas(color, x_inicial, y_inicial, x_final, y_final, lienzo)
    {
    lienzo.beginPath ();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 1;
    lienzo.moveTo (x_inicial, y_inicial);
    lienzo.lineTo (x_final, y_final);
    lienzo.stroke ();
    lienzo.closePath();
    };
function dibujarTeclado (evento)// Aquí el párametro declarado  hcolorLinea los atributos y propiedades de addEventlis..
 
{
    //var of the function dibujarTeclado
    var colorLinea = "#da552f"
    //se hace cada 10 pixeles
    var movimiento =  5;
    
   
    //swich event
    switch (evento.keyCode)
    {
        case teclas.UP:
            //mi funcion que dibuja lineas y los parametros
            dibujarLineas (colorLinea, x, y, x, y - movimiento, papel);
            // la ecuacion que recuerda el ultimo movimiento
            y = y - movimiento;
       break;
        case teclas.DOWN:
            dibujarLineas (colorLinea, x, y, x, y + movimiento, papel);
            y = y + movimiento;
        break;
        case teclas.LEFT:
            dibujarLineas (colorLinea, x, y, x - movimiento, y, papel);
            x = x - movimiento;
        break;
        case teclas.RIGHT:
            dibujarLineas (colorLinea, x, y, x + movimiento, y, papel);
            x = x + movimiento;
        break;
        default:
            console.log ("tienes cara de chango");
        break;

    }
  
};   
