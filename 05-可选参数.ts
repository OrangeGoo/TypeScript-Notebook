const mySlice: (start?: number, end?: number) => void = (start, end) => {
  console.log('起始索引:', start, '结束索引:', end);
}

mySlice(1, 5)