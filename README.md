Vue.js Portfolio per Progetti Laravel API 🎨

Questo progetto è un Portfolio realizzato con Vue.js, progettato per visualizzare i progetti provenienti da un'API Laravel. La homepage ha un'interfaccia simpatica e accattivante, e i progetti vengono visualizzati nella sezione Portfolio tramite card interattive. Il progetto include un sistema di paginazione, un loader per il caricamento e una form di contatto per inviare email all'amministratore tramite l'API Laravel.
Funzionalità principali

    Homepage Simpatica: La homepage presenta un'interfaccia accogliente e visivamente gradevole che introduce gli utenti al Portfolio.

    Sezione Portfolio: I progetti sono visualizzati tramite card nella sezione Portfolio. Ogni card mostra una breve descrizione troncata e un pulsante per vedere ulteriori dettagli.

    Paginazione: Sistema di paginazione per caricare i progetti in più pagine, migliorando la navigazione e l'efficienza del caricamento.

    Loader: Un loader viene mostrato durante il caricamento dei progetti per un'esperienza utente fluida.

    Dettagli Progetto: Cliccando su una card, l'utente viene portato a una pagina con i dettagli completi del progetto selezionato.

    Form di Contatto: Una form di contatto permette agli utenti di inviare messaggi all'amministratore. Le email sono gestite direttamente dalla Laravel API che invia i lead.

Componenti

Il progetto è suddiviso in varie componenti Vue.js per una gestione modulare e pulita del codice:

    Home.vue: Componente che gestisce la homepage simpatica e l'introduzione al Portfolio.
    ProjectCard.vue: Visualizza una card per ciascun progetto con una descrizione troncata e un pulsante "Vedi Dettagli".
    Projects.vue: La sezione principale che visualizza l'elenco paginato dei progetti tramite le card.
    Project.vue: Componente per la visualizzazione dei dettagli completi di un singolo progetto.
    Loader.vue: Mostra un'animazione di caricamento mentre i dati vengono recuperati dall'API.
    ContactForm.vue: Componente per il modulo di contatto che invia email tramite la Laravel API.
    Pagination.vue: Componente che gestisce la paginazione per navigare tra le pagine di progetti.

Tecnologie Utilizzate

    Vue.js: Framework JavaScript utilizzato per costruire l'interfaccia utente dinamica.
    Axios: Per effettuare le richieste HTTP verso la Laravel API.
    Vue Router: Per la gestione della navigazione tra la homepage, la sezione Portfolio e le pagine di dettaglio.
    Laravel API: Backend che gestisce i progetti, la paginazione e l'invio delle email.
    Bootstrap: Per un design responsivo e pulito delle card e della form.
