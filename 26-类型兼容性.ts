interface point {
  x: number;
  y: number;
}

interface point2D {
  x: number;
  y: number;
}

interface point3D {
  x: number;
  y: number;
  z: number;
}

let p1: point;
let p2: point2D;
let p3: point3D = {
  x: 1,
  y: 2,
  z: 3,
};

p1 = p3;

class point4D {
  x: number;
  y: number;
  z: number;
  constructor(x: number, y: number, z: number) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

p2 = new point4D(1, 2, 3);

export {};
