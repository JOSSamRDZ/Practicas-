//
var d = document.getElementById ("papel_para_dibujar");
var imagen = d.getContext ("2d");
var l= 0;
var xi,yi,xf,yf,;

//const
const colorcito= "grey";
const re_a = 10;
const re_b = 1;
const lineasA = 20;



//functions 
function dibujarLineas(color, x_inicial, y_inicial, x_final, y_final,lienzo)
    {
    lienzo.beginPath ();
    lienzo.strokeStyle= color;
    lienzo.lineWidth= 2;
    lienzo.moveTo (x_inicial, y_inicial);
    lienzo.lineTo (x_final, y_final);
    lienzo.stroke ();
    lienzo.closePath();
    }
//cicle 
for (l = 0; l < lineasA; l++)

{  
   //arriba
   xf = 150 + (10*l);
   dibujarLineas (colorcito, 300, 300, xf, 0, imagen)
   //abajo 1
   xi = 100 + (l*10);
   yf = 300 + (l*10);
   dibujarLineas (colorcito, xi, 300, 300, yf , imagen)
   //abajo 2

  

}  
//funtions execution
    //arriba
dibujarLineas (colorcito, 300, 300, 150, 0, imagen);
dibujarLineas (colorcito, 300, 300, 450, 0, imagen);
    //izquierda 
dibujarLineas (colorcito, 300,300, 100, 200 , imagen);
dibujarLineas (colorcito, 300,300, 100, 300 , imagen);
    //derecha 
dibujarLineas (colorcito, 300,300, 500, 200 , imagen);
dibujarLineas (colorcito, 300,300, 500, 300 , imagen);

//ABAJO 1 Y 2
dibujarLineas (colorcito, 100,300, 300, 310 , imagen);
dibujarLineas (colorcito, 110,300, 300, 320, imagen);

dibujarLineas (colorcito, 500, 300 , 300, 310, imagen)
dibujarLineas (colorcito, 490, 300 , 300, 320, imagen)