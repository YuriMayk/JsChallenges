// Using Map Conceipt transform second property('testGrade') to 'finalResult' that will receive one of following values: 'Approved'; 'Disapproved'. Thoso who had testGrade value equal or higher than seven(7) will receive the value 'Approved' in property 'finalResult'. Those who had a testGrade value minus than seven(7) will receive the value 'Disapproved'.

const students = [
    {name:"Stuart", testGrade:6 },
    {name:"Leonard", testGrade:8 },
    {name:"Penny", testGrade:7 },
    {name:"Sheldon", testGrade:10 },
    {name:"Loki", testGrade:8 },
    {name:"Raj", testGrade:8 },
    {name:"Amy", testGrade:9 },
    {name:"Thor", testGrade:6 },
    {name:"Joker", testGrade:111 },
    {name:"Thena", testGrade:10 }
]

const resultofStudents = students.map((person)=>{
    person.testGrade >= 7 ? person = {name:person.name, finalResult:"Approved"} : person = {name:person.name, finalResult:"Disapproved"}

    return person
})
console.log(resultofStudents)

