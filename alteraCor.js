// Projeto: Trocar a cor de fundo usando o método setinterval
// refazer só com o set interval que já é um loop

const body = document.getElementsByTagName('body')[0];
let coresTeste = ['red','green','blue'];
let i = 0

//pq não funciona?

function atualizaContador(){
    let elementContador = document.getElementById('contador');
    contador.innerText = coresTeste[i];
};

function mudaCor(){
        body.style.backgroundColor = coresTeste[i];
        atualizaContador();
        i++;  
    if (i==3) {i = 0};    
};
    
setInterval (mudaCor,1000);

//