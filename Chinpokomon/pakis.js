//arrays
var imagenes = []
imagenes ["Charizard"]= "chari.png"
imagenes ["Blastois"]= "blasto.png"
imagenes ["Venasaur"]= "venu.png"
imagenes ["Zapata"]= "apa.png"
imagenes ["Gigi"]= "gigi.png"

//pakiman array
var coleccion = []
coleccion.push (new Pakiman ("Charizard", 100, 50, "fuego"));
coleccion.push (new Pakiman ("Blastois", 100, 30,"agua"));
coleccion.push (new Pakiman ("Venasaur", 100, 60, "planta"));
coleccion.push (new Pakiman ("Zapata",200, 75, "tierra", "tierras tierras"));
coleccion.push (new Pakiman ("Gigi", 600, 300, "mistico"));



//funcion que me muestra los pakimanes en document.body

for (var paki of coleccion)
{
  paki.mostrar ()
}
for (var x in coleccion [0])

{
  console.log (x)
}
