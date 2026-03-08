const s = require("./solutions");

test("sumObjectArrays", () => {
  expect(s.sumObjectArrays({ food:[10,20,30], travel:[5,15], bills:[40,60] }))
    .toEqual({ food:60, travel:20, bills:100 });
});

test("countWords", () => {
  expect(s.countWords(["apple","banana","apple","orange","banana","apple"]))
    .toEqual({ apple:3, banana:2, orange:1 });
});

test("swapKeysAndValues", () => {
  expect(s.swapKeysAndValues({ a:"x", b:"y", c:"z" }))
    .toEqual({ x:"a", y:"b", z:"c" });
});

test("largestValueKey", () => {
  expect(s.largestValueKey({ a:10, b:50, c:20 })).toBe("b");
});

test("flattenObjectArrays", () => {
  expect(s.flattenObjectArrays({ fruits:["apple","banana"], veggies:["carrot","pea"] }))
    .toEqual(["apple","banana","carrot","pea"]);
});

test("groupByCity", () => {
  expect(s.groupByCity([
    {name:"A", city:"Delhi"},
    {name:"B", city:"Mumbai"},
    {name:"C", city:"Delhi"}
  ])).toEqual({ Delhi:["A","C"], Mumbai:["B"] });
});

test("filterValuesGreaterThan50", () => {
  expect(s.filterValuesGreaterThan50({ a:20,b:60,c:40,d:90 }))
    .toEqual({ b:60, d:90 });
});

test("highestAverageStudent", () => {
  expect(s.highestAverageStudent({ A:[80,90], B:[70,75,85] })).toBe("A");
});

test("uniqueValues", () => {
  expect(s.uniqueValues({ x:[1,2,3], y:[2,3,4], z:[4,5] }))
    .toEqual([1,2,3,4,5]);
});

test("pickKeys", () => {
  expect(s.pickKeys({ name:"Rahul", age:23, city:"Noida" }, ["name","city"]))
    .toEqual({ name:"Rahul", city:"Noida" });
});

test("countEvenOdd", () => {
  expect(s.countEvenOdd([1,2,3,4,5,6]))
    .toEqual({ even:3, odd:3 });
});

test("commonKeys", () => {
  expect(s.commonKeys({a:1,b:2,c:3}, {b:4,c:5,d:6}))
    .toEqual(["b","c"]);
});

test("arrayToLookup", () => {
  expect(s.arrayToLookup([{id:1,name:"A"},{id:2,name:"B"}]))
    .toEqual({ 1:{id:1,name:"A"}, 2:{id:2,name:"B"} });
});

test("checkPermission", () => {
  const roles={ admin:["read","write"], user:["read"], staff:["write"] };
  expect(s.checkPermission(roles,"user","write")).toBe(false);
});

test("revenueByCategory", () => {
  expect(s.revenueByCategory([
    {id:1,category:"electronics",price:100},
    {id:2,category:"clothes",price:50},
    {id:3,category:"electronics",price:200}
  ])).toEqual({ electronics:300, clothes:50 });
});

test("intersectionAll", () => {
  expect(s.intersectionAll({ a:[1,2,3], b:[2,3,4], c:[3,4,5] }))
    .toEqual([3]);
});

test("deepMerge", () => {
  expect(s.deepMerge({a:{x:1,y:2}}, {a:{y:3,z:4}}))
    .toEqual({ a:{x:1,y:3,z:4} });
});

test("reconcileLists", () => {
  expect(s.reconcileLists(["a","b","c"], ["b","c","d"]))
    .toEqual({ missing:["a"], extra:["d"] });
});

test("mergeObjects", () => {
  expect(s.mergeObjects({a:10,b:20},{a:5,c:15}))
    .toEqual({ a:5,b:20,c:15 });
});
