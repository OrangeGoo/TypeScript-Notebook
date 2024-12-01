function id<Type>(value: Type): Type {
  return value;
}

const num = id<number>(10);
console.log(num);

const str = id<string>("a");

const ret = id<boolean>(false);

export {};
