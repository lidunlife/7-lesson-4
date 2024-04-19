let fruits = [`apple`,  `pear`,  `grapes`,  `watermelon`];
alert(`Length of the array: ` + fruits + `= ` + fruits.length);
let con = confirm(`Do you want to pop?`);
console.log(con);
if (con == true) {
  fruits.pop();
} else con == false;
alert(fruits);