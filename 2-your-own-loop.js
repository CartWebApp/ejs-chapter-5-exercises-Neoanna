

function loop(n){
   for (let n = 3; n >= 1; n--)
console.log(n);
}


loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1