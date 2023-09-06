import React from "react";
import "./countryCards.css"

function CountryCards(props){
  console.log(props.type)
    return (
        <>
        <div id="container" className="countries-info">
  <div class="countries-info__image">
    <img src= {props.flag} alt="flag_image"/></div>
    <div className="countries-info__content">
      <h2 className="countries-info__countryName">{props.name}</h2>
      <p><span className="countries-info__leftSide">Population : </span> <span className="countries-info__rightSide">{props.population}</span></p>
      <p><span className="countries-info__leftSide">Region : </span> <span className="countries-info__rightSide">{props.region}</span></p>
      <p><span className="countries-info__leftSide">Capital : </span> <span className="countries-info__rightSide">{props.capital}</span></p>
    </div>
  </div>
        </>
    )
}

export default CountryCards;