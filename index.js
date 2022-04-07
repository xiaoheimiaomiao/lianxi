function map(arr, callback) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i], i));
  }

  return result;
}

function reduce(arr, callback, initValue) {
  let result = initValue;

  for (let i = 0; i < arr.length; i++) {
    result = callback(result, arr[i]);
  }

  return result;
}

function filter(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let res = callback(arr[i], i);
    if (res) {
      result.push(arr[i]);
    }
  }
  return result;
}

function find(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    let res = callback(arr[i], i);
    if (res) {
      return arr[i];
    }
  }

  return undefined;
}
function findIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    let res = callback(arr[i], i);
    if (res) {
      return i;
    }
  }

  return -1;
}
function every(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i)) {
      return false;
    }
  }

  return true;
}
function some(arr, callback) {

  for (let i = 0; i < arr.length; i++) {
  
    if (callback(arr[i], i)) {
      return true;
    }
  }
  return false;
}
function unique(arr){
  let result = [];
  arr.forEach((item) => {
   
      if(result.indexOf(item) === -1) {
         
          result.push(item);
      }
  });
  
  return result;
}

function unique2(arr){
  let result = [];
  let obj = {};

  arr.forEach(item => {
      if(obj[item] === undefined){
          //将 item 作为下标存储在 obj 中
          obj[item] = true;
          result.push(item);
      }
  });
  return result;
}