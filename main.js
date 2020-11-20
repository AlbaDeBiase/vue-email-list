// generare una lista di 10 indirizzi email
// e stamparle in pagina con vue.
// Dopo aver recuperato correttamente 10 indirizzi email
//  e averli stampati in pagina in modo "grezzo",
//   date sfogo alla vostra creatività per rendere più accattivante
//    la grafica della pagina



var app = new Vue({

    el: '#container',
    data: {
        emails:[]

    }, // chiudo data

    mounted(){
            for (var i = 0; i < 10; i++) {
                axios
                    .get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((pippo) => {
                        this.emails.push(pippo.data.response);
                    });
                }

    }// chiudo mounted

}); // chiudo Vue
