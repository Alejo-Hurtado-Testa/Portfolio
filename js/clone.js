const copy = document.querySelector('#logo-slide').cloneNode(true);
const logos = document.querySelector('#logos-div');
logos.appendChild(copy);

/* CODIGO PARA CLONAR UN DIV Y SUS CHILDS, LUEGO AGREGAMOS ESE DIV (copy) COMO OTRO HIJO AL DIV PADRE (logos) */
