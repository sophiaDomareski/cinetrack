const badge = document.querySelector("#badge-primeiro-filme");
const nota = document.querySelector("#nota-primeiro-filme");
const TOTAL = 6;
const rodape = document.querySelector("#rodape");

rodape.textContent = `Cinetrack © 2026 · ${TOTAL} filmes cadastrados.`;

bage.textContent = rotuloStatus("quero");
nota.textContent = estrelas(4);

function rotuloStatus(status){
    if (status === "assistido"){
        return "Assistido";
    }
    if (status === "assistindo"){
        return "Assistindo";
    }
    if (status === "quero"){
        return "Quero Assistir";
    }
    //return status;
}

//funcao que copiei do slide e nao sei o contexto;
//const alvo = document.querySelector(".card .badge");
//alvo.textContent = rotuloStatus("assistido");

const estrelas = (nota) => {
    let resultado = "";
    for (let i = 1; i <= 5; i++){
        resultado += i <= nota ?  "★" : "☆"
    }
    return resultado;
}

console.log(rotuloStatus("quero"));
console.log(estrelas(3));

