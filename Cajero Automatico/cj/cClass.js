

class Billete
{
    constructor (qt,v)
    {
        this.Cantidad = qt;
        this.Valor= v;
    }
    
    mostrar ()
    {
        divResultado.innerHTML += "Se ha entregado " + this.Cantidad + " billete(s) de " + this.Valor +" <br/>";
    }
}

// 