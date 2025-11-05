
/**
 * Esta función me permite tomar una carta
 * @param {Array<string>} deck 
 * @returns {string} Regresa la última carta del deck
 */


export const pedirCarta = ( deck ) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}