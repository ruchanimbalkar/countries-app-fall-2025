# Countries API Application - Version 3

## 👋 Welcome!

In Version 3, you’ll upgrade your project to connect with a real API!

Instead of storing data in local storage, you'll now store and retrieve data from an API that’s provided for you. This version introduces how a frontend communicates with a backend using HTTP requests.

You’ll use the Fetch API to send and receive data — a critical skill for building real-world apps.

Coming up in Version 4, you'll go even further and build your own backend from scratch!

## 🎯 Requirements for Version 3

Include functionality in your Countries API project to store and retrieve these 3 types of data using the backend provided to you: 

1. **Form data**
    - As a user, when I submit the form, my data should be stored in the backend
    - As a user, if I have already submitted the form, I should see "Welcome, [user name]!" above the Form on the Saved Countries page. 
2. **Saved Countries data**
    - As a user, on my Saved Countries page, I should be able to see all of the Saved Countries.
    - As a user, when I click the Save button in an individual country's page, I should be able to see that country's card in my Saved Countries page
3. **View Count data** 
    - As a user, when I open a country's page, I should be able to see how many times the user has viewed this country.
    - Every time I view a country's page, its view count should go up by 1.
  
To use the API provided to you, check out the `api-documentation.md` file. 

## 🔗 Resources

- **API:** You will use the [REST Countries API](https://restcountries.com) to get the country data and flag images
- **Fetch API Guide:** MDN Web Docs has a great [Fetch API guide](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) that teaches you how to make requests for data from the backend.
- **API documentation:** Check out the `api-documentation.md` file for all the API endpoints you can use to send and receive data. 

## 📝 Tips for building your project

1. **Pseudo-code before you write any code!** Look through the designs to plan out how you'll tackle the project. Write down your plan somewhere in this README or in your code.
2. **Work on one feature at a time.** Finish one feature first before you move onto the next thing. Test as you go, routinely checking your site in the browser and making sure there are no errors before moving on. 
3. **Comment your code generously — Future You will thank you.** You’ll be building on top of this project over the next 3 months, so help yourself out by writing clear, helpful comments that explain what your code is doing. Trust us, it will save you time and confusion later.
4. **Clean up your code as you go**. Rename confusing variables, remove unused code, and organize your logic. Your code should read like a newspaper: clear, easy to follow, and understandable at a glance.

## 🚀 Roadmap: Step-by-step guide to building Version 3
Make sure you've finished Version 2 before starting. 

### Review the API documentation
1. Check out the `api-documentation.md` file to learn about all of the API endpoints you can use to store & retrieve the Form data, Saved Countries data, and Country Count data.

### Plan and Pseudo-code
1. Take time to understand your current code: App.jsx, App.css, pages, and components.
2. Think through where you will be storing and retrieving the 3 pieces of data (form, saved countries, and view count).
3. Pseudo-code the data flow for the 3 pieces of data. 

###  Project Setup: Copy your files over 
1. Copy all of the files from your `version-2` folder and paste them into your `version-3` folder
2. Push your code to Github! Your `version-2` code will serve as the starting point for `version-3`.

### Project Setup: Replace the contents of your `vite.config.js` file
1. Delete all of the code that's currently inside of your `vite.config.js` file
2. In its place, copy and paste this code into your `vite.config.js` file:
   ```
    // vite.config.js
    import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react";
    
    // https://vite.dev/config/
    export default defineConfig({
      server: {
        proxy: {
          "/api": {
            target: "https://backend-answer-keys.onrender.com/",
            changeOrigin: true,
            secure: false,
            rewrite: (path) => path.replace(/^\/api/, ""),
          },
        },
      },
      plugins: [react()],
    });

   ```

### Project Setup: Add a `_redirects` file to your `public` folder
1. Locate the `public` folder inside of your `src` folder in your `version-3` folder.
2. Inside of the `public` folder, create a new file called `_redirects`. Make sure the spelling is exactly `_redirects`!
3. Inside of this file, copy and paste this code:
   ```
    /api/* https://backend-answer-keys.onrender.com/:splat 200
    /\* /index.html 404
    /* /index.html 200
   ```

### 🎯 Milestone: Form data
1. Pseudo-code your plan to store and retrieve Form data. 
2. Store the data with a `POST` request: When the user submits the form, send the form data to the backend.
3. Retrieve the data with a `GET` request: If the user has already submitted the form, display “Welcome, [name]!” instead.
4. Add comments explaining your logic so that Future You can understand it later.
5. Push your code to Github! 

### 🎯 Milestone: View Count data 
1. Pseudo-code your plan for tracking the View Count data. 
2. Store the data with a `POST` request: Each time the user views a country's CountryDetail page, update its view count by sending a POST request to the API. In the response, you will get back the new count within an object: display the new count on the country's CountryDetail page. 
3. Add comments explaining your logic so that Future You can understand it later.
4. Push your code to Github!

### 🎯 Milestone: Saved Countries data
1. Pseudo-code your plan to store and retrieve Saved Countries data.
2. Store the data with a `POST` request: When the user saves a country, send that country's data to the backend.
3. Retrieve the data with a `GET` request: Retrieve and display saved countries on the Saved Countries page.
4. Add comments explaining your logic so that Future You can understand it later.
5. Push your code to Github!

### Clean and Comment your code 
1. Rename confusing variables, remove unused code, and organize your logic. Your code should read like a newspaper: clear, easy to follow, and understandable at a glance.
2. Write helpful comments explaining tricky logic — Future You will thank you. 
3. Push your code to Github!

### Deploy project to Netlify
1. Deploy your completed project to [Netlify](https://www.netlify.com/) via your Github repo. In your Netlify Deploy settings, you will need to specify which version you want to deploy. Check out [this guide to help you](https://docs.google.com/document/d/18jxCUA0bebCyYaIHy8aaKMgOQH4w5-b-iCGDWpV4K4M/edit?tab=t.jnwta4jrhylr#heading=h.scmsi7a6s9yz).
