// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, 
// utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.



// v - model -> specifico per TUTTI gli elementi con attributo value.
//             - bidirezionale
//     - Se modifico la variabile associata, anche il value dell'input viene aggiornato
//         - l'utente interagisce / modifica il contenuto dell'input(digita qualcosa in un input).v - model aggiornerà la variabile indicata;
// v - bind -> fa quasi la stessa cosa del v - model, ma si usa per tutti gli altri attributi
//     - unidirezionale - Se modifico la variabile associata, anche il value dell'input viene aggiornato;

Vue.config.devtools = true;

const vueApp = new Vue({
    el: "#root",
    data: {
        name: "Alfredo Javier",
        surname: "Chanta Solis",
        classeH1: "color-red",
        imgsrc: "img/logo.png",
        logoName: "Logo Boolean"
    },
    methods: ""
});