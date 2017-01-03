// Let's use some strange property names
let someObject = {};

someObject.normalProperty      = "I am just normal"
someObject[1]                  = 'I am in the "1" property of an object';
someObject['INSANE.PROP.NAME'] = "Property with dots";
someObject['1,2,3']            = 'commas are OK';

console.log(someObject);
console.log('-----------------------');

// Let's see what we can put in an array
let someArray = [];

someArray[1] = 'I am in the second position in the array';
someArray['whatAboutString?'] = 'string prop in an array is interesting';

console.log(someArray);
console.log('-----------------------');
console.log('someArray has a length of ' + someArray.length);
someArray.forEach(function(element) {
    console.log(element);
});
