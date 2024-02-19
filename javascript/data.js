let mermaidType = 1;
let canvas;
let world;
const MAX_CRAB_ENEMIES = 15;
const CANVAS_HEIGHT = 480;

const originalBackgroundWidth = 1920;
const originalBackgroundHeight = 1080;
const backgroundImagesPathFront = './img/Game_backgrounds/PNG/game_background_';
const backgroundImagesPathBack = [
  '/layers/1.png',
  '/layers/2.png',
  '/layers/3.png',
  '/layers/4.png',
  '/layers/5.png',
  '/layers/6.png',
];

const mermaidData = {
  1: {
    acceleration_width: 1082,
    acceleration_height: 520,
    attack_width: 1476,
    attack_height: 949,
    die_width: 1334,
    die_height: 1113,
    hurt_width: 1086,
    hurt_height: 600,
    idle_width: 666,
    idle_height: 1028,
    joy_width: 548,
    joy_height: 1136,
    move_width: 1184,
    move_height: 949,
  },

  2: {
    acceleration_width: 1070,
    acceleration_height: 549,
    attack_width: 1460,
    attack_height: 917,
    die_width: 1254,
    die_height: 999,
    hurt_width: 1166,
    hurt_height: 497,
    idle_width: 629,
    idle_height: 1033,
    joy_width: 518,
    joy_height: 1116,
    move_width: 1163,
    move_height: 917,
  },

  3: {
    acceleration_width: 1069,
    acceleration_height: 634,
    attack_width: 1458,
    attack_height: 915,
    die_width: 1228,
    die_height: 1009,
    hurt_width: 1210,
    hurt_height: 654,
    idle_width: 676,
    idle_height: 1090,
    joy_width: 526,
    joy_height: 1172,
    move_width: 1173,
    move_height: 917,
  },
};

const yellowCrabData = {
  attack_width: 340,
  attack_height: 270,
  die_width: 401,
  die_height: 204,
  move_width: 408,
  move_height: 197,
};

const redCrabData = {
  attack_width: 542,
  attack_height: 243,
  die_width: 542,
  die_height: 329,
  idle_width: 594,
  idle_height: 280,
};

const jellyfishBlueData = {
  die_width: 150,
  die_height: 185,
  move_width: 130,
  move_height: 87,
};

const jellyfishPinkData = {
  die_width: 190,
  die_height: 257,
  move_width: 143,
  move_height: 225,
};

const jellyfishPurpleData = {
  die_width: 221,
  die_height: 293,
  move_width: 196,
  move_height: 294,
};

const blowfishData = {
  attack_width: 324,
  attack_height: 235,
  die_width: 358,
  die_height: 305,
  move_width: 208,
  move_height: 111,
};

const butterflyfishData = {
  attack_width: 247,
  attack_height: 198,
  die_width: 361,
  die_height: 353,
  move_width: 236,
  move_height: 193,
};

const clownfishData = {
  attack_width: 236,
  attack_height: 138,
  die_width: 342,
  die_height: 321,
  move_width: 231,
  move_height: 135,
};

const hammerheadData = {
  attack_width: 804,
  attack_height: 395,
  die_width: 798,
  die_height: 463,
  move_width: 773,
  move_height: 382,
};

const lionfishData = {
  attack_width: 458,
  attack_height: 345,
  die_width: 452,
  die_height: 437,
  move_width: 423,
  move_height: 336,
};

const seaUrchinData = {
  attack_width: 364,
  attack_height: 357,
  idle_width: 311,
  idle_height: 318,
};

const sharkData = {
  attack_width: 1075,
  attack_height: 529,
  die_width: 1060,
  die_height: 512,
  move_width: 1036,
  move_height: 483,
};
