/**
 * Array with all image paths and other information 
 * like width and height etc. for images. If you want to add futher paths
 * make sure to use an array with a suitable key for a series of images
 * and the key src: for a single image path
 */

const allImages = [
  {
    type: 'backgroundArrays',
    array: [
      `./img/game_backgrounds/PNG/game_background_${backgroundNumber}/layers/1.png`,
      `./img/game_backgrounds/PNG/game_background_${backgroundNumber}/layers/2.png`,
      `./img/game_backgrounds/PNG/game_background_${backgroundNumber}/layers/3.png`,
      `./img/game_backgrounds/PNG/game_background_${backgroundNumber}/layers/4.png`,
      `./img/game_backgrounds/PNG/game_background_${backgroundNumber}/layers/5.png`,
      `./img/game_backgrounds/PNG/game_background_${backgroundNumber}/layers/6.png`,
    ],
  },

  {
    type: 'mermaidArrays',
    images: {
      die: [
        `./img/mermaid/PNG/mermaid_${mermaidType}/die_000.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/die_001.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/die_002.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/die_003.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/die_004.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/die_005.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/die_006.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/die_007.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/die_008.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/die_009.png`,
      ],

      hurt: [
        `./img/mermaid/PNG/mermaid_${mermaidType}/hurt_000.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/hurt_001.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/hurt_002.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/hurt_003.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/hurt_004.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/hurt_005.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/hurt_006.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/hurt_007.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/hurt_008.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/hurt_009.png`,
      ],

      idle: [
        `./img/mermaid/PNG/mermaid_${mermaidType}/idle_000.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/idle_001.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/idle_002.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/idle_003.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/idle_004.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/idle_005.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/idle_006.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/idle_007.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/idle_008.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/idle_009.png`,
      ],

      move: [
        `./img/mermaid/PNG/mermaid_${mermaidType}/move_000.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/move_001.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/move_002.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/move_003.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/move_004.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/move_005.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/move_006.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/move_007.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/move_008.png`,
        `./img/mermaid/PNG/mermaid_${mermaidType}/move_009.png`,
      ],
    },
  },

  {
    type: 'blowfishArrays',
    images: {
      attack: [
        './img/fish/PNG/blowfish/attack_000.png',
        './img/fish/PNG/blowfish/attack_001.png',
        './img/fish/PNG/blowfish/attack_002.png',
        './img/fish/PNG/blowfish/attack_003.png',
        './img/fish/PNG/blowfish/attack_004.png',
        './img/fish/PNG/blowfish/attack_005.png',
        './img/fish/PNG/blowfish/attack_006.png',
        './img/fish/PNG/blowfish/attack_007.png',
        './img/fish/PNG/blowfish/attack_008.png',
        './img/fish/PNG/blowfish/attack_009.png',
      ],

      die: [
        './img/fish/PNG/blowfish/die_000.png',
        './img/fish/PNG/blowfish/die_001.png',
        './img/fish/PNG/blowfish/die_002.png',
        './img/fish/PNG/blowfish/die_003.png',
        './img/fish/PNG/blowfish/die_004.png',
        './img/fish/PNG/blowfish/die_005.png',
        './img/fish/PNG/blowfish/die_006.png',
        './img/fish/PNG/blowfish/die_007.png',
        './img/fish/PNG/blowfish/die_008.png',
        './img/fish/PNG/blowfish/die_009.png',
      ],

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
  },

  {
    type: 'clownfishArrays',
    images: {
      attack: [
        './img/fish/PNG/clownfish/attack_000.png',
        './img/fish/PNG/clownfish/attack_001.png',
        './img/fish/PNG/clownfish/attack_002.png',
        './img/fish/PNG/clownfish/attack_003.png',
        './img/fish/PNG/clownfish/attack_004.png',
        './img/fish/PNG/clownfish/attack_005.png',
        './img/fish/PNG/clownfish/attack_006.png',
        './img/fish/PNG/clownfish/attack_007.png',
        './img/fish/PNG/clownfish/attack_008.png',
        './img/fish/PNG/clownfish/attack_009.png',
      ],

      die: [
        './img/fish/PNG/clownfish/die_000.png',
        './img/fish/PNG/clownfish/die_001.png',
        './img/fish/PNG/clownfish/die_002.png',
        './img/fish/PNG/clownfish/die_003.png',
        './img/fish/PNG/clownfish/die_004.png',
        './img/fish/PNG/clownfish/die_005.png',
        './img/fish/PNG/clownfish/die_006.png',
        './img/fish/PNG/clownfish/die_007.png',
        './img/fish/PNG/clownfish/die_008.png',
        './img/fish/PNG/clownfish/die_009.png',
      ],

      move: [
        '/img/fish/PNG/clownfish/move_000.png',
        '/img/fish/PNG/clownfish/move_001.png',
        '/img/fish/PNG/clownfish/move_002.png',
        '/img/fish/PNG/clownfish/move_003.png',
        '/img/fish/PNG/clownfish/move_004.png',
        '/img/fish/PNG/clownfish/move_005.png',
        '/img/fish/PNG/clownfish/move_006.png',
        '/img/fish/PNG/clownfish/move_007.png',
        '/img/fish/PNG/clownfish/move_008.png',
        '/img/fish/PNG/clownfish/move_009.png',
      ],
    },
  },

  {
    type: 'redCrabArrays',
    images: {
      attack: [
        './img/fish/PNG/redCrab/attack_000.png',
        './img/fish/PNG/redCrab/attack_001.png',
        './img/fish/PNG/redCrab/attack_002.png',
        './img/fish/PNG/redCrab/attack_003.png',
        './img/fish/PNG/redCrab/attack_004.png',
        './img/fish/PNG/redCrab/attack_005.png',
        './img/fish/PNG/redCrab/attack_006.png',
        './img/fish/PNG/redCrab/attack_007.png',
        './img/fish/PNG/redCrab/attack_008.png',
        './img/fish/PNG/redCrab/attack_009.png',
      ],

      die: [
        './img/fish/PNG/redCrab/die_000.png',
        './img/fish/PNG/redCrab/die_001.png',
        './img/fish/PNG/redCrab/die_002.png',
        './img/fish/PNG/redCrab/die_003.png',
        './img/fish/PNG/redCrab/die_004.png',
        './img/fish/PNG/redCrab/die_005.png',
        './img/fish/PNG/redCrab/die_006.png',
        './img/fish/PNG/redCrab/die_007.png',
        './img/fish/PNG/redCrab/die_008.png',
        './img/fish/PNG/redCrab/die_009.png',
      ],

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
  },

  {
    type: 'yellowCrabArrays',
    images: {
      attack: [
        './img/fish/PNG/yellowCrab/attack_000.png',
        './img/fish/PNG/yellowCrab/attack_001.png',
        './img/fish/PNG/yellowCrab/attack_002.png',
        './img/fish/PNG/yellowCrab/attack_003.png',
        './img/fish/PNG/yellowCrab/attack_004.png',
        './img/fish/PNG/yellowCrab/attack_005.png',
        './img/fish/PNG/yellowCrab/attack_006.png',
        './img/fish/PNG/yellowCrab/attack_007.png',
        './img/fish/PNG/yellowCrab/attack_008.png',
        './img/fish/PNG/yellowCrab/attack_009.png',
      ],

      die: [
        './img/fish/PNG/yellowCrab/die_000.png',
        './img/fish/PNG/yellowCrab/die_001.png',
        './img/fish/PNG/yellowCrab/die_002.png',
        './img/fish/PNG/yellowCrab/die_003.png',
        './img/fish/PNG/yellowCrab/die_004.png',
        './img/fish/PNG/yellowCrab/die_005.png',
        './img/fish/PNG/yellowCrab/die_006.png',
        './img/fish/PNG/yellowCrab/die_007.png',
        './img/fish/PNG/yellowCrab/die_008.png',
        './img/fish/PNG/yellowCrab/die_009.png',
      ],

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
  },

  {
    type: 'lionfishArrays',
    images: {
      attack: [
        './img/fish/PNG/lionfish/attack_000.png',
        './img/fish/PNG/lionfish/attack_001.png',
        './img/fish/PNG/lionfish/attack_002.png',
        './img/fish/PNG/lionfish/attack_003.png',
        './img/fish/PNG/lionfish/attack_004.png',
        './img/fish/PNG/lionfish/attack_005.png',
        './img/fish/PNG/lionfish/attack_006.png',
        './img/fish/PNG/lionfish/attack_007.png',
        './img/fish/PNG/lionfish/attack_008.png',
        './img/fish/PNG/lionfish/attack_009.png',
      ],

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
  },

  {
    type: 'blueJellyfishArrays',
    images: {
      die: [
        './img/fish/PNG/blueJellyfish/die_000.png',
        './img/fish/PNG/blueJellyfish/die_001.png',
        './img/fish/PNG/blueJellyfish/die_002.png',
        './img/fish/PNG/blueJellyfish/die_003.png',
        './img/fish/PNG/blueJellyfish/die_004.png',
        './img/fish/PNG/blueJellyfish/die_005.png',
        './img/fish/PNG/blueJellyfish/die_006.png',
        './img/fish/PNG/blueJellyfish/die_007.png',
        './img/fish/PNG/blueJellyfish/die_008.png',
        './img/fish/PNG/blueJellyfish/die_009.png',
      ],

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
  },

  {
    type: 'gameItems',
    items: [
      {
        name: 'chest_closed',
        x: 5200,
        y: 250,
        src: './img/game_items/PNG/neutral/chest_closed.png',
        width: 250,
        height: 80,
      },
      {
        name: 'smashed_barrel',
        x: 50,
        y: 350,
        src: './img/game_items/PNG/items/barrel_2.png',
        width: 200,
        height: 80,
      },
      {
        name: 'anchor',
        x: 1200,
        y: 200,
        src: './img/game_items/PNG/items/anchor.png',
        width: 200,
        height: 200,
      },
      {
        name: 'steering_wheel',
        x: 1800,
        y: 200,
        src: './img/game_items/PNG/items/steering-wheel.png',
        width: 200,
        height: 200,
      },
      {
        name: 'stalagtite',
        x: 970,
        y: 0,
        src: './img/game_items/PNG/items/stone_4.png',
        width: 400,
        height: 100,
      },
      {
        name: 'stalagtite',
        x: 905,
        y: 0,
        src: './img/game_items/PNG/items/stone_4.png',
        width: 400,
        height: 120,
      },
      {
        name: 'rock',
        x: 800,
        y: 80,
        src: './img/game_items/PNG/items/stone_6.png',
        width: 400,
        height: 150,
      },
      {
        name: 'flat_rock',
        x: 800,
        y: 350,
        src: './img/game_items/PNG/items/stone_3.png',
        width: 300,
        height: 150,
      },
      {
        name: 'stalagtite',
        x: 2900,
        y: 0,
        src: './img/game_items/PNG/items/stone_4.png',
        width: 400,
        height: 90,
      },
      {
        name: 'stalagmite',
        x: 2860,
        y: 260,
        src: './img/game_items/PNG/items/stone_5.png',
        width: 400,
        height: 140,
      },
      {
        name: 'stalagtite',
        x: 3700,
        y: 0,
        src: './img/game_items/PNG/items/stone_4.png',
        width: 400,
        height: 90,
      },
      {
        name: 'stalagmite',
        x: 3660,
        y: 260,
        src: './img/game_items/PNG/items/stone_5.png',
        width: 400,
        height: 140,
      },
    ],
  },

  {
    type: 'mobileItems',
    items: {
      ironChain: {
        name: 'chain',
        x: 600,
        y: -2,
        src: 'img/game_items/PNG/chain/chain_000.png',
        landscape_width: 200,
        portrait_width: 90,
        array: [
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
      dangerousBomb: {
        name: 'bomb',
        x: 180,
        y: 180,
        src: './img/game_items/PNG/bomb/move_000.png',
        landscape_width: 40,
        portrait_width: 40,
        array: [
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
      },
    },
  },

  {
    type: 'valuableItems',
    items: {
      golden_key: {
        name: 'key',
        x: 3850,
        y: 100,
        src: './img/game_items/PNG/items/key.png',
        width: 20,
        height: 50,
      },

      yellow_starfish: {
        name: 'starfish',
        x: randomRangeX,
        y: randomRangeY,
        src: './img/game_items/PNG/items/starfish.png',
        width: 50,
        height: 80,
      },

      pearl_in_a_shell: {
        name: 'pearl',
        x: randomRangeX,
        y: randomRangeY,
        src: './img/game_items/PNG/items/pearl.png',
        width: 40,
        height: 50,
      },
    },
  },

  {
    type: 'stoneSlabs',
    images: {
      name: 'stone_slabs',
      src: './img/game_ui/PNG/menu/window.png',
    },
  },

  {
    type: 'trueSign',
    images: {
      name: 'true_sign',
      src: './img/game_ui/PNG/settings/true.png',
    },
  },

  {
    type: 'bubbleWeapon',
    images: {
      name: 'bubble',
      src: './img/game_items/PNG/neutral/bubble_1.png',
    },
  },

  {
    type: 'openTreasureChest',
    images: {
      name: 'chest_open',
      src: './img/game_items/PNG/neutral/chest_open.png',
    },
  },

  {
    type: 'statusbarComponents',
    items: [
      {
        name: 'background_bar1',
        x: 40,
        y: 25,
        src: './img/game_ui/PNG/settings/window_6.png',
        width: 250,
        height: 15,
      },

      {
        name: 'filling_level1',
        x: 40,
        y: 25,
        src: './img/game_ui/PNG/settings/btn_1.png',
        width: 125,
        height: 15,
      },

      {
        name: 'background_bar2',
        x: 330,
        y: 25,
        src: './img/game_ui/PNG/settings/window_6.png',
        width: 200,
        height: 15,
      },

      {
        name: 'filling_level2',
        x: 330,
        y: 25,
        src: './img/game_ui/PNG/settings/btn_3.png',
        width: 0,
        height: 15,
      },

      {
        name: 'star_icon',
        x: 10,
        y: 17,
        src: './img/game_items/PNG/items/starfish.png',
        width: 25,
        height: 25,
      },

      {
        name: 'pearl_icon',
        x: 300,
        y: 20,
        src: './img/game_items/PNG/items/pearl.png',
        width: 25,
        height: 25,
      },

      {
        name: 'key_icon',
        x: 540,
        y: 10,
        src: './img/game_items/PNG/items/key.png',
        width: 40,
        height: 40,
      },

      {
        name: 'false_sign',
        x: 590,
        y: 22,
        src: './img/game_ui/PNG/settings/false.png',
        width: 20,
        height: 20,
      },
    ],
  },
];

/* golden_key: {
  name: 'key',
  x: randomRangeX,
  y: randomRangeY,
  src: './img/game_items/PNG/items/key.png',
  width: 20,
  height: 50,
} */
