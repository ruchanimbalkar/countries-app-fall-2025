# Countries API Application - Version 5

## 👋 Welcome!

We are so close to completing our Countries API Application! The only thing left to do is deploy it so it's fully accessible on the internet, then write our README to explain our project to the world 🚀

---

## 🎯 Requirements for Version 4

To complete Version 5, you will...
- Deploy your server/API to Render
- Deploy your frontend to Netlify
- Write a README.md file to explain your project

---

## Remote Architecture

| **Element**    | **Deployment**  | **Description** |
| -------- | --------- | --- |
| UI | Netlify | Deploy frontend through Github. Creates an accessible URL in the browser. 
| Web server | Render | Deploy backend web server through Github. Can respond to HTTP requests from our deployed frontend.
| Database | Neon | Deploy PostgreSQL database to Neon. Connects to Render web server to respond to SQL queries.

---

## Why do we deploy our code to the internet? 

Deploying your application remotely makes your app accessible via a URL on the internet, not just your computer.

There are many deployment tools out there (like Heroku, DigitalOcean, and AWS) but we are using these ones because they are free to use. Let's get started!

---

## Set up your `version-5` folder

1. Copy the `client` folder in your `version-4` folder. Paste it into your `version-5` folder.
2. Copy the `server` folder in your `version-4` folder. Paste it into your `version-5` folder.
3. Push your code changes to Github.

---

## Updating your server/API's code in its `index.js` file 

  - Locate the `version-5/server/index.js` file, where your server/API code lives. We will update the boilerplate code in this `index.js` file. 
  - In the `index.js` file, update the value of the `connectionString` property to be `process.env.DATABASE_URL`: 
      
      ```js
      const db = new pg.Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: true, // use SSL encryption when connecting to the database
      });
      ```

- Delete the `config.js` file, which is located in the `version-5/server/src` directory. You don't need this anymore, because it's only for connecting a _local_ server to the database. 
- Delete this line of code from the top of your `index.js` file:  `import config.js file from "./config.js`
- Add, Commit, and Push to your updated code to Github

---

## Create a Render account

We will use Render to deploy our web server remotely to the web. 

