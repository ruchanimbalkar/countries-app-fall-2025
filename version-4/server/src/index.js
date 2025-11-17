/* --------------------------------
Server/API for Countries App Version 4

DB Fiddle Link: ______________
----------------------------------*/
// https://www.db-fiddle.com/f/VJ618HRTy1VgadL7aSXh7/57
/*----------------------------------
Boilerplate Code to Set Up Server
----------------------------------*/

import express from "express"; // the framework that lets us build webservers
import pg from "pg"; //pg stands for postgreSQL, for connecting to the database

//connecting to our PostgreSQL database , or db for short
const db = new pg.Pool({
  //new pg.Pool creates a connection to the database
  connectionString: process.env.DATABASE_URL, //this is the credentials to access the database. Keep private
  ssl: true, // use SSL encryption when connecting to the database to keep data safe in transit
});
//Declare a variable named app and call the express() function to create a new instance of express so we can use all of the methods, fucntions, properties of express
// which will be saved in app
const app = express(); // this gives us access to all of Express's functions, methods, useful superpowers

//Defining out port number
//What port should our server listen to?
const port = 3000; // you can use any port # but developers commonly use 3000. also there are some port numbers you cannot use

//Declaring that this server will be receiving and responding to requests in JSON
app.use(express.json()); // this server will receive and respond to requests with JSON data

//Turn on our server so that it can listen for requests and respond to those requests at our port #
//Hello you are on , listen to requests and respond to those requests
app.listen(port, () => {
  console.log(`Server is listening on port #${port}`);
}); //this method is turning on our server

app.get("/", (req, res) => {
  res.send("Hi, Server is ON!");
});

/*----------------------------------
Helper Functions
----------------------------------*/

//getAllUsers()
const getAllUsers = async () => {
  const data = await db.query("SELECT * FROM users");
  console.log(data.rows);
  return data.rows;
};

//getNewestUser()
const getNewestUser = async () => {
  const data = await db.query(
    "SELECT * FROM users ORDER BY user_id DESC LIMIT 1;"
  );
  console.log(data.rows);
  return data.rows;
};

//addOneUser()
const addOneUser = async (name, country_name, email, bio) => {
  const data = await db.query(
    //SQL Query should be written all in one line, using $1-$4 as placeholders for dynamic values
    "INSERT INTO users (name, country_name,email,bio) VALUES ($1,$2,$3,$4) RETURNING *;",
    [name, country_name, email, bio] // order matters here
  );
  let addedUser = data.rows[0];
  console.log("addedUser", addedUser);
};

//getAllSavedCountries()
const getAllSavedCountries = async () => {
  const data = await db.query("SELECT country_name FROM saved_countries");
  console.log(data.rows);
  return data.rows;
};

//saveOneCountry()
const saveOneCountry = async (country_name) => {
  const data = await db.query(
    "INSERT INTO saved_countries(country_name) VALUES ($1) ON CONFLICT (country_name) DO NOTHING RETURNING *",
    [country_name]
  );
  let savedCountry = data.rows[0];
  console.log("savedCountry", savedCountry);
};

//unsaveOneCountry()
const unsaveOneCountry = async (country_name) => {
  const data = await db.query(
    "DELETE FROM saved_countries WHERE country_name = $1 RETURNING *",
    [country_name]
  );
  let unSavedCountry = data.rows[0];
  console.log("unSavedCountry", unSavedCountry);
};

//updateOneCountryCount(country_name)
const updateOneCountryCount = async (country_name) => {
  const data = await db.query(
    "INSERT INTO country_counts(country_name, count) VALUES ($1, 1) ON CONFLICT (country_name) DO UPDATE SET count = country_counts.count + 1 RETURNING *",
    [country_name]
  );
  let count = data.rows[0].count;
  console.log("count=", count);
  return count;
};

//resetOneCountryCount(country_name)
const resetOneCountryCount = async (country_name) => {
  const data = await db.query(
    "UPDATE country_counts SET count = 0 WHERE country_name = $1 RETURNING *;",
    [country_name]
  );
  let count = data.rows[0].count;
  console.log("count=", count);
  return count;
};

//unSaveAllCountries()
const unSaveAllCountries = async () => {
  const data = await db.query("DELETE FROM saved_countries RETURNING *");
  let output = data.rows[0];
  console.log("output=", output);
  return output;
};

/*----------------------------------
API Endpoints
----------------------------------*/

