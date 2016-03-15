//Takes array of objects
//finds object with .types, which has an array, 0 of array has "locality"
//returns object  

function findCity (array) {
  for (var i = 0; i < array.length; i++) {
    var addressType = array[i].types[0];
    if (addressType === 'locality') {
      return array[i].long_name
    }
  }
}

module.exports = findCity