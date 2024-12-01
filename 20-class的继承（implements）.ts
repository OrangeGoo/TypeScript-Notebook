interface singable {
  name: string;
  sing(): void;
}

class person implements singable {
  name = "jack";
  sing() {
    console.log("111");
  }
}

export {};
