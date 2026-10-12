const nav = document.querySelector("nav");
const TOTAL = 6;
const rodape = document.querySelector("#rodape");
const lista = document.querySelector("#lista"); // confira o ID no HTML
const modal = document.querySelector("#modal");
const form = document.querySelector("#form-filme");
const filmesIniciais = [
    {
        "id": 1,
        "titulo": "A Origem ",
        "ano": 2010,
        "genero": "Ficção científica ",
        "poster": "https://image.tmdb.org/t/p/original/ms1bJvwa4BJycBakQ7afcedGlwY.jpg",
        "nota": 5,
        "status": "assistido",
        "comentario": "Revejo sempre."
    },
    {
        "id": 2,
        "titulo": "Parasita",
        "ano": 2019,
        "genero": "Suspense",
        "poster": "https://image.tmdb.org/t/p/original/bik2BZjmVjeE6LOZqtuTjb4jJPQ.jpg",
        "nota": 4,
        "status": "assistido",
        "comentario": ""
    },
    {
        "id": 3,
        "titulo": "O Auto da Compadecida ",
        "ano": 2000,
        "genero": "Comédia",
        "poster": "https://image.tmdb.org/t/p/original/y3IhuITELtprMhUd7bccu629rba.jpg",
        "nota": 5,
        "status": "assistido",
        "comentario": "Classico nacional."
    },
    {
        "id": 4,
        "titulo": "Duna",
        "ano": 2024,
        "genero": " Ficção científica ",
        "poster": "https://image.tmdb.org/t/p/original/obhGsx4PE9OzsVGtIfoLAIIWGNb.jpg",
        "nota": 4,
        "status": "assistindo",
        "comentario": ""
    },
    {
        "id": 5,
        "titulo": "Interestelar",
        "ano": 2014,
        "genero": "Ficção científica",
        "poster": "https://image.tmdb.org/t/p/original/tR1XVa5bxgdh2bRw2u0DzrgkO2l.jpg",
        "nota": 5,
        "status": "quero",
        "comentario": ""
    },
    {
        "id": 6,
        "titulo": "Cidade de Deus",
        "ano": 2002,
        "genero": "Drama",
        "poster": "https://image.tmdb.org/t/p/original/gfnXixcGC060QcG6JPxN6AMdVsq.jpg",
        "nota": 4,
        "status": "quero",
        "comentario": ""
    }
]

let filmes = [...filmesIniciais];

rodape.textContent = `Cinetrack © 2026 · ${TOTAL} filmes cadastrados.`;

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

const estrelas = (nota) => {
    let resultado = "";
    for (let i = 1; i <= 5; i++) {
        resultado += i <= nota ? "★" : "☆"
    }
    return resultado;
}

const gerarId = (lista) => Math.max(0, ...lista.map((f) => f.id)) + 1;

function criarCard(f) {
    const card = document.createElement("article");
    card.className = "card";
    card.dataset.id = f.id;
    
    const titulo = document.createElement("h2");
    titulo.textContent = f.titulo; // nunca HTML
    
    const ano = document.createElement("p");
    ano.textContent = f.ano;
    
    const genero = document.createElement("p");
    genero.textContent = f.genero;
    
    const poster = document.createElement("img");
    poster.src = f.poster;
    poster.alt = f.titulo;
    
    const nota = document.createElement("p");
    nota.textContent = estrelas(f.nota);
    
    const status = document.createElement("p");
    status.className = `badge ${f.status}`;
    status.textContent = rotuloStatus(f.status);
    
    const comentario = document.createElement("p");
    comentario.textContent = f.comentario;
    
    //Botão Editar
    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.className = "btn-editar";

    //Botão Remover
    const btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.className = "btn-remover";

    card.append(titulo, poster, ano, genero, nota, status, comentario, btnEditar, btnRemover);
    return card;
}

function renderizarCards(filmes){
   const frag = document.createDocumentFragment();
   filmes.forEach((f) =>
    frag.appendChild(criarCard(f)));
   lista.replaceChildren(frag);
}

renderizarCards(filmes);

lista.addEventListener("click", (e) => {
    const botao = e.target.closest(".btn-remover");
    if (!botao) return; // clicou em outra coisa
    if (!confirm("Remover este filme?")) return;
    const card = botao.closest(".card");
    const id = Number(card.dataset.id);
    filmes = filmes.filter((f) => f.id !== id);
    renderizarCards(filmes);
});

nav.addEventListener("click", (e) => {
    const botao = e.target.closest("button");
    if(!botao) return;
    nav.querySelector(".ativo").classList.remove("ativo");
    botao.classList.add("ativo");
    const status = botao.dataset.status;
    renderizarCards(filmes.filter((f) => status === "todos" || f.status === status));
})

function validarFilme(filme) {
    const erros = [];
    if (!filme.titulo) {
        erros.push("Título obrigatório");
    }
    if (filme.ano < 1888 || filme.ano > 2030) {
        erros.push("Ano inválido");
    }
    return { valido: erros.length === 0, erros };
}


form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const dados = Object.fromEntries(new FormData(form));
    
    dados.ano = Number(dados.ano); // vem string!
    dados.nota = Number(dados.nota);

    const { valido, erros } = validarFilme(dados);
    if (!valido) {
        alert(erros.join("\n")); 
        return;
    }

    // no submit, após validar:
    if (editandoId !== null) {
        filmes = filmes.map((f) =>
            f.id === editandoId ? { ...f, ...dados } : f);
    } else {
        filmes = [...filmes, {id: gerarId(filmes), ...dados }];
    }

    renderizarCards(filmes);
    fechar();
});


let editandoId = null; // null: adicionando
const abrir = () => modal.hidden = false;
const fechar = () => modal.hidden = true;
document.querySelector("header button").addEventListener("click", () => {
    editandoId = null;
    form.reset();
    abrir();
});

document.querySelector("#form-button-cancelar").addEventListener("click", () => {
    fechar();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
        fechar();
    }
});

lista.addEventListener("click", (e) => {
    const botao = e.target.closest(".btn-editar");
    if (!botao) return;
    
    const card = botao.closest(".card");
    editandoId = Number(card.dataset.id);

    console.log("Id do filme", editandoId);

    const f = filmes.find((x) => x.id === editandoId);

    form.elements.titulo.value = f.titulo;
    form.elements.ano.value = f.ano;
    form.elements.genero.value = f.genero;
    form.elements.poster.value = f.poster;
    form.elements.nota.value = f.nota;
    form.elements.status.value = f.status;
    form.elements.comentario.value = f.comentario;
    // ...preencha os demais campos...
    abrir();
});

