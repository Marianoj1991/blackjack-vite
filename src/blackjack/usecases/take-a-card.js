
/**
 * Esta funcion me permite tomar un carta del deck
 * @param {Array<String>} deck es un arreglo de string 
 * @returns {String} retorna una carta
 */

export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
    
}