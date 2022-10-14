import '../css/components.css'
// import webpacklogo from '../assets/img/webpack-logo.png';

export const saludar = (nombre='sin nombre')  => {
    console.log('Creando etiqueta h1');
    const H1 = document.createElement('h1');
    H1.innerHTML = `Hola, ${nombre}`;
    document.body.append(H1);
    // Img

    // const img = document.createElement('img');
    // img.src=webpacklogo;
    // document.body.append( img);
};