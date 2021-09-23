// Entradas del usuario

var dinero = document.getElementById ("Cantidad");
var operación = document.getElementById ("operación");
operación.addEventListener ("clik", darDinero);

// variables 
var dinero = 0;
var div = 0;
var papeles = 0;

//arreglo para los objetos Billetes
var caja = [];
caja.push ( new billetes (50, 3));
caja.push ( new billetes (20, 2));
caja.push ( new billetes (10, 2));

//arreglo para la entrega de efectivo 
entrega = [];

function darDinero ()
{
    dinero.value = parseInt ()

    for (var b of caja)
    {
       if (dinero > 0)
       {
            div= Math.floor (dinero / b.valor)
           
       }
       if (div > b.cantidad)
        {
             papeles = b.cantidad;
       
        }
        else 
        {
            papeles= div
        }
        
        entregado.push( new Billete(b.valor, papeles) );
        dinero = dinero - (b.valor * papeles);
    }

    if(dinero > 0)
    {
      resultado.innerHTML = "Soy un cajero malo, he sido malo y no puedo darte esa cantidad :(";
    }

    else 
    {
        for (e of entrega)
        {
            resultado.innerHTML += e.cantidad + " billetes de $" + e.valor + "<br />";
        }
    }

}