var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(array, element) {
  var nonDestructiveArray = [element, ...array];
  return array;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  var array = [element, ...array];
}