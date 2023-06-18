function add(a, b) {
    return a + b;
}
  
function memoize(func) {
  const cache = {};

  return function(...args) {
    const key = args.join(',');
    
    if (key in cache) {
      return cache[key];
    }
    
    const result = func(...args);
    cache[key] = result;
    return result;
  }
}

const memoizeAdd = memoize(add);

console.log(memoizeAdd(100, 100)); // 200
console.log(memoizeAdd(100, 0)); // 100
console.log(memoizeAdd(100, 200)); // 300
console.log(memoizeAdd(100, 100)); // 200 without computing
  