- Go to [https://dashboard.render.com/billing#plan](https://dashboard.render.com/billing#plan) to sign up using your Github credentials. 
- Go through the onboarding flow to enter information about your profile and create a workspace. Select Hobbyist as the plan.

---

## Create a Web Server on Render

We will create a remote web server on Render that will run our Node.js code.

- Click on the Web Server option in main dashboard
- Link your Github repo with the countries_api project
- Click on Create a Project, give it a name (such as “Countries Project”)
- Root Directory should have the file path to your `src` directory that contains your server’s `index.js` file
- Build Command should be `npm install`
- Start Command should be `node index.js`, which is the same command we use to run our server locally

[](https://lh7-rt.googleusercontent.com/docsz/AD_4nXd9pECAhWqmVjv13TQqJIGzDcwywm9nj9SQBmWGnbmaW_G3TCx1ngu-X0VDPmIV5Iiefcl0vPjjCD104ui5Bn3EgecT60rE7qeSJOP1phq7rexAcw9Heh_NsNhMgOsqoizGFB-fcA?key=9je8baAxEYwQkPyIstTxIMhU)

- Select the Free option and start the deployment

---

## Find your Neon Database's Connection String

1. Go to the Neon.tech website and open up your Neon project's dashboard. You should see a 'Connect to your database' section where you can click on the Connect button.

    <img width="1508" height="805" alt="Connect to the Neon database on your Neon project's dashboard by choosing 'Connect'" src="https://github.com/user-attachments/assets/c98b8efc-1d97-4452-84f6-1020b648a71b" />
    
2. Once you click on the Connect button, you should see a window pop up with your database's Connection String, which contains the password/access credentials to your database. 

    <img width="1073" height="425" alt="Connect to the Neon database on your Neon project's dashboard" src="https://github.com/user-attachments/assets/d42a10f0-c414-43dc-a9ac-7ef978d424ee" />

    Make sure the Connection string starts with `postgresql://` — if it doesn't, you'll need to click on the dropdown menu to the upper left of the Connection String and make sure you have `Connection String` selected, and not something else like `psql`. 

    <img width="1075" height="427" alt="Selecting Connection String when connecting to Neon database instead of another option like psql" src="https://github.com/user-attachments/assets/fdf21a6b-c862-40ab-83bc-a0d3b949c5dc" />

3. Copy your database's Connection string by clicking on the "Copy Snippet" button below it. You will use it in the next step! 


---
 
## Configure your Web Server's Environment Variables in Render

To update your Render-hosted server to your Neon-hosted database, you will need to update the Render web server's environment variables to match the Neon database's connection string. 

  - In your Render Console for your remote server, go to the Environment section.  
  - Add one environment variable:
      - `DATABASE_URL` which should contain your Neon database's connection string that you copied in the previous step. 
  - It should look something like this:
    <img width="834" height="367" alt="Adding Neon database's connection string as an environmental variable called DATABASE_URL to the Render-hosted server" src="https://github.com/user-attachments/assets/1f13e87d-f3a5-4e4f-aec3-8c31c30783b6" />

- Click Save, Rebuild, and Deploy

--- 

## Debug your deployed server/API 

- Check the Logs tab on Render, which is where any error messages or console.log messages will show up. They will no longer show up in the server terminal anymore, because we're no longer running it on our local machine. 

    <img width="1484" height="857" alt="image" src="https://github.com/user-attachments/assets/aa2f82cd-b3a6-450f-a2e5-c55e62c1bf76" />
- If you see any error messages in the Logs, read it carefully to decipher how to fix the issue. 
- If you don't see any error messages, and the deployment was successful, you should see a green checkmark on the Events tab in Render.

  <img width="1486" height="847" alt="image" src="https://github.com/user-attachments/assets/0810f8f2-8591-4002-b76d-48e8cd8d3ad3" />

---

## Find your deployed server's URL and test its endpoints 

If you've cleared all error messages on Render and it looks like it deployed successfully, it's time to test it!

- Locate your server's URL in Render, which ends in `.onrender.com`. That's your deployed server/API's URL! This will replace the `http://localhost:3000` base URL, which is only for local servers. 

    <img width="1487" height="330" alt="Render Server's Deployment URL" src="https://github.com/user-attachments/assets/e07f9f14-94a2-4749-8927-cce255c01a92" />

- Copy your server's URL and paste it into the browser.
- If your Render server hasn't received a request in a while, it will go to sleep. If you try to send it a request when it's asleep, you'll see a loading screen like below. It'll take a minute to wake up, so hang tight. 

  <img width="1473" height="933" alt="Application Loading screen for the Render server" src="https://github.com/user-attachments/assets/5d37b03a-b702-4874-8822-8fbb00f446c2" />

- Once it's awake, you can send a request to your deployed server/API. Test it by sending a GET request to any of your GET endpoints! For example, if you want to get all saved countries, the URL might look like `https://countries-api-vn58.onrender.com/get-all-saved-countries`.

- Now your server is deployed remotely to Render! It's live on the internet! Hooray! 🎉

---

## Update the `vite.config.js` file in the frontend

- Now it's time to update the frontend code, which is in the `client` folder. First, locate your `vite.config.js` file in your `client` folder. 
- In your `vite.config.js` file, change the value of the `target` key so that it is your Render server's URL rather than `http://localhost:3000`:
    
    ```jsx
    // vite.config.js
    import { defineConfig } from "vite";
    import react from "@vitejs/plugin-react";
    
    // https://vite.dev/config/
    export default defineConfig({
      server: {
        proxy: {
          "/api": {
            target: "https://countries-api-vn58.onrender.com/",
            changeOrigin: true,
            secure: false,
            rewrite: (path) => path.replace(/^\/api/, ""),
          },
        },
      },
      plugins: [react()],
    });
    
    ```

---

## Update the `_redirects` file in the frontend
    
- Locate the `_redirects` file in the `public` folder** of your `client` folder. Currently it will have the following content:
        
    ```
    /api/* https://backend-answer-keys.onrender.com/:splat 200
    /\* /index.html 404
    /* /index.html 200
    ```
        
    - In this file, you should replace the `https://backend-answer-keys.onrender.com` URL with your own Render server's URL. Don't forget to keep the `/:splat 200` at the tail end of it. It might throw errors on VS Code but that is okay. Just make sure you’ve changed the URL.
        
        <img width="720" height="179" alt="The _redirects file" src="https://github.com/user-attachments/assets/440a3a38-f6b6-48fa-a5f8-6892bfc5d072" />
        

- Add, Commit, and Push your code to Github  

---

## Deploy `version-5/client` folder to Netlify

- In your Netlify account, deploy your `version-5/client` folder, which contains the frontend of your application. [Refer to this guide if you need help with this.](https://docs.google.com/document/d/18jxCUA0bebCyYaIHy8aaKMgOQH4w5-b-iCGDWpV4K4M/edit?tab=t.jnwta4jrhylr#heading=h.scmsi7a6s9yz)
- Open the Netlify deployment link in the browser.
- Test your application by going to its Netlify deployment link. If it’s all working, then as you interact with your `version-5` site, you should see data change in your Neon database.

At this point, you've:  
- deployed your frontend to Netlify
- deployed your backend PostgreSQL database to Render
- deployed your backend API to Render
- 
That means you’ve deployed all 3 parts of your full-stack application to the internet! YAY! 

---

## Test your full-stack application

Now it’s time to test! Go to your Netlify deployment link in the browser. Test your site by doing the following:

1. **Submit to the form.** 
    
    - Does that form data show up in the `users` table on Neon?
    - Does the Saved Countries page welcome our new user?

1. **Save a country that hasn't been saved yet.**

    - Does that country show up on the Saved Countries page?

1. Save a country that has already been saved before. 

    - Does that country show up on the Saved Countries page only once? Saved countries should not be saved multiple times. 

1. Update a country’s view count.

    - Each time you open a country’s CountryDetail page, do you see its view count go up by 1?

If you answered yes to all the above questions, you’re done with the Countries API project! You’ve now built a full-stack application from start to finish, and deployed it remotely to the internet! Now you can send the Netlify deployment link to your friends and they will be able to interact with your frontend, which will send requests to your server. which will change the data in the database. Pat yourself on the back for all your hard work! 🎉 

---

## Troubleshooting

- You can use Postman to troubleshoot your Render API endpoints if you are getting errors.
- The Logs section of Render will show you the console.logs or any error messages in your backend
- If you are having an issue with the Node server receiving the ‘body’ of your API call, try adding NODE_VERSION 21.1.0 in the Environmental Variable in the Render dashboard. This will also require you to add “type”: “modules” in your package.json and update all of your modules to ES modules. Then redeploy to Github.
- If you deploy your version-5 to Netlify, and get an error message when you open the deployment link that says *Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of “application/octet-stream”. Strict MIME type checking is enforced for module scripts per HTML spec*, this probably has something to do with your deploy settings in Netlify.
    - In the project's deploy settings on Netlify, change the Publish Directory to `version-5/dist` and the Build Command to `npm run build`. Then re-deploy and test your site again.
- Are you getting a 502 Bad Gateway error?
    - Make sure you have a `_redirects` file.
    - Make sure your web server has the correct Environment Variables. Compare the web server’s Environment Variables to your database server’s configuration keys (Which you can find under it’s Info tab under the Connections section.)
