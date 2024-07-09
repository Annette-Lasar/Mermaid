/**
 * This file provides an array with all image objects on the canvas like image paths,
 * height, width, x and y-axis and others.
 */
const allImageObjects = [
  {
    images: {
      backgrounds: [
        './img/game_backgrounds/PNG/game_background_1/layers/1.png',
        './img/game_backgrounds/PNG/game_background_1/layers/2.png',
        './img/game_backgrounds/PNG/game_background_1/layers/3.png',
        './img/game_backgrounds/PNG/game_background_1/layers/4.png',
        './img/game_backgrounds/PNG/game_background_1/layers/5.png',
        './img/game_backgrounds/PNG/game_background_1/layers/6.png',
      ],
    },
    object_information: [
      {
        name: 'background',
        x: 0,
        y: 0,
        src: '',
        width: 1920,
        height: 1080,
        landscapeWidth: 1920,
        portraitWidth: 1080,
      },
    ],

    type: 'backgroundArrays',
  },

  {
    images: {
      die_1: [
        `./img/mermaid/PNG/mermaid_1/die_000.png`,
        `./img/mermaid/PNG/mermaid_1/die_001.png`,
        `./img/mermaid/PNG/mermaid_1/die_002.png`,
        `./img/mermaid/PNG/mermaid_1/die_003.png`,
        `./img/mermaid/PNG/mermaid_1/die_004.png`,
        `./img/mermaid/PNG/mermaid_1/die_005.png`,
        `./img/mermaid/PNG/mermaid_1/die_006.png`,
        `./img/mermaid/PNG/mermaid_1/die_007.png`,
        `./img/mermaid/PNG/mermaid_1/die_008.png`,
        `./img/mermaid/PNG/mermaid_1/die_009.png`,
      ],

      die_2: [
        `./img/mermaid/PNG/mermaid_2/die_000.png`,
        `./img/mermaid/PNG/mermaid_2/die_001.png`,
        `./img/mermaid/PNG/mermaid_2/die_002.png`,
        `./img/mermaid/PNG/mermaid_2/die_003.png`,
        `./img/mermaid/PNG/mermaid_2/die_004.png`,
        `./img/mermaid/PNG/mermaid_2/die_005.png`,
        `./img/mermaid/PNG/mermaid_2/die_006.png`,
        `./img/mermaid/PNG/mermaid_2/die_007.png`,
        `./img/mermaid/PNG/mermaid_2/die_008.png`,
        `./img/mermaid/PNG/mermaid_2/die_009.png`,
      ],

      die_3: [
        `./img/mermaid/PNG/mermaid_3/die_000.png`,
        `./img/mermaid/PNG/mermaid_3/die_001.png`,
        `./img/mermaid/PNG/mermaid_3/die_002.png`,
        `./img/mermaid/PNG/mermaid_3/die_003.png`,
        `./img/mermaid/PNG/mermaid_3/die_004.png`,
        `./img/mermaid/PNG/mermaid_3/die_005.png`,
        `./img/mermaid/PNG/mermaid_3/die_006.png`,
        `./img/mermaid/PNG/mermaid_3/die_007.png`,
        `./img/mermaid/PNG/mermaid_3/die_008.png`,
        `./img/mermaid/PNG/mermaid_3/die_009.png`,
      ],
      hurt_1: [
        `./img/mermaid/PNG/mermaid_1/hurt_000.png`,
        `./img/mermaid/PNG/mermaid_1/hurt_001.png`,
        `./img/mermaid/PNG/mermaid_1/hurt_002.png`,
        `./img/mermaid/PNG/mermaid_1/hurt_003.png`,
        `./img/mermaid/PNG/mermaid_1/hurt_004.png`,
        `./img/mermaid/PNG/mermaid_1/hurt_005.png`,
        `./img/mermaid/PNG/mermaid_1/hurt_006.png`,
        `./img/mermaid/PNG/mermaid_1/hurt_007.png`,
        `./img/mermaid/PNG/mermaid_1/hurt_008.png`,
        `./img/mermaid/PNG/mermaid_1/hurt_009.png`,
      ],
      hurt_2: [
        `./img/mermaid/PNG/mermaid_2/hurt_000.png`,
        `./img/mermaid/PNG/mermaid_2/hurt_001.png`,
        `./img/mermaid/PNG/mermaid_2/hurt_002.png`,
        `./img/mermaid/PNG/mermaid_2/hurt_003.png`,
        `./img/mermaid/PNG/mermaid_2/hurt_004.png`,
        `./img/mermaid/PNG/mermaid_2/hurt_005.png`,
        `./img/mermaid/PNG/mermaid_2/hurt_006.png`,
        `./img/mermaid/PNG/mermaid_2/hurt_007.png`,
        `./img/mermaid/PNG/mermaid_2/hurt_008.png`,
        `./img/mermaid/PNG/mermaid_2/hurt_009.png`,
      ],
      hurt_3: [
        `./img/mermaid/PNG/mermaid_3/hurt_000.png`,
        `./img/mermaid/PNG/mermaid_3/hurt_001.png`,
        `./img/mermaid/PNG/mermaid_3/hurt_002.png`,
        `./img/mermaid/PNG/mermaid_3/hurt_003.png`,
        `./img/mermaid/PNG/mermaid_3/hurt_004.png`,
        `./img/mermaid/PNG/mermaid_3/hurt_005.png`,
        `./img/mermaid/PNG/mermaid_3/hurt_006.png`,
        `./img/mermaid/PNG/mermaid_3/hurt_007.png`,
        `./img/mermaid/PNG/mermaid_3/hurt_008.png`,
        `./img/mermaid/PNG/mermaid_3/hurt_009.png`,
      ],

      idle_1: [
        `./img/mermaid/PNG/mermaid_1/idle_000.png`,
        `./img/mermaid/PNG/mermaid_1/idle_001.png`,
        `./img/mermaid/PNG/mermaid_1/idle_002.png`,
        `./img/mermaid/PNG/mermaid_1/idle_003.png`,
        `./img/mermaid/PNG/mermaid_1/idle_004.png`,
        `./img/mermaid/PNG/mermaid_1/idle_005.png`,
        `./img/mermaid/PNG/mermaid_1/idle_006.png`,
        `./img/mermaid/PNG/mermaid_1/idle_007.png`,
        `./img/mermaid/PNG/mermaid_1/idle_008.png`,
        `./img/mermaid/PNG/mermaid_1/idle_009.png`,
      ],
      idle_2: [
        `./img/mermaid/PNG/mermaid_2/idle_000.png`,
        `./img/mermaid/PNG/mermaid_2/idle_001.png`,
        `./img/mermaid/PNG/mermaid_2/idle_002.png`,
        `./img/mermaid/PNG/mermaid_2/idle_003.png`,
        `./img/mermaid/PNG/mermaid_2/idle_004.png`,
        `./img/mermaid/PNG/mermaid_2/idle_005.png`,
        `./img/mermaid/PNG/mermaid_2/idle_006.png`,
        `./img/mermaid/PNG/mermaid_2/idle_007.png`,
        `./img/mermaid/PNG/mermaid_2/idle_008.png`,
        `./img/mermaid/PNG/mermaid_2/idle_009.png`,
      ],
      idle_3: [
        `./img/mermaid/PNG/mermaid_3/idle_000.png`,
        `./img/mermaid/PNG/mermaid_3/idle_001.png`,
        `./img/mermaid/PNG/mermaid_3/idle_002.png`,
        `./img/mermaid/PNG/mermaid_3/idle_003.png`,
        `./img/mermaid/PNG/mermaid_3/idle_004.png`,
        `./img/mermaid/PNG/mermaid_3/idle_005.png`,
        `./img/mermaid/PNG/mermaid_3/idle_006.png`,
        `./img/mermaid/PNG/mermaid_3/idle_007.png`,
        `./img/mermaid/PNG/mermaid_3/idle_008.png`,
        `./img/mermaid/PNG/mermaid_3/idle_009.png`,
      ],

      move_1: [
        `./img/mermaid/PNG/mermaid_1/move_000.png`,
        `./img/mermaid/PNG/mermaid_1/move_001.png`,
        `./img/mermaid/PNG/mermaid_1/move_002.png`,
        `./img/mermaid/PNG/mermaid_1/move_003.png`,
        `./img/mermaid/PNG/mermaid_1/move_004.png`,
        `./img/mermaid/PNG/mermaid_1/move_005.png`,
        `./img/mermaid/PNG/mermaid_1/move_006.png`,
        `./img/mermaid/PNG/mermaid_1/move_007.png`,
        `./img/mermaid/PNG/mermaid_1/move_008.png`,
        `./img/mermaid/PNG/mermaid_1/move_009.png`,
      ],
      move_2: [
        `./img/mermaid/PNG/mermaid_2/move_000.png`,
        `./img/mermaid/PNG/mermaid_2/move_001.png`,
        `./img/mermaid/PNG/mermaid_2/move_002.png`,
        `./img/mermaid/PNG/mermaid_2/move_003.png`,
        `./img/mermaid/PNG/mermaid_2/move_004.png`,
        `./img/mermaid/PNG/mermaid_2/move_005.png`,
        `./img/mermaid/PNG/mermaid_2/move_006.png`,
        `./img/mermaid/PNG/mermaid_2/move_007.png`,
        `./img/mermaid/PNG/mermaid_2/move_008.png`,
        `./img/mermaid/PNG/mermaid_2/move_009.png`,
      ],
      move_3: [
        `./img/mermaid/PNG/mermaid_3/move_000.png`,
        `./img/mermaid/PNG/mermaid_3/move_001.png`,
        `./img/mermaid/PNG/mermaid_3/move_002.png`,
        `./img/mermaid/PNG/mermaid_3/move_003.png`,
        `./img/mermaid/PNG/mermaid_3/move_004.png`,
        `./img/mermaid/PNG/mermaid_3/move_005.png`,
        `./img/mermaid/PNG/mermaid_3/move_006.png`,
        `./img/mermaid/PNG/mermaid_3/move_007.png`,
        `./img/mermaid/PNG/mermaid_3/move_008.png`,
        `./img/mermaid/PNG/mermaid_3/move_009.png`,
      ],
    },

    object_information: [
      {
        name: 'mermaid_1',
        x: 20,
        y: 200,
        src: './img/mermaid/PNG/mermaid_1/idle_000.png',
        width: 665,
        height: 1028,
        landscapeWidth: 150,
        portraitWidth: 80,
      },
      {
        name: 'mermaid_2',
        x: 20,
        y: 200,
        src: './img/mermaid/PNG/mermaid_2/idle_000.png',
        width: 629,
        height: 1033,
        landscapeWidth: 150,
        portraitWidth: 80,
      },

      {
        name: 'mermaid_3',
        x: 20,
        y: 200,
        src: './img/mermaid/PNG/mermaid_3/idle_000.png',
        width: 676,
        height: 1090,
        landscapeWidth: 150,
        portraitWidth: 80,
      },
    ],
    type: 'mermaidArrays',
  },

  {
    images: {
      move: [
        './img/fish/PNG/blowfish/move_000.png',
        './img/fish/PNG/blowfish/move_001.png',
        './img/fish/PNG/blowfish/move_002.png',
        './img/fish/PNG/blowfish/move_003.png',
        './img/fish/PNG/blowfish/move_004.png',
        './img/fish/PNG/blowfish/move_005.png',
        './img/fish/PNG/blowfish/move_006.png',
        './img/fish/PNG/blowfish/move_007.png',
        './img/fish/PNG/blowfish/move_008.png',
        './img/fish/PNG/blowfish/move_009.png',
      ],
    },
    object_information: [
      {
        name: 'blowfish',
        x: 0,
        y: 0,
        src: './img/fish/PNG/blowfish/move_000.png',
        width: 208,
        height: 111,
        landscapeWidth: '',
        portraitWidth: '',
      },
    ],

    type: 'blowfishArrays',
  },

  {
    images: {
      move: [
        './img/fish/PNG/clownfish/move_000.png',
        './img/fish/PNG/clownfish/move_001.png',
        './img/fish/PNG/clownfish/move_002.png',
        './img/fish/PNG/clownfish/move_003.png',
        './img/fish/PNG/clownfish/move_004.png',
        './img/fish/PNG/clownfish/move_005.png',
        './img/fish/PNG/clownfish/move_006.png',
        './img/fish/PNG/clownfish/move_007.png',
        './img/fish/PNG/clownfish/move_008.png',
        './img/fish/PNG/clownfish/move_009.png',
      ],
    },
    object_information: [
      {
        name: 'clownfish',
        x: 0,
        y: 0,
        src: './img/fish/PNG/clownfish/move_000.png',
        width: 231,
        height: 135,
        landscapeWidth: '',
        portraitWidth: '',
      },
    ],

    type: 'clownfishArrays',
  },

  {
    images: {
      idle: [
        './img/fish/PNG/redCrab/idle_000.png',
        './img/fish/PNG/redCrab/idle_001.png',
        './img/fish/PNG/redCrab/idle_002.png',
        './img/fish/PNG/redCrab/idle_003.png',
        './img/fish/PNG/redCrab/idle_004.png',
        './img/fish/PNG/redCrab/idle_005.png',
        './img/fish/PNG/redCrab/idle_006.png',
        './img/fish/PNG/redCrab/idle_007.png',
        './img/fish/PNG/redCrab/idle_008.png',
        './img/fish/PNG/redCrab/idle_009.png',
      ],
    },
    object_information: [
      {
        name: 'redCrab',
        x: 0,
        y: 0,
        src: './img/fish/PNG/redCrab/idle_000.png',
        width: 594,
        height: 280,
        landscapeWidth: '',
        portraitWidth: '',
      },
    ],

    type: 'redCrabArrays',
  },

  {
    images: {
      move: [
        './img/fish/PNG/yellowCrab/move_000.png',
        './img/fish/PNG/yellowCrab/move_001.png',
        './img/fish/PNG/yellowCrab/move_002.png',
        './img/fish/PNG/yellowCrab/move_003.png',
        './img/fish/PNG/yellowCrab/move_004.png',
        './img/fish/PNG/yellowCrab/move_005.png',
        './img/fish/PNG/yellowCrab/move_006.png',
        './img/fish/PNG/yellowCrab/move_007.png',
        './img/fish/PNG/yellowCrab/move_008.png',
        './img/fish/PNG/yellowCrab/move_009.png',
      ],
    },
    object_information: [
      {
        name: 'yellowCrab',
        x: 0,
        y: 0,
        src: './img/fish/PNG/yellowCrab/move_000.png',
        width: 408,
        height: 197,
        landscapeWidth: '',
        portraitWidth: '',
      },
    ],

    type: 'yellowCrabArrays',
  },

  {
    images: {
      die: [
        './img/fish/PNG/lionfish/die_000.png',
        './img/fish/PNG/lionfish/die_001.png',
        './img/fish/PNG/lionfish/die_002.png',
        './img/fish/PNG/lionfish/die_003.png',
        './img/fish/PNG/lionfish/die_004.png',
        './img/fish/PNG/lionfish/die_005.png',
        './img/fish/PNG/lionfish/die_006.png',
        './img/fish/PNG/lionfish/die_007.png',
        './img/fish/PNG/lionfish/die_008.png',
        './img/fish/PNG/lionfish/die_009.png',
        './img/fish/PNG/lionfish/die_010.png',
        './img/fish/PNG/lionfish/die_011.png',
        './img/fish/PNG/lionfish/die_012.png',
        './img/fish/PNG/lionfish/die_013.png',
      ],
      move: [
        './img/fish/PNG/lionfish/move_000.png',
        './img/fish/PNG/lionfish/move_001.png',
        './img/fish/PNG/lionfish/move_002.png',
        './img/fish/PNG/lionfish/move_003.png',
        './img/fish/PNG/lionfish/move_004.png',
        './img/fish/PNG/lionfish/move_005.png',
        './img/fish/PNG/lionfish/move_006.png',
        './img/fish/PNG/lionfish/move_007.png',
        './img/fish/PNG/lionfish/move_008.png',
        './img/fish/PNG/lionfish/move_009.png',
      ],
    },
    object_information: [
      {
        name: 'lionfish',
        x: 0,
        y: 0,
        src: './img/fish/PNG/lionfish/move_000.png',
        width: 423,
        height: 336,
        landscapeWidth: '',
        portraitWidth: '',
      },
    ],

    type: 'lionfishArrays',
  },

  {
    images: {
      move: [
        './img/fish/PNG/blueJellyfish/move_000.png',
        './img/fish/PNG/blueJellyfish/move_001.png',
        './img/fish/PNG/blueJellyfish/move_002.png',
        './img/fish/PNG/blueJellyfish/move_003.png',
        './img/fish/PNG/blueJellyfish/move_004.png',
        './img/fish/PNG/blueJellyfish/move_005.png',
        './img/fish/PNG/blueJellyfish/move_006.png',
        './img/fish/PNG/blueJellyfish/move_007.png',
        './img/fish/PNG/blueJellyfish/move_008.png',
        './img/fish/PNG/blueJellyfish/move_009.png',
      ],
    },
    object_information: [
      {
        name: 'blueJellyfish',
        x: 0,
        y: 0,
        src: './img/fish/PNG/blueJellyfish/move_000.png',
        width: 130,
        height: 87,
        landscapeWidth: '',
        portraitWidth: '',
      },
    ],

    type: 'blueJellyfishArrays',
  },

  {
    images: {
      anchor: ['./img/game_items/PNG/items/anchor.png'],
      flat_rock: ['./img/game_items/PNG/items/stone_3.png'],
      rock: ['./img/game_items/PNG/items/stone_6.png'],
      smashed_barrel: ['./img/game_items/PNG/items/barrel_2.png'],
      stalactite_1: ['./img/game_items/PNG/items/stone_4.png'],
      stalactite_2: ['./img/game_items/PNG/items/stone_4.png'],
      stalactite_3: ['./img/game_items/PNG/items/stone_4.png'],
      stalactite_4: ['./img/game_items/PNG/items/stone_4.png'],
      stalagmite_1: ['./img/game_items/PNG/items/stone_5.png'],
      stalagmite_2: ['./img/game_items/PNG/items/stone_5.png'],
      steering_wheel: ['./img/game_items/PNG/items/steering-wheel.png'],
      treasure_chest_closed: ['./img/game_items/PNG/neutral/chest_closed.png'],
    },

    object_information: [
      {
        name: 'chest_closed',
        x: 5200,
        y: 250,
        src: './img/game_items/PNG/neutral/chest_closed.png',
        width: 250,
        height: 80,
        landscapeWidth: '',
        portraitWidth: '',
      },
      {
        name: 'smashed_barrel',
        x: 50,
        y: 350,
        src: './img/game_items/PNG/items/barrel_2.png',
        width: 200,
        height: 80,
        landscapeWidth: '',
        portraitWidth: '',
      },
      {
        name: 'anchor',
        x: 1200,
        y: 200,
        src: './img/game_items/PNG/items/anchor.png',
        width: 200,
        height: 200,
        landscapeWidth: '',
        portraitWidth: '',
      },

      {
        name: 'steering_wheel',
        x: 1800,
        y: 200,
        src: './img/game_items/PNG/items/steering-wheel.png',
        width: 200,
        height: 200,
        landscapeWidth: '',
        portraitWidth: '',
      },
      {
        name: 'stalactite_1',
        x: 970,
        y: 0,
        src: './img/game_items/PNG/items/stone_4.png',
        width: 400,
        height: 100,
        landscapeWidth: '',
        portraitWidth: '',
      },
      {
        name: 'stalactite_2',
        x: 905,
        y: 0,
        src: './img/game_items/PNG/items/stone_4.png',
        width: 400,
        height: 120,
        landscapeWidth: '',
        portraitWidth: '',
      },
      {
        name: 'rock',
        x: 800,
        y: 80,
        src: './img/game_items/PNG/items/stone_6.png',
        width: 400,
        height: 150,
        landscapeWidth: '',
        portraitWidth: '',
      },
      {
        name: 'flat_rock',
        x: 800,
        y: 350,
        src: './img/game_items/PNG/items/stone_3.png',
        width: 300,
        height: 150,
        landscapeWidth: '',
        portraitWidth: '',
      },
      {
        name: 'stalactite_3',
        x: 2900,
        y: 0,
        src: './img/game_items/PNG/items/stone_4.png',
        width: 400,
        height: 90,
        landscapeWidth: '',
        portraitWidth: '',
      },
      {
        name: 'stalagmite_1',
        x: 2860,
        y: 260,
        src: './img/game_items/PNG/items/stone_5.png',
        width: 400,
        height: 140,
        landscapeWidth: '',
        portraitWidth: '',
      },
      {
        name: 'stalactite_4',
        x: 3700,
        y: 0,
        src: './img/game_items/PNG/items/stone_4.png',
        width: 400,
        height: 90,
        landscapeWidth: '',
        portraitWidth: '',
      },
      {
        name: 'stalagmite_2',
        x: 3660,
        y: 260,
        src: './img/game_items/PNG/items/stone_5.png',
        width: 400,
        height: 140,
        landscapeWidth: '',
        portraitWidth: '',
      },
    ],
    type: 'gameItemArrays',
  },

  {
    images: {
      dangerous_bomb: [
        './img/game_items/PNG/bomb/move_000.png',
        './img/game_items/PNG/bomb/move_001.png',
        './img/game_items/PNG/bomb/move_002.png',
        './img/game_items/PNG/bomb/move_003.png',
        './img/game_items/PNG/bomb/move_004.png',
        './img/game_items/PNG/bomb/move_005.png',
        './img/game_items/PNG/bomb/move_006.png',
        './img/game_items/PNG/bomb/move_007.png',
        './img/game_items/PNG/bomb/move_008.png',
        './img/game_items/PNG/bomb/move_009.png',
        './img/game_items/PNG/bomb/move_010.png',
        './img/game_items/PNG/bomb/move_011.png',
        './img/game_items/PNG/bomb/move_012.png',
        './img/game_items/PNG/bomb/move_013.png',
        './img/game_items/PNG/bomb/move_014.png',
        './img/game_items/PNG/bomb/move_015.png',
        './img/game_items/PNG/bomb/move_016.png',
        './img/game_items/PNG/bomb/move_017.png',
        './img/game_items/PNG/bomb/move_018.png',
        './img/game_items/PNG/bomb/move_019.png',
        './img/game_items/PNG/bomb/move_020.png',
        './img/game_items/PNG/bomb/move_021.png',
        './img/game_items/PNG/bomb/move_022.png',
        './img/game_items/PNG/bomb/move_023.png',
      ],
      iron_chain: [
        './img/game_items/PNG/chain/chain_000.png',
        './img/game_items/PNG/chain/chain_001.png',
        './img/game_items/PNG/chain/chain_002.png',
        './img/game_items/PNG/chain/chain_003.png',
        './img/game_items/PNG/chain/chain_004.png',
        './img/game_items/PNG/chain/chain_005.png',
        './img/game_items/PNG/chain/chain_006.png',
        './img/game_items/PNG/chain/chain_007.png',
        './img/game_items/PNG/chain/chain_008.png',
        './img/game_items/PNG/chain/chain_009.png',
        './img/game_items/PNG/chain/chain_010.png',
        './img/game_items/PNG/chain/chain_011.png',
      ],
    },
    object_information: [
      {
        name: 'bomb',
        x: 180,
        y: 180,
        src: './img/game_items/PNG/bomb/move_000.png',
        width: '',
        height: '',
        landscapeWidth: 40,
        portraitWidth: 40,
      },
      {
        name: 'chain',
        x: 600,
        y: -2,
        src: 'img/game_items/PNG/chain/chain_000.png',
        width: '',
        height: '',
        landscapeWidth: 200,
        portraitWidth: 90,
      },
    ],

    type: 'mobileItemArrays',
  },

  {
    images: {
      golden_key: ['./img/game_items/PNG/items/key.png'],
      yellow_starfish: ['./img/game_items/PNG/items/starfish.png'],
      pearl_in_a_shell: ['./img/game_items/PNG/items/pearl.png'],
    },
    object_information: [
      {
        name: 'key',
        x: randomRangeX,
        y: randomRangeY,
        src: './img/game_items/PNG/items/key.png',
        width: 20,
        height: 50,
        landscapeWidth: '',
        portraitWidth: '',
      },

      {
        name: 'starfish',
        x: randomRangeX,
        y: randomRangeY,
        src: './img/game_items/PNG/items/starfish.png',
        width: 50,
        height: 80,
        landscapeWidth: '',
        portraitWidth: '',
      },

      {
        name: 'pearl',
        x: randomRangeX,
        y: randomRangeY,
        src: './img/game_items/PNG/items/pearl.png',
        width: 40,
        height: 50,
        landscapeWidth: '',
        portraitWidth: '',
      },
    ],

    type: 'valuableItemsArrays',
  },

  {
    images: {
      stone_slab_1: ['./img/game_ui/PNG/menu/window.png'],
      stone_slab_2: ['./img/game_ui/PNG/menu/window.png'],
    },
    object_information: [
      {
        name: 'stone_slab_1',
        x: -850,
        y: 350,
        src: './img/game_ui/PNG/menu/window.png',
        width: '',
        height: '',
        landscapeWidth: '',
        portraitWidth: '',
      },
      {
        name: 'stone_slab_2',
        x: 5500,
        y: 350,
        src: './img/game_ui/PNG/menu/window.png',
        width: '',
        height: '',
        landscapeWidth: '',
        portraitWidth: '',
      },
    ],

    type: 'stoneSlabsArrays',
  },

  {
    images: {
      bubble_weapon: ['./img/game_items/PNG/neutral/bubble_1.png'],
      open_treasure_chest: ['./img/game_items/PNG/neutral/chest_open.png'],
      true_sign: ['./img/game_ui/PNG/settings/true.png'],
    },
    object_information: [
      {
        name: 'bubble',
        x: '',
        y: '',
        src: './img/game_items/PNG/neutral/bubble_1.png',
        width: '',
        height: '',
        landscapeWidth: '',
        portraitWidth: '',
      },
      {
        name: 'chest_open',
        x: '',
        y: '',
        src: './img/game_items/PNG/neutral/chest_open.png',
        width: '',
        height: '',
        landscapeWidth: '',
        portraitWidth: '',
      },
      {
        name: 'true_sign',
        x: '',
        y: '',
        src: './img/game_ui/PNG/settings/true.png',
        width: '',
        height: '',
        landscapeWidth: '',
        portraitWidth: '',
      },
    ],

    type: 'substituteItemArrays',
  },
  {
    images: {
      background_bar_1: ['./img/game_ui/PNG/settings/window_6.png'],
      background_bar_2: ['./img/game_ui/PNG/settings/window_6.png'],
      false_sign: ['./img/game_ui/PNG/settings/false.png'],
      filling_level_1: ['./img/game_ui/PNG/settings/btn_1.png'],
      filling_level_2: ['./img/game_ui/PNG/settings/btn_3.png'],
      filling_level_3: ['./img/game_ui/PNG/settings/btn_4.png'],
      key_icon: ['./img/game_items/PNG/items/key.png'],
      pearl_icon: ['./img/game_items/PNG/items/pearl.png'],
      star_icon: ['./img/game_items/PNG/items/starfish.png'],
    },
    object_information: [
      {
        name: 'background_bar_1',
        x: 40,
        y: 25,
        src: './img/game_ui/PNG/settings/window_6.png',
        width: 250,
        height: 15,
        landscapeWidth: '',
        portraitWidth: '',
      },
      {
        name: 'filling_level_1',
        x: 40,
        y: 25,
        src: './img/game_ui/PNG/settings/btn_1.png',
        width: 125,
        height: 15,
        landscapeWidth: '',
        portraitWidth: '',
      },
      {
        name: 'background_bar_2',
        x: 330,
        y: 25,
        src: './img/game_ui/PNG/settings/window_6.png',
        width: 200,
        height: 15,
        landscapeWidth: '',
        portraitWidth: '',
      },
      {
        name: 'filling_level_2',
        x: 330,
        y: 25,
        src: './img/game_ui/PNG/settings/btn_3.png',
        width: 0,
        height: 15,
        landscapeWidth: '',
        portraitWidth: '',
      },

      {
        name: 'filling_level_3',
        x: 40,
        y: 25,
        src: './img/game_ui/PNG/settings/btn_4.png',
        width: 0,
        height: 15,
        landscapeWidth: '',
        portraitWidth: '',
      },

      {
        name: 'star_icon',
        x: 10,
        y: 17,
        src: './img/game_items/PNG/items/starfish.png',
        width: 25,
        height: 25,
        landscapeWidth: '',
        portraitWidth: '',
      },

      {
        name: 'pearl_icon',
        x: 300,
        y: 20,
        src: './img/game_items/PNG/items/pearl.png',
        width: 25,
        height: 25,
        landscapeWidth: '',
        portraitWidth: '',
      },
      {
        name: 'key_icon',
        x: 540,
        y: 10,
        src: './img/game_items/PNG/items/key.png',
        width: 40,
        height: 40,
        landscapeWidth: '',
        portraitWidth: '',
      },
      {
        name: 'false_sign',
        x: 590,
        y: 22,
        src: './img/game_ui/PNG/settings/false.png',
        width: 20,
        height: 20,
        landscapeWidth: '',
        portraitWidth: '',
      },

      {
        name: 'endboss_icon',
        x: 640,
        y: 15,
        src: './img/fish/PNG/lionfish/move_000.png',
        width: 48,
        height: 32,
        landscapeWidth: '',
        portraitWidth: '',
      },

      {
        name: 'endboss_hit_icon',
        x: 695,
        y: 14,
        src: './img/game_ui/PNG/number/number_00.png',
        width: 32,
        height: 32,
        landscapeWidth: '',
        portraitWidth: '',
      },
    ],

    type: 'statusBarComponentArrays',
  },
];