import { ShowData2 } from "../modules/ShowData.js";

let contenedor = document.getElementById('inyectar')
let Comprar = document.getElementById('Comprar')

document.addEventListener('DOMContentLoaded', async () => {
    let data = JSON.parse(localStorage.getItem('apto'))

    ShowData2(data, contenedor)
})

document.addEventListener('click', (e) => {
    let Compras = []
    let Data = JSON.parse(localStorage.getItem('apto'))
    Compras.push(Data)
    let idBtn = e.target.id
    const botonClass = e.target.classList.contains('btn-danger')
    const botonClass2 = e.target.classList.contains('btn-success')
    if (botonClass) {
        let buscar = Compras.find(casa => casa.id == idBtn)
        localStorage.setItem('Comprar', JSON.stringify(buscar))
        alert("se ha añadido con exito")
        AgregarCarro()
    }else if(botonClass2){
        let buscar = Compras.find(casa => casa.id == idBtn)
        localStorage.setItem('Favoritos', JSON.stringify(buscar))
        alert("se añadio a Favoritos")
        AgregarFavoritos()
    }
    
    
})

const AgregarCarro = ()=>{
    let InfoLs = JSON.parse(localStorage.getItem('Comprar'))
    let MyAptopArray = JSON.parse(localStorage.getItem('Carrito')) || []
    MyAptopArray.push(InfoLs)
    console.log(MyAptopArray)
    localStorage.setItem('Carrito', JSON.stringify(MyAptopArray))
}


const AgregarFavoritos =()=>{
    let InfoLs2 = JSON.parse(localStorage.getItem('Favoritos'))
    let MyAptopArray2 = JSON.parse(localStorage.getItem('CarritoF')) || []
    MyAptopArray2.push(InfoLs2)
    console.log(MyAptopArray2)
    localStorage.setItem('CarritoF', JSON.stringify(MyAptopArray2))


}




