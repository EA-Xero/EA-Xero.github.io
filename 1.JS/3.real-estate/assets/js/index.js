const propiedadesJSON = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src:
      "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src:
      "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src:
      "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src:
      "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src:
      "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src:
      "./assets/img/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500
  }
]
  ;


//llenado de propiedades dinamico
section = document.querySelector(".propiedades")
propiedades = propiedadesJSON




//cantidad de casas que cumplen el filtro
total = propiedades.length
document.getElementById("total").innerHTML = total

//boton
btn = document.querySelector(".btn");
btn.addEventListener("click", () => {
  inp = [Number(document.querySelector(".ds1").value), Number(document.querySelector(".ds2").value), Number(document.querySelector(".ds3").value)];
  if (inp[0] <= 0 || inp[1] <= 0 || inp[2] <= 0) {
    alert("Faltan campos por rellenar");
    return
  }
  else {
    alert("Filtro aplicado");
    let propiedadesfiltradas = [];
    for (i of propiedades) {
      if (i.rooms >= inp[0] && i.m >= inp[1] && i.m <= inp[2]) {
        propiedadesfiltradas.push(i);
        total =""
        total = propiedadesfiltradas.length
        document.getElementById("total").innerHTML = total
        section.innerHTML = "";
        for (let i of propiedadesfiltradas) {
          section.innerHTML += `
        <div class="propiedad">
            <div class="img" style="background-image: url(${i.src})"></div>
            <section>
                <h5>${i.name}</h5>
                <div class="d-flex justify-content-between">
                    <p>Cuartos: ${i.rooms}</p>
                    <p>Metros: ${i.m}</p>
                </div>
                <p class="my-3">${i.description}</p>
                <button class="btn btn-info">Ver más</button>
            </section>
        </div> `
        }
      }
    }
  }
}
);



//ciclo for 
for (i of propiedades) {
  section.innerHTML += `
        <div class="propiedad">
            <div class="img" style="background-image: url(${i.src})"></div>
            <section>
                <h5>${i.name}</h5>
                <div class="d-flex justify-content-between">
                    <p>Cuartos: ${i.rooms}</p>
                    <p>Metros: ${i.m}</p>
                </div>
                <p class="my-3">${i.description}</p>
                <button class="btn btn-info ">Ver más</button>
            </section>
        </div>
    `
};
