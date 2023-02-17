function escolheGuari() {
  document.getElementById("Guari").style.borderColor = "green";
  document.getElementById("salada").style.borderColor = "white";
  document.getElementById("frango").style.borderColor = "white";
  burguer = "HamburGuari";
}
function escolheSalada() {
  document.getElementById("salada").style.borderColor = "green";
  document.getElementById("Guari").style.borderColor = "white";
  document.getElementById("frango").style.borderColor = "white";
  burguer = "X-Salada";
}
function escolheFrango() {
  document.getElementById("frango").style.borderColor = "green";
  document.getElementById("Guari").style.borderColor = "white";
  document.getElementById("salada").style.borderColor = "white";
  burguer = "Frango";
}
function escolheBP() {
  document.getElementById("bp").style.borderColor = "green";
  document.getElementById("bm").style.borderColor = "white";
  document.getElementById("bg").style.borderColor = "white";
  document.getElementById("br").style.borderColor = "white";
  batata = "Batata Pequena";
}
function escolheBM() {
  document.getElementById("bp").style.borderColor = "white";
  document.getElementById("bm").style.borderColor = "green";
  document.getElementById("bg").style.borderColor = "white";
  document.getElementById("br").style.borderColor = "white";
  batata = "Batata Média";
}
function escolheBG() {
  document.getElementById("bp").style.borderColor = "white";
  document.getElementById("bm").style.borderColor = "white";
  document.getElementById("bg").style.borderColor = "green";
  document.getElementById("br").style.borderColor = "white";
  batata = "Batata Grande";
}
function escolheBR() {
  document.getElementById("bp").style.borderColor = "white";
  document.getElementById("bm").style.borderColor = "white";
  document.getElementById("bg").style.borderColor = "white";
  document.getElementById("br").style.borderColor = "green";
  batata = "Batata Rústica";
}
function escolheCoca2L() {
  document.getElementById("coca2l").style.borderColor = "green";
  document.getElementById("coca600").style.borderColor = "white";
  document.getElementById("cocalata").style.borderColor = "white";
  document.getElementById("guarana").style.borderColor = "white";
  document.getElementById("agua").style.borderColor = "white";
  bebida = "Coca 2L";
}
function escolheCoca600() {
  document.getElementById("coca2l").style.borderColor = "white";
  document.getElementById("coca600").style.borderColor = "green";
  document.getElementById("cocalata").style.borderColor = "white";
  document.getElementById("guarana").style.borderColor = "white";
  document.getElementById("agua").style.borderColor = "white";
  bebida = "Coca 600ml";
}
function escolheCocaLata() {
  document.getElementById("coca2l").style.borderColor = "white";
  document.getElementById("coca600").style.borderColor = "white";
  document.getElementById("cocalata").style.borderColor = "green";
  document.getElementById("guarana").style.borderColor = "white";
  document.getElementById("agua").style.borderColor = "white";
  bebida = "Coca lata";
}
function escolheGuarana() {
  document.getElementById("coca2l").style.borderColor = "white";
  document.getElementById("coca600").style.borderColor = "white";
  document.getElementById("cocalata").style.borderColor = "white";
  document.getElementById("guarana").style.borderColor = "green";
  document.getElementById("agua").style.borderColor = "white";
  bebida = "Guaraná";
}
function escolheAgua() {
  document.getElementById("coca2l").style.borderColor = "white";
  document.getElementById("coca600").style.borderColor = "white";
  document.getElementById("cocalata").style.borderColor = "white";
  document.getElementById("guarana").style.borderColor = "white";
  document.getElementById("agua").style.borderColor = "green";
  bebida = "Água";
}
function escolhePetit() {
  document.getElementById("petit").style.borderColor = "green";
  document.getElementById("brownie").style.borderColor = "white";
  sobremesa = "Especial Dr. Telasko";
}
function escolheBrownie() {
  document.getElementById("petit").style.borderColor = "white";
  document.getElementById("brownie").style.borderColor = "green";
  sobremesa = "Brownie";
}
function finalizarPedido() {
  let mensagem;
  burguer === undefined
    ? (burguer = "Sem hamburgueres hoje")
    : (burguer = burguer);
  batata === undefined ? (batata = "sem batatinhas") : (batata = batata);
  bebida === undefined ? (bebida = "nada pra beber") : (bebida = bebida);
  sobremesa === undefined
    ? (sobremesa = "to tranquilo de sobremesa")
    : (sobremesa = sobremesa);
  mensagem =
    "Salve família! Anota o pedidão pra mim por favor: " +
    burguer +
    ", " +
    batata +
    ", " +
    bebida +
    ", " +
    sobremesa +
    ".";
  window.open("https://wa.me/+5519991182254?text=" + mensagem);
}
