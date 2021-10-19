function isNaN1(z) {
    return typeof z === 'number' && z !== z;
}
function eq(a,b){
    if (!(1/b === -Infinity && 1/a === Infinity) || (1/b === Infinity && 1/a === -Infinity)){
        return a===b
    }
}
function equals(x, y) {
    if(isNaN1(x) && isNaN1(y)){
        return true
    }else if(1/y === -Infinity && 1/x === -Infinity){
        return true
    }  else if(eq(x,y)){
        return true
        } else{
            return false
        }
} 

  console.log(equals("12", 12) === false);
  console.log(equals(0, -0) === false);
  console.log(equals(0, NaN) === false);
  console.log(equals(NaN, 0) === false);
  console.log(equals(5, "5") === false);
  console.log(equals("john", "doe") === false);
  console.log(equals(false, true) === false);
  console.log(equals(undefined, null) === false);

  console.log(equals("john", "john") === true);
  console.log(equals(-0, -0) === true);
  console.log(equals(5, 5) === true);
  console.log(equals(false, false) === true);
  console.log(equals(null, null) === true);
  console.log(equals(undefined, undefined) === true);
  console.log(equals(NaN, NaN) === true);
  console.log(equals(0, 0) === true);
  
