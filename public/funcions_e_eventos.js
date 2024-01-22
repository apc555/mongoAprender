async function preguntarDatos(){
    console.log("hola");
    let datosLeidos = await fetch("/lecturadatos");
    let datosJson = await datosLeidos.json();
    
    console.log("datos recibidos:", datosJson);
    
}

async function lerDatos(){

}

export { preguntarDatos }