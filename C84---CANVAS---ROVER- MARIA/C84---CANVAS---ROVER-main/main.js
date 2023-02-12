//REFERÊNCIA DO CANVAS
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//LARGURA E ALTURA INICIAL DO ROVER
roverWidth = 100;
roverHeight = 90;

//IMAGEM DE PLANO DE FUNDO
backgroundImage = "mars.jpg";
//IMAGEM INICIAL DO ROVER
roverImage = "rover.png";

roverX = 10;
roverY = 10;

//FUNÇÕES PARA ADICIONAR AS IMAGENS
function add() {
	backgroundImgTag = new Image(); //definindo uma variável com uma nova imagem
	backgroundImgTag.onload = uploadBackground; // ajustando uma função, ao carregar essa variável
	backgroundImgTag.src = backgroundImage;   // carregar a imagem

	roverImgTag = new Image(); //definindo uma variável com uma nova imagem
	roverImgTag.onload = uploadrover; // ajustando uma função, ao carregar essa variável
	roverImgTag.src = roverImage;   // carregar a imagem
}
//FUNÇÃO PARA CARREHAR IMAGEM DE FUNDO
function uploadBackground() {
	ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}
//FUNÇÃO PARA CARREGAR O ROVER
function uploadrover() {
	ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}


window.addEventListener("keydown", myKeyDown);

