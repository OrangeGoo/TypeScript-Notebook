console.log(typeof 'Hello TS');

let p = { x: 1, y: 2}

const formatPoint: (point: typeof p) => void = (point) => {}
formatPoint({ x: 1, y: 100})

export {}