
//Fonction d'alerte

function portfolio () {
	let prenom = document.form.prenom.value;
	let nom = document.form.nom.value;
	let sujet = document.form.sujet.value;
	let message = document.form.message.value;
	if (prenom === "") {
        alert("Veuillez entrer votre prénom.");
        return false;
    }
      if (nom === "") {
        alert("Veuillez entrer votre nom.");
        return false;
    }
    if (sujet === "") {
        alert("Veuillez entrer le sujet.");
        return false;
    }
    if (message === "") {
        alert("Veuillez entrer votre message.");
        return false;
    }

    // Vérification de la longueur du message
    if (message.length < 10) {
        alert("Votre message doit contenir au moins 10 caractères.");
        return false;
    }

    // Si tout est correct
    alert("Formulaire envoyé avec succès !");
    
}






