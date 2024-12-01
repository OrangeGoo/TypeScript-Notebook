let obj: {
  name: string
  age: number
  sayHi: () => void
  greet(name: string): void
} = {
  name: '刘老师',
  age: 18,
  sayHi() {},
  greet(name) {}
}

export {}