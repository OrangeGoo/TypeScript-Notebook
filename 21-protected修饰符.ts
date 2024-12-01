class animal {
  // 实例不能访问，子类可以访问
  protected move(): void {
    console.log('走两步');
  }
  run(): void {
    this.move()
    console.log('跑起来');
  }
}

const a = new animal()
// 属性“move”受保护，只能在类“animal”及其子类中访问。
// a.move()

// 子类
class Dog extends animal {
  bark(): void {
    this.move()
    console.log('旺旺');
  }
}

export {}