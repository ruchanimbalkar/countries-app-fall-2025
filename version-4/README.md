# Countries API Application - Version 4

## 👋 Welcome!

Now it’s time to build your own backend from scratch! 

In this version, you'll:
- Set up a PostgreSQL database using **Neon.tech**
- Build a server using **Node.js** and **Express**
- Create API endpoints that handle HTTP requests to store and retrieve data

This version gives you real-world, hands-on experience designing and connecting your own backend services — a major milestone in full-stack development!

Coming up in Version 5, you’ll deploy your full-stack app to the web and see everything come together. 🚀

---

## 🎯 Requirements for Version 4

Build a working backend that allows your frontend to store and retrieve the following data:

1. **Form data**
    - As a user, when I submit the form, my data should be stored in a PostgreSQL database
    - If I’ve already submitted the form, I should see “Welcome, [my name]!” above the form on the Saved Countries page

2. **Saved Countries**
    - When I click the Save button on a country’s page, that country should be saved in the database
    - I should be able to view all saved countries on the Saved Countries page

3. **View Count**
    - Each time I open a country’s detail page, the view count for that country should increase by 1
    - I should be able to see the total number of times I’ve viewed each country

---

## 🔗 Resources

- **Node.js + Express Starter**  
  [Node.js Docs](https://nodejs.org/en/docs), [Express Docs](https://expressjs.com/)

- **PostgreSQL + pgAdmin Setup Guide**  
  [Official pgAdmin Docs](https://www.pgadmin.org/docs/)

- **SQL Crash Course**  
  [SQL for Beginners - freeCodeCamp YouTube](https://www.youtube.com/watch?v=HXV3zeQKqGY)

- **RESTful API Design**  
  [REST API Tutorial](https://restfulapi.net/)

---

## 📝 Tips for building your project

1. **Start small and test often.** Build one API endpoint at a time and test it with Postman.
2. **Use clear, consistent endpoints.** Follow REST conventions:  
   `GET /form`, `POST /form`, `GET /saved-countries`, `POST /view-count`, etc.
3. **Don’t forget your `.env` file.** Store your database URL and port here — never hardcode secrets!
4. **Comment your backend code** just like your frontend. Future You will thank you.
5. **Use `console.log()` wisely.** Log helpful messages, especially in route handlers and database queries.

---

## 🚀 Roadmap: Step-by-step guide to building Version 4

### 🎯 Milestone: Create your database schema
1. Write PostgreSQL code to:
   a. Create 3 tables: `users`, `saved_countries`, and `country_counts`
   b. Insert at least 3 rows of sample data into each table
   c. Write SQL queries your API will need to:
        - Store and retrieve Form data
        - Store and retrieve Saved Countries data
        - Store and retrieve Country Count data

### 🎯 Milestone: Set up your PostgreSQL database on Neon
1. Use Neon.tech to:
  - Create a new database
  - Set up your schema (create the 3 tables and insert rows of sample data)
  - Confirm that the data was inserted successfully

### Set up your server in the `server-local` folder
1. In the terminal, `cd` into your `server-local` folder
2. Run `npm init` to create your `package.json` file
3. Install the following `npm` packages: `express` and `pg`
4. Create a `src` folder inside of the `server-local` folder
5. In the `src` folder, create your new server file called `index.js`. This file is where you will build all of your API endpoints! 

### 🎯 Milestone: Build API Endpoints for Form data
- `POST /add-one-user`: Save submitted form data
- `GET /newest-user`: Return the form data if it exists
- Test your API endpoints in Postman to make sure they're working

### 🎯 Milestone: Build API Endpoints for Saved Countries
- `POST /save-one-country`: Save a country
- `GET /get-all-saved-countries`: Return all saved countries
- Test your API endpoints in Postman to make sure they're working

### 🎯 Milestone: Build API Endpoint for Country Count
- `POST /update-one-country-count`: Increment the view count
- Test your API endpoint in Postman to make sure they're working

### Connect your frontend to your backend
1. Update your `vite.config.js` file so that it fetches data from `http://localhost:3000` as the base URL

### Test everything
1. Test all user flows: submitting the form, saving a country, viewing a country’s view count
2. Check your database to make sure the data is updating correctly

### Clean and Comment your code
1. Refactor your backend code to make it clean and modular
2. Comment complex logic to explain how it works

### Deploy & Submit
1. Push your code to Github
2. Submit to Canvas!

---

## 🌟 Stretch Goals (Optional)

Finished the main requirements? Here are some bonus challenges:

- 🏆 Add a “Delete” route to unsave a country
- 🏆 Add a “Reset Form” feature that lets the user re-submit the form
