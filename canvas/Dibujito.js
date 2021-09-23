// Text, box and event invoation
var texto = document.getElementById ("text_lineas");
var boton = document.getElementById ("botonsito");
boton.addEventListener ("click", dibujoByClick);
//Canvas invocation
var d= document.getElementById ("dibujito")
var lienzo = d.getContext("2d");

// constants definition 
const canvasSize = 600;
d.height = canvasSize;
d.width = canvasSize;

// functions definition
function dibujarLineas(color, x_inicial, y_inicial, x_final, y_final,)
    {
    lienzo.beginPath ();
    lienzo.strokeStyle= color;
    lienzo.moveTo (x_inicial, y_inicial);
    lienzo.lineTo (x_final, y_final);
    lienzo.stroke ();
    lienzo.closePath();
    }

function dibujoByClick  ()
{   //var of the lines definition
    var linesNumber = parseInt(texto.value);
    var yi, xf, yi2, xf2, xi, yf, xi2, yf2;
    var l = 0;
    var linesDistance = canvasSize/linesNumber;
    var colorsito = "#8B5018";
    

    // here cicle "for" draw the lines
 for (l = 0; l < linesNumber; l++)
 {   
    yi = l * linesDistance;
    xf = linesDistance * (l + 1);

    yi2 = l * linesDistance;
    xf2 = canvasSize - (l * linesDistance)

    xi = canvasSize - (l* linesDistance);
    yf = linesDistance * (l+1);
    
    xi2 = linesDistance * l;
    yf2 = linesDistance * (l + 1);
    
    dibujarLineas (colorsito, 0, yi, xf, canvasSize);
    dibujarLineas (colorsito, canvasSize, yi2, xf2, canvasSize);
    dibujarLineas (colorsito )
    dibujarLineas (colorsito, xi, 0, 0, yf);
    dibujarLineas (colorsito, xi2, 0, canvasSize, yf2);

    

}


}