var divResultado = document.getElementById ("result");
var txt= document.getElementById ("userInput");
var btn= document.getElementById ("boton");
btn.addEventListener("click",clkON);



var div;
var bille;
var ok;

var Caja= [];
    Caja.push(new Billete(3,50)); // al lugar 0 le asigno el bojeto con valor 50 cantidad 3
    Caja.push(new Billete(2,20));
    Caja.push(new Billete(2,10));
    
    function clkON()
{
    var dinero=parseInt(txt.value);
    var Entrega = [];

if (dinero>0)
{   
    
    for (b of Caja)
    {
        div= Math.floor(dinero/b.Valor);
        if ( div>b.Cantidad)
        {
            bille=b.Cantidad;
            

        }
         else 
         {
             bille=div;
             
         }
         
         console.log(bille);
         Entrega.push(new Billete(bille,b.Valor));
        } 
         
}       

      

for (e of Entrega)
{
    e.mostrar() 
}


}   



