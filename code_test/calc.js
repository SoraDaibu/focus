class PositiveNumber {
  constructor() {
    this.num = 0;
  }


  // 255以下の正の整数のみ受け付けます。
  // accept only positive integers
  acceptable(num) {
    if (typeof (num) !== 'number' || !Number.isInteger(num) || (num < 0) || (num > 255)) {
      return false;
    } else {
      return true;
    }
  }

  setnum(num) {
    if (!this.acceptable(num)) {
      return false;
    }
    this.num = num
    return this.num
  }

  add(num) {
    if (!this.acceptable(num)) {
      return false;
    }

    this.num = this.num + num;
    return this.num;
  }

  mul(num) {
    if (!this.acceptable(num)) {
      return false;
    }

    this.num = this.num * num;
    return this.num;
  }
}

class Calc {
  constructor() { }

  // x^2 + y^2 を計算します。
  // calculate x^2 + y^2
  calc_sum_squared(x, y) {
    let num1 = new PositiveNumber();
    let ret = num1.setnum(x);
    if (ret === false) {
      return false;
    }
    let x_squared = num1.mul(x);
    if (x_squared === false) {
      return false;
    }
    let num2 = new PositiveNumber();
    ret = num2.setnum(y);
    if (ret === false) {
      return false;
    }
    let y_squared = num2.mul(y);
    if (y_squared === false) {
      return false;
    }
    let num3 = new PositiveNumber();
    ret = num3.setnum(x_squared);
    if (ret === false) {
      return false;
    }
    let sum_squared = num3.add(y_squared);
    if (sum_squared === false) {
      return false;
    }
    return sum_squared;
  }
}

class TestCalc {
  constructor() { }

  test_calc_sum_squared() {
    let calc = new Calc();
    console.assert(calc.calc_sum_squared(4, 3) === 25);
  }

  test_calc_sum_squared_fail_negative_int() {
    let calc = new Calc();
    console.assert(calc.calc_sum_squared(4, -3) === false);
  }

  test_calc_sum_squared_fail_string_input() {
    let calc = new Calc();
    const result = calc.calc_sum_squared(100, 3)
    console.assert(typeof result != typeof "string")
  }
}

function main() {
  let testCalc = new TestCalc();
  testCalc.test_calc_sum_squared();
  testCalc.test_calc_sum_squared_fail_negative_int();
  testCalc.test_calc_sum_squared_fail_string_input();

  console.log("all is well");
}

main();
