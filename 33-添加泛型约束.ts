interface ILength {
  length: number
}

const id: <Type extends ILength>(value: Type) => Type = (value) => {
  const l = value.length
  return value
}

id(['a', 'b'])

export {}