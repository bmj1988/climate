/**************DO NOT MODIFY THIS LINE BELOW*****************/
const climateData = require('../climate-data')

/* `citiesWithMostSnowDays` Which cities have the most snow days?

Write a function, `citiesWithMostSnowDays` that returns an array of objects,
that includes data on the cities that have the highest number of snow days
across all months.

For example, if the maximum number of snow days across all months is 10, and two
cities have 10 snow days each, the returned array would look like:

[
    { "city": "City Name 1, Country Name", "totalSnowDays": 10 },
    { "city": "City Name 2, Country Name", "totalSnowDays": 10 },
]

Note: You can solve this in multiple ways. Try using a few advanced array
methods!

i think this is just asking for cities with greatest cumulative snow days
*/

const citiesWithMostSnowDays = (arr) => {
    let mostSnow = 0
    let answerArray = [];
    for (let i = 0; i < arr.length; i++) {
        const obj = arr[i];
        for (let key in obj) {
            if (key === "monthlyAvg") {
                let avgArr = obj[key]
                cmlSnow = 0
                for (let j = 0; j < avgArr.length; j++) {
                    let obj2 = avgArr[j]
                    cmlSnow += obj2.snowDays
                }
            }
        }
        if (cmlSnow > mostSnow) {
            mostSnow = cmlSnow;
        }
    }
    for (let x = 0; x < arr.length; x++) {
        const obj3 = arr[x];
        for (let key in obj3) {
            if (key === "monthlyAvg") {
                let avgArr1 = obj3[key]
                cmlSnow = 0
                for (let y = 0; y < avgArr1.length; y++) {
                    let obj4 = avgArr1[y]
                    cmlSnow += obj4.snowDays
                }
                if (cmlSnow === mostSnow) {
                    const pusher = {
                        city: obj3.city + ", " +obj3.country,
                        totalSnowDays: mostSnow
                    }
                    answerArray.push(pusher)
                }
            }
        }

}
return answerArray
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

module.exports = [ citiesWithMostSnowDays ];
