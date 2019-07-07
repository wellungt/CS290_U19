function deepEqual(a, b){
   if (typeof a == "object" && a!=null && typeof b == "object" && b!=null){
      if (a.length != b.length){
         return false;
      } else {
         for (var prop in a){
            if (!(deepEqual(a[prop], b[prop]))){
                return false;
            }
         }
         return true;
      }
   } else {
      return a===b;
   }
}

let obj = {here: {is: "an"}, object: 2};

//test case
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true
