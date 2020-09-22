import axios from 'axios'

const companies = [
  {
    name: 'Bonava',
    url:
      'https://cors-anywhere.herokuapp.com/https://www.bonava.se/api/Neighborhood/search?Culture=sv-se&Geo=74,285403,285391,285389,21260,285513,285531,691689,285530&SearchContext=FindHome&Size=12&Status=Planned,Presales'
  }
]

let listOfHouses = []

const getHouses = async (name, url) => {
  let results = await axios.get(url, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
      Access: '*/*'
    }
  })
  console.log(results.data.Neighborhoods)
  return results
}

const getHouseData = () => {
  companies.forEach(company => {
    let results = getHouses(company.name, company.url)
    listOfHouses.push(results)
  })
  return listOfHouses
}

export { getHouseData }
