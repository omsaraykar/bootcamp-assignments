const {
  sumObjectArrays,
  countWords,
  swapKeysAndValues,
  largestValueKey,
  flattenObjectArrays,
  groupByCity,
  filterValuesGreaterThan50,
  uniqueValues,
  pickKeys,
  highestAverageStudent,
  sortObjectByValues,
  countKeys,
  capitalizeValues,
  objectToQuery,
  countEvenOdd,
  commonKeys,
  arrayToLookup,
  allValuesAreNumbers,
  intersectionAll,
  countEvenOddInObjectArrays,
  sumTransactions,
  transformIdToName,
  removeFalsy,
  checkPermission,
  revenueByCategory,
  removeDuplicateById,
  chunkObject,
  longestStringValue,
  transformLanguages,
  groupIdsByCategory,
  removeNestedKey,
  deepEqual,
  deepFlattenObjectArrays,
  mostRepeatedWord,
  deepMerge,
  nestedDestructure,
  topNKeys,
  sortByNameAge,
  reconcileLists,
  mergeObjects
} = require("./solutions");

test("sumObjectArrays", () => {
  expect(sumObjectArrays({ food: [10, 20, 30], travel: [5, 15], bills: [40, 60] }))
    .toEqual({ food: 60, travel: 20, bills: 100 });
});

test("countWords", () => {
  expect(countWords(["apple", "banana", "apple", "orange", "banana", "apple"]))
    .toEqual({ apple: 3, banana: 2, orange: 1 });
});

test("swapKeysAndValues", () => {
  expect(swapKeysAndValues({ a: "x", b: "y", c: "z" }))
    .toEqual({ x: "a", y: "b", z: "c" });
});

test("largestValueKey", () => {
  expect(largestValueKey({ a: 10, b: 50, c: 20 })).toBe("b");
});

test("flattenObjectArrays", () => {
  expect(flattenObjectArrays({ fruits: ["apple", "banana"], veggies: ["carrot", "pea"] }))
    .toEqual(["apple", "banana", "carrot", "pea"]);
});

test("groupByCity", () => {
  expect(groupByCity([
    { name: "A", city: "Delhi" },
    { name: "B", city: "Mumbai" },
    { name: "C", city: "Delhi" }
  ])).toEqual({ Delhi: ["A", "C"], Mumbai: ["B"] });
});

test("filterValuesGreaterThan50", () => {
  expect(filterValuesGreaterThan50({ a: 20, b: 60, c: 40, d: 90 }))
    .toEqual({ b: 60, d: 90 });
});

test("uniqueValues", () => {
  expect(uniqueValues({ x: [1, 2, 3], y: [2, 3, 4], z: [4, 5] }))
    .toEqual([1, 2, 3, 4, 5]);
});

test("pickKeys", () => {
  expect(pickKeys({ name: "Rahul", age: 23, city: "Noida" }, ["name", "city"]))
    .toEqual({ name: "Rahul", city: "Noida" });
});

test("highestAverageStudent", () => {
  expect(highestAverageStudent({ A: [80, 90], B: [70, 75, 85] })).toBe("A");
});

test("sortObjectByValues", () => {
  expect(sortObjectByValues({ a: 3, b: 1, c: 2 }))
    .toEqual([["b", 1], ["c", 2], ["a", 3]]);
});

test("countKeys", () => {
  expect(countKeys({ a: 1, b: 2, c: 3 })).toBe(3);
});

test("capitalizeValues", () => {
  expect(capitalizeValues({ name: "alice", city: "delhi" }))
    .toEqual({ name: "Alice", city: "Delhi" });
});

test("objectToQuery", () => {
  expect(objectToQuery({ name: "Alice", age: 25 }))
    .toBe("name=Alice&age=25");
});

test("countEvenOdd", () => {
  expect(countEvenOdd([1, 2, 3, 4, 5, 6]))
    .toEqual({ even: 3, odd: 3 });
});

test("commonKeys", () => {
  expect(commonKeys({ a: 1, b: 2, c: 3 }, { b: 4, c: 5, d: 6 }))
    .toEqual(["b", "c"]);
});

test("arrayToLookup", () => {
  expect(arrayToLookup([{ id: 1, name: "A" }, { id: 2, name: "B" }]))
    .toEqual({ 1: { id: 1, name: "A" }, 2: { id: 2, name: "B" } });
});

test("allValuesAreNumbers", () => {
  expect(allValuesAreNumbers({ a: 1, b: 2, c: 3 })).toBe(true);
  expect(allValuesAreNumbers({ a: 1, b: "hello", c: 3 })).toBe(false);
});

