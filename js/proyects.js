const btnVerProyectos = document.querySelector('#btnver');
const proyectosHTML = document.querySelector('#proyectslist');

btnVerProyectos.addEventListener('click', async () => {
  btnVerProyectos.style.display = 'none';
  const datos = await pedirProyectos();
  datos.forEach((element) => {
    const { img, title, text, github, view } = element;
    return (proyectosHTML.innerHTML += `
    <div class="col-md-4 animation">
          <div class="card mb-3 bg-transparent" style="max-width: 540px">
            <div class="row g-0">
              <div class="col-md-4">
                <img
                  src="${img}"
                  class="img-fluid rounded-start"
                  alt="Imagen de proyecto"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${title}</h5>
                  <p class="card-text">
                    ${text}
                  </p>
                  <a
                    href="${github}"
                    class="btn btn-primary"
                    target="_blank"
                    ><i class="fa-brands fa-github fa-xl"></i
                  ></a>
                  <a
                    href="${view}"
                    class="btn btn-primary"
                    target="_blank"
                    ><i class="fa-solid fa-eye fa-xl"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>
        </div>`);
  });
});

async function pedirProyectos() {
  try {
    const res = await fetch('/js/proyectos.json');
    const data = await res.json();
    return data;
  } catch (error) {
    return [];
  }
}
