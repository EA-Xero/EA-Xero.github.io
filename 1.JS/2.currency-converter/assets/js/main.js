async function getapi(select) {
    try {
        let url = `https://mindicador.cl/api/${select}`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
    }
    catch (error) {
        aviso = document.getElementById("aviso");
        aviso.innerHTML = `Estimado usuario a habido un error, intente nuevamente, Tipo de error: ${error}`;
    }
}

btn = document.getElementById("btn")

btn.addEventListener("click", async () => {
    clp = Number(document.getElementById("pesos").value)
    select = document.getElementById("select").value
    if (select === "Elige una Moneda") {
        alert("Debe seleccionar una Moneda")
        return
    }
    else {
        info = await getapi(select)
        resultado = clp / info.serie[0].valor
        document.getElementById("total").innerHTML = `su conversion es: ${resultado.toFixed(2)} ${select}`
        const fechas = info.serie.map(item => item.fecha.slice(0, 10))
        const precio = info.serie.map(item => item.valor)
        const grafica = {
            type: "line",
            data: {
                labels: fechas.sort(),
                datasets: [{
                    label: select,
                    data: precio,
                    fill: false,
                    borderColor: "Red",
                    tension: 0.1
                }]
            }
        }
        new Chart (document.getElementById("myChart"), grafica)
    }
})

