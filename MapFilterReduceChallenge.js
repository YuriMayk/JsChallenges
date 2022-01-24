// Using Map, Filter and Reduce concepts: 
// First - Do Up the value of each company in ten percet(10%).
// Second - Select just the companies founded before 2000's year.
// Third - Do Sum the values of all companies rest

const companies = [
    {name:"Samsung", marketValue:50 , CEO:"Kim Hyun Suk", foundedOn:1938},
    {name:"Microsoft", marketValue:415 , CEO:"Satya Nadella", foundedOn:1975},
    {name:"Intel", marketValue:117 , CEO:"Brian Krzanich", foundedOn:1968},
    {name:"Facebook", marketValue:383 , CEO:"Mark Zuckerberg", foundedOn:2004},
    {name:"Spotify", marketValue:30 , CEO:"Daniel Ek", foundedOn:2006},
    {name:"Apple", marketValue:845 , CEO:"Tim Cook", foundedOn:1976},
]

const updatingCompanies = companies.map((companie,index,array)=>{
    companie = {
        name:companie.name,
        marketValue: (companie.marketValue * 1.1),
        CEO: companie.CEO,
        foundedOn: companie.foundedOn
    }
    return companie
})

const oldersCompanies = updatingCompanies.filter((companie)=> companie.foundedOn <= 2000)

const allOldersCompaniesMarketValue = oldersCompanies.reduce((accumulator, current) => current.marketValue + accumulator,0)

console.log(updatingCompanies)
console.log(oldersCompanies)
console.log(allOldersCompaniesMarketValue) 