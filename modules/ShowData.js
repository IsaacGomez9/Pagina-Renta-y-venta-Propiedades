export const ShowData = (data, contenedor) => {
  contenedor.innerHTML = ""

  data.forEach(casa => {
    const { img, Name, Type, Ubicacion, id } = casa

    contenedor.innerHTML += `
        <div class="col">
              <div class="card h-100">
                <img src="${img}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p>${Type}</p>
                  <h6 class="card-title">${Name}</h6>
                 <img src="${Ubicacion}" class="w-50">
                 <div class="d-flex  mt-2 justify-content-around">
                   <img src="./images/beds.svg" class="w-25">
                   <img src="./images/batsh 22.svg" class="w-25">
                   <img src="./images/sqff.svg" class="w-25">
                 </div>
                 <div class=" w-25 m-auto mt-3">
                 <button type="button" class="btn btn-info m-auto text-center" id="${id}" style="background-color: white;">Info</button>
                 </div>
                </div>
              </div>
            </div>
        `
  })
}

export const ShowData2 = (data, contenedor) => {
  contenedor.innerHTML = ""
 
    const { img, Name, Ubicacion, Camas, Baños,
      Tamaño, Inteligente, Parqueadero, Piscina,
      Seguridad_Pri, Centro_Medico, Biblioteca,
      King_Size, Juegos_Para_Niños, TipoArr, Price, Type, id} = data

    contenedor.innerHTML = `
       <div id="carouselExampleSlidesOnly" class="carousel slide w-75 m-auto " data-bs-ride="carousel">
       <div class="carousel-inner  h-75">
         <h1 class="text-center">${TipoArr}</h1>
         <div class="carousel-item active ">
         <div class=" w-50 m-auto mt-2 text-center">
         <button type="button" class="btn btn-danger " id="${id}">Comprar</button>
         <button type="button" class="btn btn-success " id="${id}">Favoritos</button>
         </div class="">
           <img src="${img}" class="d-block w-50 m-auto mt-4 img_2" alt="..." style="height: 300px !important;;">
         </div>
        
       </div>
       
     </div>
     <div class="container mt-5">
       <div class="row">
         <div class="col text-center">
           <h3>Precio</h3>
           <p>$${Price}</p>
           
         </div>
         <div class="col text-center">
           <h3>Area</h3>
       <p>${Tamaño}M2</p>
         </div>
         <div class="col text-center">
           <h3>Locacion</h3>
       <img src="${Ubicacion}">
         </div>
         <div class="col text-center">
           <h3>Propiedad</h3>
           <p>${Type}</p>
         </div>
         <div class="col text-center">
           <h3>Habitaciones</h3>
           <p >5</p>
         </div>
         <div class="col text-center">
           <h3>Baños</h3>
           <p>${Baños}</p>
         </div>
       </div>
       <div class="row">
         <div class="col text-center">
           <h3 > Inteligente</h3>
           <p>${Inteligente}</p>
           
         </div>
         <div class="col text-center">
           <h3>Parqueadero</h3>
       <p>${Parqueadero}</p>
         </div>
         <div class="col text-center">
           <h3>Piscina</h3>
           <p>${Piscina}</p>
         </div> 
         <div class="col text-center">
           <h3>Seguridad </h3>
           <p>${Seguridad_Pri}</p>
         </div>
         <div class="col text-center">
           <h3>Medico</h3>
           <p >${Centro_Medico}</p>
         </div>
         <div class="col text-center">
           <h3>Biblioteca </h3>
           <p>${Biblioteca}</p>
         </div>
       </div>
     </div>
   
   <div class="container w-75 d-flex mt-5 description">
     <div class=" h-75 m-auto">
       <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eligendi possimus dignissimos odio voluptate ipsam ipsum vero molestias aspernatur, ipsa, atque dicta reprehenderit, consequatur nesciunt assumenda quaerat unde quos a.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo eligendi possimus dignissimos odio voluptate ipsam ipsum vero molestias aspernatur, ipsa, atque dicta reprehenderit, consequatur nesciunt assumenda quaerat unde quos a.  </p>
     </div>
     <div>
       <img src="../images/apartments plan Sktch.png" class="img_2">
     </div>
   </div>
       
       `
  
}

export const ShowData3 = (data, contenedor) => {
  contenedor.innerHTML = ""

  data.forEach(casa => {
    const { img, Name, Type, Ubicacion, id } = casa

    contenedor.innerHTML += `
        <div class="col">
              <div class="card h-100">
                <img src="${img}" class="card-img-top" alt="..." />
                <div class="card-body">
                  <p>${Type}</p>
                  <h6 class="card-title">${Name}</h6>
                 <img src="${Ubicacion}" class="w-50">
                 <div class="d-flex  mt-2 justify-content-around">
                   <img src="../images/beds.svg" class="w-25">
                   <img src="../images/batsh 22.svg" class="w-25">
                   <img src="../images/sqff.svg" class="w-25">
                
              </div>
            </div>
        `
  })
}