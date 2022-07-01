import PostData from "../helpers/PostData.js";
let form = document.getElementById('form')
let URL = "http://localhost:3000/Users"

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value

    let infoUser = {
        id: crypto.randomUUID(),
        name,
        email,
        password
    }
    console.log(infoUser)

   await PostData(URL,infoUser )

   window.location.href = '../pages/Login.html' 

})