// Create a second list using Filter concept, the items of second list should be those dived by five(5) and two(2).
const list = [20,3,234,12,17,541,6,87,275,1000];

const selectedList = list.filter((number)=>{
    return (number % 5 === 0 && number % 2 === 0)
})

console.log(selectedList)

// Another form to solve ==> if (number %2 !== 0 || number %5 !== 0 ) return false.