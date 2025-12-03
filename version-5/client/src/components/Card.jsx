import { Children } from "react";
export default function Card({ country, children, viewed = undefined }) {
  //console.log("country :", country);
  //Use ternary operator to see if capital for country exists and show if it exists or empty string if it does not.
  let countryCapital = "";
  if (country) {
    countryCapital =
      country.capital.length !== 0 ? (
        <>
          <b> Capital : </b> {country.capital}
        </>
      ) : (
        ""
      );
  }

  //The default value of viewedCount is undefined when Card component is being rendered on SavedCountries page and Home Page
  //Otherwise viewedCount is the prop passed by the CountryDetail page
  let viewedCount =
    viewed != undefined ? (
      <>
        <b> Viewed : </b> {`${viewed} times`}
      </>
    ) : (
      ""
    );
  //saved countryBorders for the countryDetail page (version 1 stretch goal)
  // let countryBorders = "";
  // if (children !== null || children !== undefined) {
  //   countryBorders =
  //     country.borders.length !== 0 ? (
  //       <>
  //         {" "}
  //         <b> Border Countries : </b> {country.borders}{" "}
  //       </>
  //     ) : (
  //       ""
  //     );
  // }
  //console.log("children", children);
  console.log("children", children);
  const result = Children.toArray(children);
  console.log("result", result);
  let [saveButton, aSave, toolTip, resetButton] = result;
  console.log(saveButton, aSave, toolTip, resetButton);
  console.log("saveButton", saveButton);
  console.log("aSave", aSave);
  console.log("toolTip", toolTip);
  console.log("resetButton", resetButton);
  return (
    <>
      {country && (
        <div className="card">
          <img src={country.flags.png} alt={country.flags.alt} />
          <div className="country-card-text">
            <h2> {country.name.common} </h2>
            {saveButton} {aSave} {toolTip}
            <p>
              {" "}
              <b> Population : </b> {country.population}{" "}
            </p>
            <p>
              {" "}
              <b> Region : </b> {country.region}{" "}
            </p>
            <p> {countryCapital} </p>
            <p> {viewedCount}</p>
            <p> {resetButton} </p>
            {/* <p> {countryBorders} </p> */}
          </div>
        </div>
      )}
    </>
  );
}
