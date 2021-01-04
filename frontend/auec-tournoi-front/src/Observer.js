function Observer () {
    // Stockage des gens à prévenir en cas de
    // mise à jour
    var listeners = []

    return {
        // Initialiser une écoute
        subscribe: function subscribe (listener) {
            // On ajoute le listeners à la liste
            // des gens enregistrés
            listeners.push(listener)

            // On renvoie une méthode
            // qui met fin à une écoute
            return function unsubscribe () {
                // On enlève le listener de la liste
                // des gens enregistrés
                listeners = listeners.filter(
                    function (item) {
                        return item !== listener
                    }
                )
            }
        },
        // Prévenir tout le monde d'un changement
        notify: function notify () {
            // On execute chaque listener qui est
            // un callback qui sera executé dans le
            // scope du Subscriber
            listeners.forEach(
                function (listener) {
                    listener()
                }
            )
        }
    }
}
