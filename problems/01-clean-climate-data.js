/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

/* 01. `listAllCitiesWithCountries`
What are all of the cities included in the data set?

Write a function, `listAllCitiesWithCountries` that returns an array of all of
the cities in the data set, formatted in "city, country" format.

For example, it should return:
[ "Amsterdam, Netherlands", "Athens, Greece", ...plus 103 more cities ]
*/

const listAllCitiesWithCountries = (arr) => {
    returnArray = []
    arr.forEach(obj => returnArray.push(obj.city + ', ' + obj.country))
    return returnArray;
}


/* 02. `listAllUsCities`
What are all of the United States cities included in the data set?

Write a function, `listAllUsCities` that returns an array of all of
the United States cities in the data set, formatted in "city, country" format.

For example, it should return:
[ 'Atlanta GA, United States', 'Austin TX, United States', ...plus more cities ]
*/

const listAllUsCities = (arr) => {
    returnArray = []
    for (let i = 0; i < arr.length; i++) {
        const obj = arr[i];
        for (let key in obj) {
            if (key === 'country') {
                if (obj[key].includes("United States")) {
                    returnArray.push(obj.city+", "+obj.country)
                }
            }
        }
    }
    return returnArray;
}



/* 03. `findDuplicates` What cities are included more than once in the data?

Write a function, `findDuplicates` that finds all duplicate cities. Return an
object including every city name, pointing to an array of IDs for that city.

For example, if `Athens` showed up only once with an id of 2, and 'Mexico City'
was duplicated in id 3, 7, and 9, the returned object should look like:
{ 'Athens: [ 2 ], 'Mexico City': [ 3, 7, 9 ] }

WE WANT an object with city names as keys, array of ids as values
*/

const findDuplicates = (arr) => {
    let returnObj = {};
    for (let i = 0; i < arr.length; i++) {
        const obj = arr[i];
        for (let key in obj) {
            if (key === "city") {
                if (returnObj[obj[key]] === undefined) {
                returnObj[obj[key]] = [obj.id]
                }
                else returnObj[obj[key]].push(obj.id)
            }
        }
    }
    return returnObj
}

/* 04. `returnDuplicate` Which city object should be corrected in
the data set?

Write a function, `returnDuplicate` that finds the ONE duplicated city,
and returns the data (object) of the last instance of that city.

For example, if `Paris` showed up twice with an id of 2 and 5, the function
should and return the object with the id of 5.

HINT: Use documentation to research the `find()` method in JavaScript. You may,
but do not have to, use this method to solve this problem.
*/

const returnDuplicate = (arr) => {
    let dupObj = findDuplicates(arr);
    for (let key in dupObj) {
        if (dupObj[key].length > 1) {
            let objID = dupObj[key][dupObj[key].length - 1]
            return arr.find(el => el.id === objID);
        }
    }
}


/* 05. `correctDuplicate` Correct the city name of the duplicated city.

Write a function, `correctDuplicate` that finds the ONE duplicated city,
and changes the name of the city to the name provided as a second argument.

For example, if `Paris` showed up twice with an id of 2 and 5, calling
correctDuplicate(climateData, "Nice"), should change the city for the object
with id of 5 to 'Nice' and then return that object with the corrected city name.

HINT: Can you use functions you have already written to help solve this problem?
*/

const correctDuplicate = (arr, str) => {
    obj = returnDuplicate(arr)
    obj.city = str;
    return obj;
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [ listAllCitiesWithCountries, listAllUsCities, findDuplicates,
    returnDuplicate, correctDuplicate ];
