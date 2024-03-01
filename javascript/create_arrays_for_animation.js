// Beispiel für die Verwendung der Klasse
const animalArrays = new AnimalArrays();

// Aufruf der Funktion für alle Tierarten und Aktionen
allAnimals.forEach((animal) => {
  allActions.forEach((action) => {
    for (let k = 0; k < 10; k++) {
      const completePath =
        animalPathPrefix + animal + '/' + action + '_00' + k + animalPathSuffix;
      animalArrays.pushImagePath(action, animal, completePath); 
    }
  });
});

console.log('Animal-Arrays: ', animalArrays);

function capitalizeAction(action) {
  const firstLetter = action.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = action.slice(1);
  const capitalizedWord = firstLetterCap + remainingLetters;
  return capitalizedWord;
}
