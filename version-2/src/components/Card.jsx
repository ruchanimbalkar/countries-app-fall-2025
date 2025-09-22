export default function Card({ country, children, viewed = undefined }) {
  console.log("country :", country);
  //Use ternary operator to see if capital for country exists and show if it exists or empty string if it does not.
  let countryCapital =
    country.capital.length !== 0 ? (
      <>
        <b> Capital : </b> {country.capital}
      </>
    ) : (
      ""
    );
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
  console.log("children", children);

  return (
    <>
      <div className="card">
        <img src={country.flags.png} alt={country.flags.alt} />
        <div className="country-card-text">
          <h2> {country.name.common} </h2>
          {children}
          <p>
            {" "}
            <b> Population : </b> {country.population}{" "}
          </p>
          <p>
            {" "}
            <b> Region : </b> {country.region}{" "}
          </p>
          <p> {countryCapital} </p>
          <p> {viewedCount} </p>
          {/* <p> {countryBorders} </p> */}
        </div>
      </div>
    </>
  );
}
