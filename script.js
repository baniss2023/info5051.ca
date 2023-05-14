function evaluer() {
  var texteChoisi = document.getElementById("texte").value;
  var fichierTexte = "chemin/vers/le/fichier/" + texteChoisi;

  // Charger le fichier texte via une requête HTTP (AJAX)
  var xhr = new XMLHttpRequest();
  xhr.open("GET", fichierTexte, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var contenu = xhr.responseText;
      // Faites quelque chose avec le contenu du fichier texte
      console.log(contenu);
    }
  };
  xhr.send();
}
