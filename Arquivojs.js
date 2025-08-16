
const screen = document.querySelector("#space-invaders");
const context = screen.getContext("2d");

const status = {play: true,score: 0,tela: 'start',frames: 0, text: {size: 30, font: "Arcade", color: "white"},
 player: {width: 50, height: 40, posX: 325, posY: 0, velocity: 10}, shot: [],invaders: [],
invadersConfig: {size: 40, rows: 5, cols: 8, gapV: 20, gapH: 700 / 8, direction: 'left' }}

const reducer = (state, action) => {
    switch(action.type) {
        case 'MOVE_LEFT':
            return {...state, player: {...state.player, posX: state.player.posX - state.player.velocity}};
        case 'MOVE_RIGHT':
            return {...state, player: {...state.player, posX: state.player.posX + state.player.velocity}};
        case 'MOVE_UP':
            return {...state, player: {...state.player, posY: state.player.posY - state.player.velocity}};
        case 'MOVE_DOWN':
            return {...state, player: {...state.player, posY: state.player.posY + state.player.velocity}};
        case 'SHOOT':
            return {...state, shot: [...state.shot, {x: state.player.posX + state.player.width / 2, y: state.player.posY}]};
        default:
            return state;
    }
}
const dispatch = (state, action) => reducer(state, action)

const botões = () => {
 ArrowLeft => dispatch({type:'MOVE_LEFT'})
 ArrowRight => dispatch({type:'MOVE_RIGHT'})
 ArrowUp => dispatch({type:'MOVE_UP'})
 ArrowDown => dispatch({type:'MOVE_DOWN'})
 Space => dispatch({type:'SHOOT'})
}

function preload() {
    naveimg = loadImage("documents/nave.pxo")
    invader = loadImage("documents/invader")
    invader = loadImage("documents/invader2")
    invader = loadImage("documents/invader3")
    invader = loadImage("documents/invader4")
    lasernave = loadImage("documents/laserred")
}
