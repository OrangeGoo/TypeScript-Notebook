interface point2D {
  x: number
  y: number
}

interface point3D extends point2D {
  z: number
}

let obj: point3D = {
  x: 1,
  y: 2,
  z: 3
}

export {}