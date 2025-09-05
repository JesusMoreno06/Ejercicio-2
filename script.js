console.log("Página de noticias tecnológicas cargada ✅");

document.querySelectorAll(".noticia h2").forEach(titulo => {
    titulo.addEventListener("click", () => {
        alert("Abriste la noticia: " + titulo.textContent);
    });
});