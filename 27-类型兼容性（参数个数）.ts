type F1 = (a: number) => void
type F2 = (a: number, b: number) => void

let f1: F1 = (a) => {}
let f2: F2
f2 = f1

export {}