
const screen = document.querySelector("#space-invaders");
const context = screen.getContext("2d");

const status = {play: true,score: 0,tela: 'start',frames: 0, text: {size: 30, font: "Arcade", color: "white"},
 player: {width: 50, height: 40, posX: 325, posY: 0, velocity: 10}, shot: [],invaders: [],
invadersConfig: {size: 40, rows: 5, cols: 8, gapV: 20, gapH: 700 / 8, direction: 'left' }}



