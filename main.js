/*Inicio animado*/ 
const curtain = document.getElementById("curtain");
const content = document.getElementById("content");

curtain.addEventListener("click", () => {
    curtain.style.transform = "translateY(-100%)";
});
/*Inicio animado*

/*Visualizar e fechar foto do usuario*/
const imagens = document.querySelectorAll('.imguser, .img-sa');
const imagemModal = document.getElementById('imagemModal');
const imagemModalConteudo = document.getElementById('imagemModalConteudo');
const fecharModal = document.getElementById('fecharModal');

imagens.forEach((imagem, index) => {
    imagem.addEventListener('click', () => {
        imagemModal.style.display = 'block';
        imagemModalConteudo.src = imagem.src;
    });
});

fecharModal.addEventListener('click', () => {
    imagemModal.style.display = 'none';
});

imagemModal.addEventListener('click', (event) => {
    if (event.target === imagemModal) {
        imagemModal.style.display = 'none';
    }
});
/*Visualizar e fechar foto do usuario FIM*/

