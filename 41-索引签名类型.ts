interface AnyObject {
  [key: string]: number;
}

let obj: AnyObject = {
  a: 1,
  b: 2,
  c: 3,
};

// 模拟数组
interface MyArray<Type> {
  [index: number]: Type;
}

let arr1: MyArray<Number> = [1, 2, 3];
export {};
