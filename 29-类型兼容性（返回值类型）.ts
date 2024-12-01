type F7 = () => {name: string}
type F8 = () => {name: string, age: number}

let f7: F7
let f8: F8 = () => {return {name: 'jack', age: 8}}

f7 = f8