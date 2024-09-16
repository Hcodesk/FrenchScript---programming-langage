//j'importe le module fs de node js
const fs = require('fs')
function remplacerMotsCles(codeSource) {
    //utilisation d'expression régulière et la méthode réplace pour éffectuer la substitution
    let codeModifie = codeSource.replace(/fonction/g, 'function');
    codeModifie = codeModifie.replace(/ce/g, 'this');
    codeModifie = codeModifie.replace(/couper/g, 'break');
    codeModifie = codeModifie.replace(/cas/g, 'case');
    codeModifie = codeModifie.replace(/supp/g, 'delete');
    codeModifie = codeModifie.replace(/faire/g, 'do');
    codeModifie = codeModifie.replace(/exporter/g, 'export');
    codeModifie = codeModifie.replace(/etendre/g, 'extends');
    codeModifie = codeModifie.replace(/faux/g, 'false');
    codeModifie = codeModifie.replace(/vrai/g, 'true');
    codeModifie = codeModifie.replace(/sinon/g, 'else');
    codeModifie = codeModifie.replace(/pour/g, 'for');
    codeModifie = codeModifie.replace(/si/g, 'if');
    codeModifie = codeModifie.replace(/dans/g, 'in');
    codeModifie = codeModifie.replace(/retourne/g, 'return');       
    codeModifie = codeModifie.replace(/tantque/g, 'while');

    return codeModifie;
  }

  //importer et lire le code source
const fichierSource =  'mon_fichier.fs'
  fs.readFile(fichierSource,'utf-8',(err,data) => {
    if(err) {
        console.error("la lecture du fichier a eu un problème")
        return;
    }
 //Execution de la fonction avec le texte lu
 let nouveauTexte = remplacerMotsCles(data)
 console.log (nouveauTexte)
 //écriture dans le nouveau fichier
 fs.writeFile('final.fs', `${nouveauTexte}`,'utf-8',(err) => {
    if(err) {
        console.error("erreur lors de l'écriture")
    }
    console.log("écriture effectué avec succès")
})
  })
  
