// const getProps = <Type, Key extends keyof Type>(obj: Type, key: Key): Type[Key] => {
//   return obj[key]
// }
const getProps: <Type, Key extends keyof Type>(obj: Type, key: Key) => Type[Key] = (obj, key) => {
  return obj[key]
}

const res = getProps({ name: 'jack', age: '18'}, 'name')
console.log(res);

export {}