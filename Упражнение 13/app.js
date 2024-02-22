const arr = [2, 4, 4, 10, 20];
function some(arr, serchEl) {
  const res = arr.find(el =>  el === serchEl);
  return res == undefined ? false : true; 
}
console.log(some(arr, 10));
console.log(arr.some(el =>  el === 0));