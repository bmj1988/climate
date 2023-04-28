/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

/* `leastRainfall` Which cities have the least rainfall in a given month?

Write a function, `leastRainfall` that takes in the climate data and a month,
and returns an array of cities that have the least rainfall in that month. It
should include all cities that recieve less than 10 mm rainfall in that month.

For example, if there are three cities have less than 10 mm, the returned array
should look like:

[ "city1, country1: x mm", "city2, country2: x mm", "city3, country3: x mm" ]
(Each city's data is a formatted string data type).

Note: You can solve this in multiple ways. Try using a few advanced array
methods!

Hint: How can you identify and access the correct data for a month such as
"March"?
*/

const leastRainfall = (arr, month) => {
    let arr2 = [];
    const months = {
        January: 0,
        Febuary: 1,
        March: 2,
        April: 3,
        May: 4,
        June: 5,
        July: 6,
        August: 7,
        September: 8,
        October: 9,
        November: 10,
        December: 11,
    }
    for (let i = 0; i < arr.length; i++) {
        const obj = arr[i];
        let yearArray = obj.monthlyAvg
        let monthObj = yearArray[months[month]]
        if (monthObj.rainfall < 10) {
            arr2.push(obj.city + ", " +obj.country + ": " + Math.floor(monthObj.rainfall) + " mm")
        }
    }
    return arr2
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [leastRainfall];
