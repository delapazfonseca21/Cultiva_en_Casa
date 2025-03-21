document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById('caja-comentario');
    const overlay = document.getElementById('modal-overlay');
    const btnAbrir = document.getElementById('btn-agricultor');
    const btnCerrar = document.getElementById('cerrar-modal');


    btnAbrir.addEventListener('click', () => {
        modal.style.display = 'block';
        overlay.style.display = 'block';
    });


    function cerrarModal() {
        modal.style.display = 'none';
        overlay.style.display = 'none';
    }

    btnCerrar.addEventListener('click', cerrarModal);
    overlay.addEventListener('click', cerrarModal);


    document.getElementById('imagenes').addEventListener('change', function(event) {
        const preview = document.getElementById('preview-imagenes');
        preview.innerHTML = "";

        const files = event.target.files;
        if (files.length > 4) {
            alert("Solo puedes subir hasta 4 imágenes.");
            return;
        }

        Array.from(files).forEach(file => {
            const reader = new FileReader();
            reader.onload = function(e) {
                const img = document.createElement('img');
                img.src = e.target.result;
                preview.appendChild(img);
            };
            reader.readAsDataURL(file);
        });
    });
});

document.getElementById('enviar-consulta').addEventListener('click', function() {
    const modal = document.getElementById('caja-comentario');
    const overlay = document.getElementById('modal-overlay');
    const loader = document.getElementById('loader');
    const checkExito = document.getElementById('check-exito');

    // 🔹 Animación de cierre del modal
    modal.classList.add('modal-cerrar');

    setTimeout(() => {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        modal.classList.remove('modal-cerrar');

        // 🔹 Mostrar la animación de carga
        loader.style.display = 'block';

        setTimeout(() => {
            loader.style.display = 'none'; // 🔹 Ocultar el loader
            checkExito.style.display = 'block'; // 🔹 Mostrar el check verde
        }, 2000);
    }, 500);
});


