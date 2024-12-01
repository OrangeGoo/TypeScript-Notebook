class person {
  // 只读属性
  readonly age: number;
  constructor(age: number) {
    this.age = age;
  }

  // 错误演示
  // readonly setAge(): void{
  //   this.age = 20
  // }
}

class person2 {
  // 注意：只要是readonly来修饰的类型，必须手动提供明确的类型
  readonly age: number = 18;
  constructor(age: number) {
    this.age = age;
  }
}

interface iPerson {
  readonly name: string;
}

let obj: iPerson = {
  name: "jack",
};

let obj2: { readonly name: string } = {
  name: "kuck",
};

export {};
