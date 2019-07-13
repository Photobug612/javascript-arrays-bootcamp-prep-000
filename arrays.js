var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element){
  var newArray = array;
  newArray = [element, ...newArray]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var secondArray = array;
  secondArray.unshift(element)
  return secondArray
}

function addElementToEndOfArray(array, element) {
  var thirdArray = array;
  thirdArray = [...thirdArray, element]
  return thirdArray
}

function  destructivelyAddElementToEndOfArray(array, element) {
  var fourthArray = array;
  fourthArray.push(element)
  return fourthArray
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromEndOfArray(array){
  var fifthArray = array;
  fifthArray.pop()
}

function destructivelyRemoveElementFromBeginningOfArray(array, element){
  var sixthArray = array;
  sixthArray.shift(element) 
  return sixthArray
}

function removeElementFromBeginningOfArray(array) {
  var seventhArray = array;
  seventhArray.slice(-2,3)
  return seventhArray
}
