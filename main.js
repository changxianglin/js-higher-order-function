const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// for(let i = 0; i < companies.length; i++) {
//   console.log(companies[i])
// }

// forEach

// companies.forEach(item => console.log(item.name))

// filter

// let canDrink = []
// for(let i = 0; i < ages.length; i++) {
//   if(ages[i] >= 21) {
//     canDrink.push(ages[i])
//   }
// }

// const canDrink = ages.filter(item => {
//   if(item >= 21) {
//     return true
//   }
// })

// const canDrink = ages.filter(item => item >= 21)

// const retailCompanies = companies.filter((item) => {
//   if(item.category === 'Retail') {
//     return true
//   }
// })

// const retailCompanies = companies.filter(item => item.category === 'Retail')


// map

// const companyNames = companies.map(item => item.name)

// console.log(companyNames)

// sort

// const sortedCompanies = companies.sort((a, b) => {
//     if(a.start > b.start) {
//       return 1
//     } else {
//       return -1
//     }
// })

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1))
//
// console.log(sortedCompanies)

// reduce

// let ageSum = 0
// for(let i = 0; i < ages.length; i++) {
//   ageSum += ages[i]
// }

// const ageSum = ages.reduce((total, age) => {
//   return total + age
// }, 0)

// const ageSum = ages.reduce((total, age) => total + age, 0)

const totalYears = companies.reduce((total, item) => total + (item.end - item.start), 0)

// console.log(totalYears)

// Combine methods

const combined = ages
                .map(age => age * 2)
                .filter(age => age >= 40)
                .sort((a, b) => a - b)
                .reduce((a, b) => a + b, 0)

console.log(combined)
