class animal {
  move(): void {
    console.log('走两步');
  }
}
class dog extends animal {
  name: string = '二哈'
  bark(): void {
    console.log('旺旺');
  }
}

let d = new dog()
d.move()
d.bark()
console.log(d.name);

export {}