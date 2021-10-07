function fizzbuzzall(n) {
  // ここに回答を書く
  for (let i = 1; n > i; i++) {
    if (i % 14 === 0) {
      console.log("piyo")
    } else if (i % 7 === 0) {
      console.log("fuga")
    } else if (i % 2 === 0) {
      console.log("hoge")
    }
  }
}
