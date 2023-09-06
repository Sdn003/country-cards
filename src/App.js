import './App.css';
import CountryCards from "./components/countryCards";
let countriesInfo = [
  {
    name: "India",
    population: " 1,394,975,829",
    region: "Asia",
    flag: "https://upload.wikimedia.org/wikipedia/commons/7/7b/India_flag_300.png",
    capital: "New delhi",
  },
  {
    name: "Germany",
    population: "81,770,900",
    region: "Europe",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
    capital: "Berlin",
  },
  {
    name: "United states",
    population: "323,947,000",
    region: "Americas",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/640px-Flag_of_the_United_States.svg.png",
    capital: "Washington D.C",
  },
  {
    name: "Brazil",
    population: "206,135,893",
    region: "Americas",
    flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Brazil_flag_300.png",
    capital: "Brasilia",
  },
  {
    name: "Iceland",
    population: "334,300",
    region: "Europe",
    flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Flag_of_Iceland.svg/640px-Flag_of_Iceland.svg.png",
    capital: "Reykjavik",
  },
  {
    name: "England",
    population: "334,300",
    region: "Europe",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1200px-Flag_of_the_United_Kingdom.svg.png",
    capital: "London",
  },
];


//Using forEach
// let countriesInfoCopy = [];
// countriesInfo.forEach((countriesInfo) => {
//   countriesInfoCopy.push(
//     <CountryCards
//       name={countriesInfo.name}
//       population={countriesInfo.population}
//       region={countriesInfo.region}
//       flag={countriesInfo.flag}
//       capital={countriesInfo.capital}
//     ></CountryCards>
//   );
// });


function App() {
  return (
    <div className="country-cards__components">
      {/* {countriesInfoCopy} - Expression for forEach */}
      {countriesInfo.map((countriesInfo) => {
        return (
          <CountryCards
            name={countriesInfo.name}
            population={countriesInfo.population}
            region={countriesInfo.region}
            flag={countriesInfo.flag}
            capital={countriesInfo.capital}
          ></CountryCards>
        );
      })}
      <CountryCards type={countriesInfo[0].name}></CountryCards>
    </div>
  );
}


export default App;
