const fs = require('fs');
const parser = require('./magrammaire.js'); // Assurez-vous que le chemin du fichier est correct

// Lisez un exemple de code depuis un fichier
const code = fs.readFileSync('mon_fichier.fs', 'utf-8');

try {
  // Analysez le code en utilisant votre analyseur généré
  const result = parser.parse(code);

  // Affichez le résultat de l'analyse
  console.log(JSON.stringify(result, null, 2));
} catch (error) {
  // Gestion des erreurs d'analyse
  console.error(error.message);
}
