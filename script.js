function pesquisar(){
    let pesquisa = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

let resultado = "";
let titulo = "";
let descricao = "";
campoPesquisa = campoPesquisa.toLowerCase();
for(let dado of lista){
titulo = dado.titulo.toLocaleLowerCase();
descricao = dado.descricao.toLocaleLowerCase();


    if(!campoPesquisa){
        pesquisa.innerHTML = "<p>Nada foi encontrado</p>";

        return
    }
    if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
    resultado += `<div class="item-resultado">
    <h2><a href="${dado.link1}" target="_blank">${dado.titulo}</a>
    </h2>
    <p class="descricao-meta">${dado.descricao}</p>
    <a href="${dado.link2}" target="_blank">Mais informações</a>
</div>`;

};

};
if(!resultado){
    resultado = "<p>Nada foi encontrado</p>";

}
pesquisa.innerHTML = resultado;

}


