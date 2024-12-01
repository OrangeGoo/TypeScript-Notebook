class Point {
  x = 1
  y = 2
  scale(n: number): void {
    this.x *= n
    this.y *=n
  } 
}

let p = new Point()
p.scale(10)
console.log(p.x, p.y);

export {}