
// Aquí declaro los puertos que voy a usar y les asigno un nombre
int rojo = 5;
int rojo2 = 6;
//Una variable que despues voy a llamar en el loop
int milisegundos= 300;
//por aquí declaro los puertos qye voy a usar y si van a ser salidas o entradas
void setup ()
{

pinMode (rojo, OUTPUT);
pinMode (rojo2, OUTPUT);
}

//En esta función corre mi programa
void loop ()
{

  digitalWrite (rojo, HIGH );
  digitalWrite (rojo2, LOW );
  delay (200);
  digitalWrite (rojo, LOW );
  digitalWrite (rojo2, HIGH );
  delay (milisegundos*2);

}
