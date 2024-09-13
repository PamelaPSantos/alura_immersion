function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");

let resultados = "";

for (let dado of dados) {
  resultados += `
        <div class="item-resultado">
          <h2><a href="#" target="_blank">${dado.nome}</a></h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <img src="${dado.img}">
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>`;
}

let input = document.getElementById("input");
if (input.value !== "Meredith Grey" && input.value !== "Cristina Yang" && input.value !== "Mark Sloan") {
  resultados = "Nenhum resultado encontrado";
}

section.innerHTML = resultados;
}


