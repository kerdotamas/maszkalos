//const fillMap = require('./map').fillMap
// const { fillMap } = require('./map')  // több is importálhtaó { fillMap, valami}

// const width = 30;
// const height = 20;

// const  map = []
// const apples = []
// const player = {pos: { x:1, y:1 }, score: 0}

// map = fillMap(width, height, apples, player)

const { fillMap } = require('./map');

const width = 30;
const height = 20;

let map = [];
const apples = [];
const player = { pos: { x: 1, y: 1 }, score: 0 };

map = fillMap(width, height, apples, player);
