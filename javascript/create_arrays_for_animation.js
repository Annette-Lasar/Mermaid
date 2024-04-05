console.log('Ich bin die create_arrays_for_animation.js-Datei.');
const animalArrays = new AnimalArrays();
function createAllAnimalsArrays() {
  allAnimals.forEach((animal) => {
    allActions.forEach((action) => {
      if (isAllowedCombination(animal, action)) {
        for (let k = 0; k < 10; k++) {
          const completePath = checkIfMermaidOrAnimal(animal, action, k);
          animalArrays.pushImagePath(action, animal, completePath);
        }
      }
    });
  });
}

function isAllowedCombination(animal, action) {
  const allowedCombinations = {
    blowfish: ['attack', 'die', 'move'],
    blueJellyfish: ['die', 'move'],
    butterflyfish: ['attack', 'die', 'move'],
    clownfish: ['attack', 'die', 'move'],
    hammerhead: ['attack', 'die', 'move'],
    lionfish: ['attack', 'die', 'move'],
    pinkJellyfish: ['die', 'move'],
    purpleJellyfish: ['die', 'move'],
    redCrab: ['attack', 'die', 'idle'],
    seaUrchin: ['attack', 'idle'],
    shark: ['attack', 'die', 'move'],
    yellowCrab: ['attack', 'die', 'move'],
    mermaid: ['acceleration', 'attack', 'die', 'hurt', 'idle', 'joy', 'move'],
  };

  return (
    allowedCombinations[animal] && allowedCombinations[animal].includes(action)
  );
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
