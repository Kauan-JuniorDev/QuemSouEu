var texto_repetido = 'texto_repetido';

var numero_repetido = 0;

for (let numero_repetido = 0; numero_repetido < 10; numero_repetido++)
{
  console.log(texto_repetido + " - " + numero_repetido);
}

var alerta;
alerta = "alerta";
alert (alerta);

var informação = document.getElementById("button_b_0001");
informação.addEventListener('click', function () {
  alert('informação');
});

var aviso = document.getElementById("button_b_0002");
aviso.addEventListener('click', function () {
  alert('aviso');
});

var perigo = document.getElementById("button_b_0003");
perigo.addEventListener('click', function () {
  alert('perigo');
});