test("intersectionAll", () => {
  expect(intersectionAll({ a: [1, 2, 3], b: [2, 3, 4], c: [3, 4, 5] }))
    .toEqual([3]);
});

test("countEvenOddInObjectArrays", () => {
  expect(countEvenOddInObjectArrays({ a: [1, 2, 3], b: [4, 5] }))
    .toEqual({ even: 2, odd: 3 });
});

test("sumTransactions", () => {
  expect(sumTransactions([
    { user: "A", amount: 100 },
    { user: "B", amount: 200 },
    { user: "A", amount: 50 }
  ])).toEqual({ A: 150, B: 200 });
});

test("transformIdToName", () => {
  expect(transformIdToName([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
  ])).toEqual({ 1: "Alice", 2: "Bob" });
});

test("removeFalsy", () => {
  expect(removeFalsy({ a: 0, b: null, c: "hello", d: undefined, e: 5 }))
    .toEqual({ c: "hello", e: 5 });
});

test("checkPermission", () => {
  const roles = { admin: ["read", "write"], user: ["read"], staff: ["write"] };
  expect(checkPermission(roles, "user", "write")).toBe(false);
});

test("revenueByCategory", () => {
  expect(revenueByCategory([
    { id: 1, category: "electronics", price: 100 },
    { id: 2, category: "clothes", price: 50 },
    { id: 3, category: "electronics", price: 200 }
  ])).toEqual({ electronics: 300, clothes: 50 });
});

test("removeDuplicateById", () => {
  expect(removeDuplicateById([
    { id: 1, name: "A" },
    { id: 1, name: "A" },
    { id: 2, name: "B" }
  ])).toEqual([
    { id: 1, name: "A" },
    { id: 2, name: "B" }
  ]);
});

test("chunkObject", () => {
  expect(chunkObject({ a: 1, b: 2, c: 3, d: 4 }, 2))
    .toEqual([
      { a: 1, b: 2 },
      { c: 3, d: 4 }
    ]);
});

test("longestStringValue", () => {
  expect(longestStringValue({ a: "hi", b: "hello", c: "hey" }))
    .toBe("hello");
});

test("transformLanguages", () => {
  const input = {
    javascript: ["node", "react"],
    python: ["django"]
  };
  const result = transformLanguages(input);
  expect(result.node).toContain("javascript");
});

test("groupIdsByCategory", () => {
  expect(groupIdsByCategory([
    { id: 1, category: "A" },
    { id: 2, category: "A" },
    { id: 3, category: "B" }
  ])).toEqual({ A: [1, 2], B: [3] });
});

test("removeNestedKey", () => {
  const obj = { a: { b: { c: 1, d: 2 } } };
  expect(removeNestedKey(obj, "c")).toEqual({ a: { b: { d: 2 } } });
});

test("deepEqual", () => {
  expect(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }))
    .toBe(true);
});

test("deepFlattenObjectArrays", () => {
  expect(deepFlattenObjectArrays({ a: [1, [2, 3]], b: [4] }))
    .toEqual([1, 2, 3, 4]);
});

test("mostRepeatedWord", () => {
  expect(mostRepeatedWord({
    a: ["apple", "banana"],
    b: ["apple", "orange"],
    c: ["apple"]
  })).toBe("apple");
});

test("deepMerge", () => {
  expect(deepMerge({ a: { x: 1, y: 2 } }, { a: { y: 3, z: 4 } }))
    .toEqual({ a: { x: 1, y: 3, z: 4 } });
});

test("nestedDestructure", () => {
  expect(nestedDestructure({ user: { profile: { name: "Alice", age: 25 } } }))
    .toBe("Alice 25");
});

test("topNKeys", () => {
  expect(topNKeys({ a: 10, b: 50, c: 20, d: 70 }, 2))
    .toEqual(["d", "b"]);
});

test("sortByNameAge", () => {
  const arr = [
    { name: "Bob", age: 30 },
    { name: "Alice", age: 25 },
    { name: "Alice", age: 20 }
  ];

  expect(sortByNameAge(arr)).toEqual([
    { name: "Alice", age: 20 },
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
  ]);
});

test("reconcileLists", () => {
  expect(reconcileLists(["a", "b", "c"], ["b", "c", "d"]))
    .toEqual({ missing: ["a"], extra: ["d"] });
});

test("mergeObjects", () => {
  expect(mergeObjects({ a: 10, b: 20 }, { a: 5, c: 15 }))
    .toEqual({ a: 5, b: 20, c: 15 });
});