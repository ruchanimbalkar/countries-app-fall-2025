export default function Card({ country, children }) {
  //Use ternary operator to see if capital for country exists and show if it exists or empty string if it does not.
  let countryCapital =
    country.capital.length !== 0 ? (
      <>
        <b> Capital : </b> {country.capital}
      </>
    ) : (
      ""
    );

  let countryBorders = "";
  if (children !== null || children !== undefined) {
    countryBorders =
      country.borders.length !== 0 ? (
        <>
          {" "}
          <b> Border Countries : </b> {country.borders}{" "}
        </>
      ) : (
        ""
      );
  }

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
          {/* <p> {countryBorders} </p> */}
        </div>
      </div>
    </>
  );
}
