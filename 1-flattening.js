
let arrays = [[1, 2, 3], [4, 5], [6]];

var combine = arrays.reduce((result,array)=> result.concat(array), [])


console.log(combine);
// → [1, 2, 3, 4, 5, 6]
