function init() {
  /* console.log('Init aufgerufen'); */
  canvas = document.getElementById('canvas');
  world = new World(canvas);
  /* console.log('My character is ', world.character); */
 
 world.yellowCrab.loadCrabImage('../img/Fish_crab_jellyfish_shark/PNG/Crab_1/Crab_move_1_000.png');
 world.redCrab.loadCrabImage('../img/Fish_crab_jellyfish_shark/PNG/Crab_2/Crab_idle_2_000.png');
 /* console.log('Meine gelbe Krabbe ist: ', world.yellowCrab);
 console.log('Meine rote Krabbe ist: ', world.enemies[1]); */
 /* this.initComplete = true; */
}



  
  