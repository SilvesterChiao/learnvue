// 1 字符的Unicode表示法
// \u0000~\uFFFF,超出这个范围的字符必须用两个双字节的形式表示
var s1 = '\u0061'
console.log(s1)

var s2 = '\uD842\uDFB7'
var s3 = '\u20BB7'
var s4 = '\u{20BB7}'
var s5 = '\u{41}\u{42}\u{43}'
console.log(s2)
console.log(s3)
console.log(s4)
console.log(s5)

let hello = 123
console.log(hello)

console.log('\u{1F680}' === '\uD83D\uDE80')

// JavaScript中一个字符的6种表示方法
'z' === 'z'
'\172' === 'z'
'\x7A' === 'z'
'\u007A' === 'z'
'\u{7A}' === 'z'
// 2 codePointAt()

console.log(s2.codePointAt(1))
console.log(s2.charAt())
// 3 String.fromCodePoint()
console.log(String.fromCodePoint(0x20bb7))
console.log(String.fromCodePoint(0x1f680))
// 4 字符串的遍历器接口

for (let codePoint of 'foo') {
  console.log(codePoint)
}

var text = String.fromCodePoint(0x20bb7)
for (let i = 0; i < text.length; i++) {
  console.log(text[i])
}

for (let i of text) {
  console.log(i)
}
// 5 at()
// 6 normalize()
// 7 includes(),startsWith(),endsWith()
// 8 repeat()
var h3 = 'he'.repeat(3)
console.log(h3)
// 9 padStart(),padEnd()
// var d1 = '12'.padStart(10,'YYYY-MM-DD');
// var d2 = '09-12'.padStart(10,'YYYY-MM-DD');
// console.log(d1);
// console.log(d2);
// 10 模板字符串
// 11 实例：模板编译
// 12 标签模板
// 13 String.raw()
// 14 模板字符串的限制
