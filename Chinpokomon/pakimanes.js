//clase 
class Pakiman
{
    constructor (n,v, a, t, s)
    {
        this.imagen = new Image ();
        this.nombre= n;
        this.vida= v;
        this.ataque= a
        this.tipo= t;
        this.sonido= s;
        

        this.imagen.src = imagenes[this.nombre];
    
    }
    hablar ()
    {
      console.log (this.sonido)
    }
    mostrar (){
      document.body.appendChild(this.imagen);
      document.write ("<p>");
      document.write ("<strong>" + this.nombre + "</strong><br>");
      document.write ("tipo : " + this.tipo + "<br>");
      document.write ("vida : " + this.vida + "<br>");
      document.write ("ataque : " + this.ataque + "<hr />");
      document.write ("</p>");
    }
    
    
   

    
} 