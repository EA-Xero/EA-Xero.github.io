function Switch(key) {
    if (key === "registro") {
        document.getElementById("iniciar_sesion").style.display = "none";
        document.getElementById("registrarse").style.display = "block";
    } else if (key === "sesion") {
        document.getElementById("registrarse").style.display = "none";
        document.getElementById("iniciar_sesion").style.display = "block";
    }
    else{
        alert("Error: Opción no válida");
    }
}