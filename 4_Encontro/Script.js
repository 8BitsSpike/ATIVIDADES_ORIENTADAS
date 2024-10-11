function mudartamanho() {
  let medida = document.getElementById("b1").style.height;
  console.log(medida);
  var x = 20 + parseInt(medida);
  let retorno = document.getElementById("b1");
  retorno.style.height = x + "px";

  document.getElementById("leitura").innerHTML = x;
}