//	GET	/get-all-users	Retrieves all users from the database.
app.get("/get-all-users", async (req, res) => {
  //call helper function
  let users = await getAllUsers();
  res.json(users);
});

//	GET	/get-newest-user	Retrieves the most recently added user.
app.get("/get-newest-user", async (req, res) => {
  //call helper function
  let newestUser = await getNewestUser();
  res.json(newestUser);
});

//	POST	/add-one-user	Adds a new user to the database.
app.post("/add-one-user", async (req, res) => {
  try {
    const { name, country_name, email, bio } = req.body;
    //check for missing required field in the request body : id and newName
    if (!name || !country_name || !email || !bio) {
      //return error message with 400 Bad request status code, because the request was badly formed with wrong syntax.
      // All 4XX status codes are client-side errors, which means the client sent a bad request
      return res.status(400).send("Error : Missing required fields!");
    } else {
      //call helper function
      let result = await addOneUser(name, country_name, email, bio);
      console.log(result);
      res.send(`Status Code  : 200 | Success, user was added`);
    }
  } catch (error) {
    res.status(500).send("Internal Server Error!");
  }
});

//	POST	/update-one-country-count	Updates (or initializes) the view count of a country.
app.post("/update-one-country-count", async (req, res) => {
  try {
    const country_name = req.body.country_name;
    //check for missing required field in the request body : id and newName
    if (!country_name) {
      //return error message with 400 Bad request status code, because the request was badly formed with wrong syntax.
      // All 4XX status codes are client-side errors, which means the client sent a bad request
      return res.status(400).send("Error : Missing required fields!");
    } else {
      //call helper function
      let count = await updateOneCountryCount(country_name);
      console.log(count);
      res.json({ count: count });
    }
  } catch (error) {
    res.status(500).send("Internal Server Error!");
  }
});

//	GET	/get-all-saved-countries	Retrieves a list of all saved countries.
app.get("/get-all-saved-countries", async (req, res) => {
  //call helper function
  let savedCountries = await getAllSavedCountries();
  res.json(savedCountries);
});

//	POST	/save-one-country	Saves a country if it hasn’t already been saved.
app.post("/save-one-country", async (req, res) => {
  try {
    const country_name = req.body.country_name;
    //check for missing required field in the request body : id and newName
    if (!country_name) {
      //return error message with 400 Bad request status code, because the request was badly formed with wrong syntax.
      // All 4XX status codes are client-side errors, which means the client sent a bad request
      return res.status(400).send("Error : Missing required fields!");
    } else {
      //call helper function
      let result = await saveOneCountry(country_name);
      console.log(result);
      res.send(`Status Code  : 200 | Success! The country is saved.`);
    }
  } catch (error) {
    res.status(500).send("Internal Server Error!");
  }
});

// POST /unsave-one-country Unsaves a country if it has been saved.
app.post("/unsave-one-country", async (req, res) => {
  try {
    const country_name = req.body.country_name;
    //check for missing required field in the request body : id and newName
    if (!country_name) {
      //return error message with 400 Bad request status code, because the request was badly formed with wrong syntax.
      // All 4XX status codes are client-side errors, which means the client sent a bad request
      return res.status(400).send("Error : Missing required fields!");
    } else {
      //call helper function
      let result = await unsaveOneCountry(country_name);
      console.log(result);
      res.send(`Status Code  : 200 | Success! The country is unsaved.
`);
    }
  } catch (error) {
    res.status(500).send("Internal Server Error!");
  }
});

//🔹 POST /reset-one-country-count
app.post("/reset-one-country-count", async (req, res) => {
  try {
    const country_name = req.body.country_name;
    //check for missing required field in the request body : id and newName
    if (!country_name) {
      //return error message with 400 Bad request status code, because the request was badly formed with wrong syntax.
      // All 4XX status codes are client-side errors, which means the client sent a bad request
      return res.status(400).send("Error : Missing required fields!");
    } else {
      //call helper function
      let count = await resetOneCountryCount(country_name);
      console.log(count);
      res.json({ count: count });
    }
  } catch (error) {
    res.status(500).send("Internal Server Error!");
  }
});

//POST /unsave-all-countries
app.post("/unsave-all-countries", async (req, res) => {
  try {
    //call helper function
    let result = await unSaveAllCountries();
    console.log(result);
    res.json({ deletedCountries: result });
  } catch (error) {
    res.status(500).send("Internal Server Error!");
  }
});
