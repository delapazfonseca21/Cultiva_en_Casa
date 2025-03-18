const api_url = 'https://delapazfonseca21.github.io/data-library/data.json';

async function cargarLibros() {
    const respuesta = await fetch(api_url, {
        method: 'GET'
    });
    const data = await respuesta.json();

    const biblioteca = document.getElementById('container-blog');

    for (const libroData of data) {
        // Crear contenedor del libro
        const libro = document.createElement('div');
        libro.className = 'blog';

        // Crear descripción
        const description = document.createElement('p');
        description.textContent = libroData.description;

        // Crear enlace
        const link = document.createElement('a');
        link.href = libroData.source;
        link.target = "_blank"; 

        // Crear botón
        const btn = document.createElement('button');
        btn.textContent = 'Leer más';
        btn.className = 'btn';

        // Estructurar los elementos
        link.appendChild(btn);
        libro.appendChild(description);
        libro.appendChild(link);

        // ✅ Agregar cada libro a la biblioteca (sección de libros)
        biblioteca.appendChild(libro);
    }

}

cargarLibros();
