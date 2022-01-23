//Using Map concept, transform the list below adding a third property in each object. Name that property "sector" that will acept two values ('Black' and 'Green'). All the VIP will receive the BlackPassport. And All the Non-VIP will receive the GreenPassport.

const list = [
    { name: "Jonas", isVip: true },
    { name: "Heleonor", isVip: false },
    { name: "Caleb", isVip: true },
    { name: "Greg", isVip: true },
    { name: "Chris", isVip: false },
    { name: "Nuna", isVip: false },
    { name: "Helen", isVip: false },
    { name: "Júlia", isVip: true },
    { name: "Hector", isVip: true },
    { name: "Elen", isVip: true },
]

const newList = list.map((person) => {
    person.isVip === true ? person = {name:person.name, isvip:person.isVip, sector: "Black"} : person = {name:person.name, isvip:person.isVip, sector: "Green"}
    return person
})
console.log(newList)