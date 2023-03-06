const imageHeader = document.getElementById('imagem-header');

const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

if (width >= 1300) {
    imageHeader.setAttribute('src', '../images/image-product-desktop.jpg');
}
