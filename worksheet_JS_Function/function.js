test1();

function test1(){
  console.log("This should work!");
}

test2();

var test2 = function(){
  console.log("This should not work!");
};
