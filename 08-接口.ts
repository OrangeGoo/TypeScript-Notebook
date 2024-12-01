interface iPerson {
  name: string
  age: number
  sayHi: () => void
}

let person: iPerson = {
  name: '刘老师',
  age: 28,
  sayHi: () => {}
}

let person1: iPerson = {
  name: '顾老师',
  age: 20,
  sayHi() {}
}

export {}