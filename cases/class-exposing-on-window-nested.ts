class MyInternalClass2 {
  constructor() {}
  mount() {
    console.log(2);
  }
}
class MyInternalClass1 {
  constructor() {}
  mount() {
    const myInternalClass = new MyInternalClass2();
    myInternalClass.mount();
    console.log(1);
  }
}

class MyClass {
  constructor() {
    this.mount();
  }
  mount() {
    const myInternalClass1 = new MyInternalClass1();
    myInternalClass1.mount();
    console.log(0);
  }
}

window.MyClass = MyClass;
