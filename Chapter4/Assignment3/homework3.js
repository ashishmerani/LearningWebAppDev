// Client-side code
/* jshint browser: true, jquery: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, trailing: true */
// Server-side code
/* jshint node: true, curly: true, eqeqeq: true, forin: true, immed: true, indent: 4, latedef: true, newcap: true, nonew: true, quotmark: double, undef: true, unused: true, strict: true, trailing: true */
/*globals _*/
"use strict";

function exercise1(array) {

  var i;
  var sum = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }

  return (sum / array.length);

}
// Exercise2 //
function exercise2(array) {

  var largest = Math.max.apply(Math, array);
  return largest;
}


// Exercise3 // 

function exercise3(array) {

  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      return true;
    }

  }
  return false;

}

// Exercise4 // 


function exercise4(array) {

  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      return false;
    }
  }
  return true;
}


// Exercise5 // 


function arrayContains(arr, val) {
  return arr.some(function (arrVal) {
    return val === arrVal;
  });
}


// Exercise6.1 // 

function arrayContainsTwo(array, element) {

  var indices = [];
  var idx = array.indexOf(element);
  while (idx !== -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
  }
  if (indices.length === 2) {
    return true;
  } else {
    return false;
  }

  console.log(indices);
}

function arrayContainsThree(array, element) {

  var indices = [];

  var idx = array.indexOf(element);
  while (idx !== -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
  }
  if (indices.length === 3) {
    return true;
  } else {
    return false;
  }

  console.log(indices);
}

function arrayContainsNTimes(array, element, num) {

  var indices = [];
  //var array = ['a', 'b', 'c', 'd'];
  //var element = 'a';
  var idx = array.indexOf(element);
  while (idx !== -1) {
    indices.push(idx);
    idx = array.indexOf(element, idx + 1);
  }
  if (indices.length === num) {
    return true;
  } else {
    return false;
  }

  console.log(indices);
}

// Exercise2 underscore  //

function exercise2UN(array) {
  return _.max(array, function (s) {
    return s;
  });

}

// Exercise3 underscore  //


function exercise3UN(array) {
  return _.some(array, function (num) {
    return (num % 2 === 0);
  });
}

// Exercise4 underscore  //

function exercise4UN(array) {

  return _.every(array, function (num) {
    return (num % 2 === 0);
  });
}

var main = function () {
  document.getElementById("exercise1").innerHTML = exercise1([1, 4, 2, 45, 58, 66, 90]);
  document.getElementById("exercise2").innerHTML = exercise2([267, 306, 108]);
  document.getElementById("exercise3").innerHTML = exercise3([45, 56, 23, 2]);
  document.getElementById("exercise4").innerHTML = exercise4([45, 56, 23, 2]);
  document.getElementById("exercise5").innerHTML = arrayContains(["hello", "world"], "hello");
  document.getElementById("exercise6.1").innerHTML = arrayContainsTwo(["a", "b", "a", "c"], "a");
  document.getElementById("exercise6.2").innerHTML = arrayContainsThree(["a", "b", "a", "c", "b", "b"], "b");
  document.getElementById("exercise6.3").innerHTML = arrayContainsNTimes(["a", "b", "a", "c", "a", "a"], "a", 4);
  document.getElementById("exercise2UN").innerHTML = exercise2UN([23, 45, 67, 1, 99, 188, 299]);
  document.getElementById("exercise3UN").innerHTML = exercise3UN([22, 0, 33, 44]);
  document.getElementById("exercise4UN").innerHTML = exercise4UN([32, 42, 56, 77, 88]);
};

document.addEventListener("DOMContentLoaded", function () {
  main();
});