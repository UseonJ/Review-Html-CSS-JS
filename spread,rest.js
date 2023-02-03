let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];

console.log(arr1) //[ 0, 1, 2, 3, 4, 5 ]

let a,b;
({a, b} = {a: 1, b: 2});

console.log(a)

var o = {p: 42, q: true};
var {p: foo, q: bar} = o;

console.log(foo); // 42
console.log(bar); // true
console.log(o) // {p: 42, q: true}
console.log(o.foo) // undefined
console.log(o.bar) // undefined

var {a: aa = 10, b: bb = 5} = {a: 3};

console.log(aa); // 3
console.log(bb); // 5

var {a: aa = 10, b: bb = 5} = {a: 3};

console.log(aa); // 3
console.log(bb); // 5
// console.log(a); // a is not defined

function drawES5Chart(options) {
    options = options === undefined ? {} : options;
    var size = options.size === undefined ? 'big' : options.size;
    var cords = options.cords === undefined ? { x: 0, y: 0 } : options.cords;
    var radius = options.radius === undefined ? 25 : options.radius;
    console.log(size, cords, radius); //  
    // 이제 드디어 차트 그리기 수행
  }
  
  drawES5Chart({
    cords: { x: 18, y: 30 },
    radius: 30
  }) // big { x: 18, y: 30 } 30
  drawES5Chart() // big { x: 0, y: 0 } 25

  //ES2015 version
  function drawES2015Chart({size = 'big', cords = { x: 0, y: 0 }, radius = 25} = {}) {
    console.log(size, cords, radius);
    // 차트 그리기 수행
  }
  
  drawES2015Chart({
    cords: { x: 18, y: 30 },
    radius: 30
  }); // big { x: 18, y: 30 } 30 


  var metadata = {
    title: "Scratchpad",
    translations: [
       {
        locale: "de",
        localization_tags: [ ],
        last_edit: "2014-04-14T08:43:37",
        url: "/de/docs/Tools/Scratchpad",
        title: "JavaScript-Umgebung"
       }
    ],
    url: "/en-US/docs/Tools/Scratchpad"
};

var { title: englishTitle, translations: [{ title: localeTitle }] } = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle);  // "JavaScript-Umgebung"

var people = [
    {
      name: "Mike Smith",
      family: {
        mother: "Jane Smith",
        father: "Harry Smith",
        sister: "Samantha Smith"
      },
      age: 35
    },
    {
      name: "Tom Jones",
      family: {
        mother: "Norah Jones",
        father: "Richard Jones",
        brother: "Howard Jones"
      },
      age: 25
    }
  ];
  
  for (var {name: n, family: { father: f } } of people) {
    console.log("Name: " + n + ", Father: " + f);
  }
  
  // "Name: Mike Smith, Father: Harry Smith"
  // "Name: Tom Jones, Father: Richard Jones"

//   식별자 규칙
// 키워드를 사용하면 안 된다.
// 숫자로 시작하면 안 된다.
// 특수 문자는 _와 $만 허용된다.
// 공백 문자를 포함할 수 없다.

// 속성 이름이 유효한 JavaScript 식별자명이 아닌 경우
// 구조 분해는 JavaScript 식별자 이름으로 적합하지 않은 속성명이 제공된 경우에도 이용할 수 있습니다. 이 때는 대체할 유효한 식별자명을 제공해야 합니다.

const foo = { 'fizz-buzz': true }; //-는 허용되는 특수문자가 아님!! 그보다도 속성에 '' 붙여서 문자열로 사용한게 더 부적절!!
const { 'fizz-buzz': fizzBuzz } = foo; //fizzBuzz로 대체

console.log(fizzBuzz); // "true"
//then what is foo now?
console.log(foo) //{ 'fizz-buzz': true }
console.log(foo.fizzBuzz) // undefined
console.log(foo['fizz-buzz'])
// console.log(foo.'fizz-buzz') // 작동안됨.

