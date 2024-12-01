// 演示类型兼容性
// let arr: string[] = ['a', 'b', 'c']

// arr.forEach((item) => {})
// arr.forEach((item, index) => {})
// arr.forEach((item, index, arr) => {})

class point {
  x: number
  y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

class point2D {
  x: number
  y: number
  constructor(x: number, y: number) {
    this.x = x
    this.y = y
  }
}

const p: point = new point2D(1, 2)

export {}