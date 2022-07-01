import PostData from "../helpers/PostData.js";

let btnse_creo = document.getElementById('se_creo')
let form = document.getElementById('form')
let URL = "http://localhost:3000/Propiedades"

form.addEventListener('submit',async(e)=>{
    e.preventDefault()
    let img = document.getElementById('img').value
    let Ubicacion = document.getElementById("Ubicacion").value
    let Name = document.getElementById('Name').value
    let precio = document.getElementById('precio').value
    let tipo = document.getElementById('tipo').value
    let Habitaciones = document.getElementById('Habitaciones').value
    let baños = document.getElementById('baños').value
    let parqueadero = document.getElementById('parqueadero').value
    let Tamaño = document.getElementById('Tamaño').value
    let Inteligente = document.getElementById('Inteligente').value
    let Seguridad_Pri = document.getElementById('Seguridad_Pri').value
    let Piscina = document.getElementById('Piscina').value
    let Biblioteca = document.getElementById('Biblioteca').value
    let Centro_Medico = document.getElementById('Centro_Medico').value
    let TipoArr = document.getElementById('TipoArr').value
    
    let NewApto = {
        id :  crypto.randomUUID(),
        img : img,
        Price : precio,
        Type : tipo,
        Camas : Habitaciones,
        Baños: baños,
        Name: Name,
        Parqueadero : parqueadero,
        Ubicacion: Ubicacion,
        Tamaño: Tamaño,
        Inteligente: Inteligente,
        Seguridad_Pri: Seguridad_Pri,
        Piscina:Piscina,
        Biblioteca,
        Centro_Medico,
        TipoArr: TipoArr
    }
    console.log(NewApto)
    await PostData(URL, NewApto)
    window.location.href = '../index.html'
})

btnse_creo.addEventListener("click", ()=>{
    alert("se añadio la propiedad")
})