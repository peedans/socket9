let monthName = ["March", "April", "May", "June", "July", "August", "September", "October", "November", "December","January", "February"]
let dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function DayOfWeek(month,  date,  year ) {
    //Zeller's Rule F=(D+((13M-1)/5 +Y +(Y/4)+(C/4)-2C)%7

    if (month === "January" || month === "February" ){
        year = year - 1
    }

    let monthIndex = (monthName.indexOf(month))+1

    let year2Back = parseInt(year.toString().slice(2,4))
    let year2Front = parseInt(year.toString().slice(0,2))

    let day =  Math.floor((date + Math.floor(((13*monthIndex)-1)/5) + year2Back + Math.floor(year2Back/4) + Math.floor(year2Front/4) - (2*year2Front)) % 7)
    return dayName[day]
}

console.log(DayOfWeek("November",21,2022))

function solution(param1, param2) {
    return param1+param2
}
console.log(solution(1,2))

function solution1(year) {
    return Math.ceil(year/100)
}
console.log(solution1(1905))

function solution2(inputString) {
    return inputString === inputString.split("").reverse().join('')
}
console.log(solution2("aabaa"))

function solution3(inputArray) {
    let arr = inputArray[0] * inputArray[1]

    for (let i = 0; i < inputArray.length - 1; i++) {
        arr = Math.max(arr, inputArray[i] * inputArray[i + 1]);
    }

    return arr
}
console.log(solution3([3, 6, -2, -5, 7, 3]))