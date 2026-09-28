
/* const badge = document.querySelector("#badge-primeiro-filme");
const nota = document.querySelector("#nota-primeiro-filme"); */
const TOTAL = 6;
const rodape = document.querySelector("#rodape");
const filmesIniciais = [
    {
        "id": 1,
        "titulo": "A Origem ",
        "ano": 2010,
        "genero": "Ficção científica ",
        "poster": "https://placehold.co/200x300?text=A+Origem",
        "nota": 5,
        "status": "assistido",
        "comentario": "Revejo sempre."
    },
    {
        "id": 2,
        "titulo": "Parasita",
        "ano": 2019,
        "genero": "Suspense",
        "poster": "https://placehold.co/200x300?text=Parasita",
        "nota": 4,
        "status": "assistido",
        "comentario": ""
    },
    {
        "id": 3,
        "titulo": "O Auto da Compadecida ",
        "ano": 2000,
        "genero": "Comédia",
        "poster": "https://placehold.co/200x300?text=O+Auto+da+Compadecida",
        "nota": 5,
        "status": "assistido",
        "comentario": "Classico nacional."
    },
    {
        "id": 4,
        "titulo": "Duna: Parte Dois",
        "ano": 2024,
        "genero": " Ficção científica ",
        "poster": " https://placehold.co/200 x300 ? text = Duna +2",
        "nota": 4,
        "status": "assistindo",
        "comentario": ""
    },
    {
        "id": 5,
        "titulo": "Interestelar",
        "ano": 2014,
        "genero": "Ficção científica",
        "poster": "https://placehold.co/200x300?text=Interestelar",
        "nota": 5,
        "status": "quero",
        "comentario": ""
    },
    {
        "id": 6,
        "titulo": "Cidade de Deus",
        "ano": 2002,
        "genero": "Drama",
        "poster": "https://placehold.co/200x300?text=Cidade+de+Deus",
        "nota": 4,
        "status": "quero",
        "comentario": ""
    }
]
rodape.textContent = `Cinetrack © 2026 · ${TOTAL} filmes cadastrados.`;

/* badge.textContent = rotuloStatus("quero");
nota.textContent = estrelas(4); */

function rotuloStatus(status) {
    if (status === "assistido") {
        return "Assistido";
    }
    if (status === "assistindo") {
        return "Assistindo";
    }
    if (status === "quero") {
        return "Quero Assistir";
    }
    //return status;
}

//funcao que copiei do slide e nao sei o contexto;
//const alvo = document.querySelector(".card .badge");
//alvo.textContent = rotuloStatus("assistido");

const estrelas = (nota) => {
    let resultado = "";
    for (let i = 1; i <= 5; i++) {
        resultado += i <= nota ? "★" : "☆"
    }
    return resultado;
}

console.log(rotuloStatus("quero"));
console.log(estrelas(3));

function renderizarCards(filmes){
   const cards = filmes.map((f) =>
    `<article class="card" data-id="${f.id}"> 
        <img src="${f.poster}" alt="Pôster de ${f.titulo}">
        <h2>${f.titulo}</h2> 
        <p>${f.ano} · ${f.genero}</p>
        <div class="nota">${estrelas(f.nota)}</div>
        <span class="badge ${f.status}>${rotuloStatus(f.status)}</span>
        <button><div class="acoes">Editar</div></button>
        <button><div class="acoes">Remover</div></button>
    </article>
    `).join(""); 
    document.querySelector("#lista").innerHTML = cards;
}
renderizarCards(filmesIniciais);