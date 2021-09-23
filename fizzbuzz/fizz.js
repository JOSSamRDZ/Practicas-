
var operación = document.getElementById ("calcular");
    operación.addEventListener("click", fizzBuzz);
var rango_usuario= document.getElementById ("numeros");
var fizz = 3;
var buzz = 5; 


function fizzBuzz()
{
    var numeros = parseInt (rango_usuario.value) 
    for (var i= 1; i<=numeros; i++)
    {
        
        if (esDivisible (i,fizz))

         {
            document.write ("fizz");
         }
            
         
        if (esDivisible (i,buzz))
        {
            document.write ("buzz");
         
        } 
        if (!esDivisible (i,fizz) && !esDivisible (i,buzz))
        {
            document.write (i);
        }
        document.write ("<br />")
    }
    
    function esDivisible (num, divisor)
    {
        if (num % divisor==0)
        {
            return true;
        }
        else {
            return false;
        }

    }
    
}


