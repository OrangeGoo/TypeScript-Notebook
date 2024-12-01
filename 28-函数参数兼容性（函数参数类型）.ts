interface point2D {
  x: number
  y: number
}

interface point3D {
  x: number
  y: number
  z: number
}

type F2 = (p: point2D) => void
type F3 = (p: point3D) => void

let p2: F2 = () => {}
let p3: F3

p3 = p2

export {}