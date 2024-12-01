export function add(num1: number, num2: number): number {
  return num1 + num2
}

export const add1 = (num1: number, num2: number): number => {
  return num1 + num2
}

export const add2: (num1: number, num2: number) => number = (num1, num2) => {
  return num1 + num2
}

console.log(add2(1, 2));
