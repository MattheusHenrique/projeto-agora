//Variaveis da inscriçao
const enviarSub = document.querySelector("button#enviarSub");
const boxSub = document.querySelector("#boxSub");
const nome = document.querySelector("input#conteudoNome");
//Variaveis de controle do onclick.countDown 
//- Não permitem mais de 1 click sem ter terminado o laço
var i = 0;
var j = 0;
//Numero do inscrito
var aux = 0;
//Globais de inicializaçao- nao alterar
var tempo = "03:00";
var format;


//cria objeto subscription = Sub
function Sub(nome, tempo, minutos, aux) {
    this.nome = nome;
    this.tempo = tempo;
    this.minutos = minutos;
    this.aux = aux;
}


enviarSub.onclick = function () {
    //cria nova div com informaçoes de nome, tempo de fala, e a hora
    var sub = new Sub(nome.value, tempo, aux);
    var novaSub = document.createElement("div");
    novaSub.className = "Subs";
    //formata o horario inicial
    novaSub.innerHTML = `<span class="nomeSubs">${sub.nome}</span>
    <span class="tempoSubs" id="tempo${aux}">${sub.tempo}</span>`
    boxSub.appendChild(novaSub);
    //conta numero de inscritos
    aux++;
    //Limpa input
    document.querySelector("#conteudoNome").innerHTML = '';

}


//Variaveis do countDown
const start = document.querySelector("button#startCountDown");
var miliseg = 1000;
var cronometro;


//Inicia contagem do countDown
start.onclick = function () {
    if (j === i) {
        cronometro = setInterval(countDown, miliseg);
        seg = 60;
        min = 2;
        j++;
    }

}

function countDown() {
    seg--;

    if (seg == 0) {
        seg = 59;
        min--;
        if (min <= 00) {
            seg = "0";
            var alternaId = `span#tempo${i}`;
            var format = (min < 10 ? '0' + min : min) + ':' + (seg < 10 ? '0' + seg : seg);
            document.querySelector(alternaId).innerText = format;
            clearInterval(cronometro);
            i++;
            return;
        }
    }
    //Passa o id da classe tempoSubs
    var alternaId = `span#tempo${i}`;
    //formata o tempo
    var format = (min < 10 ? '0' + min : min) + ':' + (seg < 10 ? '0' + seg : seg);
    document.querySelector(alternaId).innerText = format;

}
