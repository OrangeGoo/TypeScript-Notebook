class GenericNumber<NumType> {
  defaultType!: NumType;
  add!: (x: NumType, y: NumType) => NumType
}

const MyNum = new GenericNumber<number>()
MyNum.defaultType = 10

export {}