console.log('Ich bin die create_arrays_for_animation-Datei.');
function createAllAnimalsArrays() {
  allAnimals.forEach((animal) => {
    allActions.forEach((action) => {
      for (let k = 0; k < 10; k++) {
        const completePath = checkIfMermaidOrAnimal(animal, action, k);
        animalArrays.pushImagePath(action, animal, completePath);
      }
    });
  });
}

function checkIfMermaidOrAnimal(animal, action, k) {
  let path =
    animal == 'mermaid'
      ? mermaidPathPrefix +
        mermaidType +
        '/' +
        action +
        '_00' +
        k +
        animalPathSuffix
      : animalPathPrefix + animal + '/' + action + '_00' + k + animalPathSuffix;
  return path;
}

console.log('Animal-Arrays: ', animalArrays);

function capitalizeAction(action) {
  const firstLetter = action.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = action.slice(1);
  const capitalizedWord = firstLetterCap + remainingLetters;
  return capitalizedWord;
}
