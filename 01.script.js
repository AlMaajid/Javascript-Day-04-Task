var obj1 = {
  name: 'Person 1',
  age: 5
};

var obj2 = {
  age: 5,
  name: 'Person 1',
};

var flag = true;

if (obj1.length == obj2.length) {
  for (let key in obj1) {
    if (obj1[key] == obj2[key]) {
      continue;
    } else {
      flag = false;
      break;
    }
  }
} else {
  flag = false;
}

console.log(flag);