interface A {
  fn: (value: number) => number
}

interface B {
  fn: (value: string) => string
}

type C = A & B

let c!: C 
c.fn(1)
c.fn('')

export {}