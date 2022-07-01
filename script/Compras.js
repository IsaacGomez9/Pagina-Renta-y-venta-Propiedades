import { ShowData3 } from "../modules/ShowData.js";



document.addEventListener("DOMContentLoaded", async () => {
    let Data = JSON.parse(localStorage.getItem("Carrito"))


    ShowData3(Data, inyectar)
})