//asi se llama la libreria con la que vamos a trabajar.
// requite me traer la libreria express como una funcion completa que guardo dentro de la constante express, que luego 
//se va ejecutrar en una variable propia
const express = require ("express");
//a qui indicamos que vamos crear una aplicacion y una instancia de la libreria express
const aplicacion = express ();

//aqui vamos a contruir el GET, get es parecido al listener solo que colocamos por parametro la url que vamos abrir
//aqui declaro mis urls.
aplicacion.get ("/", inicio);
aplicacion.get ("/cursos",cursos);

function inicio (peticion, resultado) 

{
    resultado.send ("hola putos <strong> este es mi home jaja</strong>")
}


function cursos (peticion, resultado)
{
    resultado.send ("hola putos <strong> aqui le sigo como la ven </strong>")
}

aplicacion.listen (8989);