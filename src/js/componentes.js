
import './../css/componentes.css';

export const saludar = ( nombre ) => {
    
    const h1 = document.createElement('h1');
    h1.innerText = `Hola, ${ nombre }.  ¿Cómo estás?`;
    document.body.append( h1 );

    console.log( 'Se añadió una etiqueta h1' );

}

