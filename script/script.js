import GetData from "../helpers/GetData.js";
import {ShowData} from "../modules/ShowData.js";


let URL_PROP = "http://localhost:3000/Propiedades"
let inyectar = document.getElementById('inyectar')

document.addEventListener("DOMContentLoaded", async () => {
    let Data = await GetData(URL_PROP)


    ShowData(Data, inyectar)
})

document.addEventListener('click', async (e) => {

    let Data = await GetData(URL_PROP)
    let idBtn = e.target.id
    const botonClass = e.target.classList.contains('btn-info')
    
    if(botonClass){
        let buscar = Data.find(casa => casa.id == idBtn)
        localStorage.setItem('apto', JSON.stringify(buscar))
        window.location.href = '../pages/Detalle.html'
    }
})