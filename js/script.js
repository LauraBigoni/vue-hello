console.log('Vue ok', Vue);
Vue.config.devtools = true;

/* Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. */

// # creo un array Vue collegato al DOM
const app = new Vue({
    el: '#root',
    data: {
        message: 'Vue Hello!',
        image: 'vuehello.png',
    },
    methods: {

    },
});