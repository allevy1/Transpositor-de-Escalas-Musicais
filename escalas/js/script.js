const inputEscala = document.querySelector("#pesquisa");
const button = document.querySelector("#button");
const nota = document.querySelectorAll(".nota");

const afinação = {
  Eb: 3,
  Bb: 2,
};
const instrumentoBb = afinação.Bb;
const instrumentoEb = afinação.Eb;
let amizade = "sax";

const escala = [
  "C",
  "C#",
  "D",
  "D#",
  "E",
  "F",
  "F#",
  "G",
  "G#",
  "A",
  "A#",
  "B",
];
const resposta = [];

let marca;

nota.forEach(function (a, b) {
  a.addEventListener("click", () => {
    if (marca) {
      marca.style.backgroundColor = "black";
      marca.style.color = "white";
    }
    a.style.backgroundColor = "white";
    a.style.color = "black";
    marca = a;
    montarEscala(a.innerText);
  });
});

function montarEscala(nota) {
  // const copy = escala;
  // const novaEscala = [...copy.splice(escala.indexOf("G#"),escala.length+1),...copy];

  //SOLUÇÃO
  //Montando a escala Maior Natural
  const copy = [...escala];
  const position = escala.indexOf(nota);
  const startArray = copy.splice(position, escala.length + 1);
  const novaEscala = [...startArray, ...copy];
  const escalaMaior = [
    novaEscala[0],
    novaEscala[2],
    novaEscala[4],
    novaEscala[5],
    novaEscala[7],
    novaEscala[9],
    novaEscala[11],
  ];
  const spanNatural = document.querySelector("span#spanNatural");
  spanNatural.innerHTML = "";
  escalaMaior.forEach((a) => {
    const p = document.createElement("p");
    p.classList.add("notaNatural");
    p.innerHTML = `${a}`;
    spanNatural.appendChild(p);
  });

  //Montando a escala maior de Bb(Sí Bemol)
  const startArrayBb = novaEscala.slice(10);
  const endArrayBb = novaEscala.slice(0, 10);
  const escalaBb = [...startArrayBb, ...endArrayBb];
  const escalaMaiorBb = [
    escalaBb[0],
    escalaBb[2],
    escalaBb[4],
    escalaBb[5],
    escalaBb[7],
    escalaBb[9],
    escalaBb[11],
  ];
  const spanBb = document.querySelector("span#spanBb");
  spanBb.innerHTML = "";
  escalaMaiorBb.forEach((a) => {
    const p = document.createElement("p");
    p.classList.add("notaBb");
    p.innerHTML = `${a}`;
    spanBb.appendChild(p);
  });

  // Montando a escala maior de Eb(Mi bemol)
  const startArrayEb = novaEscala.slice(9);
  const endArrayEb = novaEscala.slice(0, 9);
  const escalaEb = [...startArrayEb, ...endArrayEb];
  const escalaMaiorEb = [
    escalaEb[0],
    escalaEb[2],
    escalaEb[4],
    escalaEb[5],
    escalaEb[7],
    escalaEb[9],
    escalaEb[11],
  ];
  const spanEb = document.querySelector("span#spanEb");
  spanEb.innerHTML = "";
  escalaMaiorEb.forEach((a) => {
    const p = document.createElement("p");
    p.classList.add("notaEb");
    p.innerHTML = `${a}`;
    spanEb.appendChild(p);
  });
}
