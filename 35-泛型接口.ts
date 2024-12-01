interface IdFunc<Type> {
  id: (value: Type) => Type
  ids: () => Type[]
}

let obj: IdFunc<Number> = {
  id : (value) => {
    return value
  },
  ids: () => {
    return [1, 2, 3]
  }
}

export {}