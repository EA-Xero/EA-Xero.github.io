/*Visualizar Certificados*/
let botonesVisualizarBTN = document.getElementsByClassName('VisualizarBTN');
const visualizador = document.getElementById("visualizador")
for (let i = 0; i < botonesVisualizarBTN.length; i++) {
    botonesVisualizarBTN[i].addEventListener('click', function () {
        const cardElement = this.closest('.card');
        const ruta = cardElement.querySelector('.ruta').innerHTML.trim();
        console.log(ruta)
        visualizador.setAttribute("src", ruta)
    });
}

/*Descargar Certificados*/
let botonesDescargarBTN = document.getElementsByClassName('DescargarBTN');
for (let i = 0; i < botonesDescargarBTN.length; i++) {
    botonesDescargarBTN[i].addEventListener('click', function () {
        const cardElement = this.closest('.card');
        const ruta = cardElement.querySelector('.ruta').textContent.trim();
        const link = document.createElement('a');
        link.href = ruta;
        link.download = ruta.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}
