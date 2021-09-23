//Canvas 
var vp= document.getElementById ("villaplatzi");
var papel = vp.getContext ("2d");
document.addEventListener ("keydown", moverPollo);

//variables para el pollo
var pollox= 400;
var polloy= 400;


//Image class

var fondo =
{
    url: "tile.png",
    cargaOk: false
}

fondo.imagen= new Image();
fondo.imagen.src = fondo.url; 
fondo.imagen.addEventListener ("load", cargarfondo);

//objetos
var vaca =
{
    url: "vaca.png",
    cargaOk: false
};

vaca.imagen = new Image ();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener ("load", cargarVaca)
var cantidadVacas = numerosRandoms (0,5);



var cerdo= 
{
    url: "cerdo.png",
  cargaOk: false,
};
cerdo.imagen= new Image ();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener ("load",cargarCerdo);
var cantidadCerdos = numerosRandoms (0,3);

var pollo=
{
    url: "pollo.png",
    cargaOk: false,
};

pollo.imagen= new Image ();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener ("load",cargarPollo);
var cantidadPollos = 1;


//funtions 
function moverPollo (evento)
{  
    var movimiento = 20;
    var teclas = 
    {
        UP: 38,
        DOWN: 40,
        LEFT: 37,
        RIGHT: 39
    }
    switch (evento.keyCode)
    {
        
        case teclas.UP:
            polloy = polloy - movimiento;
            dibujar ();
        break;
        case teclas.DOWN:
            polloy= polloy + movimiento;
            dibujar ();
        break;
        case teclas.LEFT:
            pollox = pollox - movimiento;
            dibujar ();
            console.log (teclas.LEFT)
        break;
        case teclas.RIGHT:
            pollox = pollox + movimiento;
            dibujar ()
            break;
        default:
            alert ("precionas las teclas correctas porfavor");
            break;
    }
}
function dibujar ()
{
   if (fondo.cargaOk)
   {
       papel.drawImage (fondo.imagen, 0, 0);
   }
   if (vaca.cargaOk)

   {
       
       console.log (cantidadVacas);
       for (var v =0; v< cantidadVacas; v++)
       {
        vx = numerosRandoms (0, 3);
        vy = numerosRandoms (0,3)
        vx = vx* 80;
        vy = vy* 80;
        papel.drawImage (vaca.imagen, vx, vy)
       }
       if (cerdo.cargaOk)
       {
          
           for (var c = 0; c< cantidadCerdos; c++)
           {
               cx= numerosRandoms (0,2);
               cy= numerosRandoms (0, 2);
               cx= cx * 120;
               cy= cy * 120;
               papel.drawImage (cerdo.imagen, cx, cy);
           }
        if (pollo.cargaOk) 
        {
            papel.drawImage (pollo.imagen, pollox, polloy);
        }
       }
   
       
   }
   
}

function cargarfondo ()
{
 fondo.cargaOk = true;
 dibujar ();
}
function cargarVaca ()
{
    vaca.cargaOk = true;
    dibujar ()
    
}

function cargarCerdo ()
{
    cerdo.cargaOk = true;
    
    dibujar ()
}

function cargarPollo ()
{
    pollo.cargaOk = true;
    dibujar ()
}



function numerosRandoms (min, maxi)
 {
     var resultado;
     resultado = Math.floor (Math.random () * (maxi - min + 1 ))+1;
     return resultado;
}

